import { Router, type Request, type Response } from "express";
import { openai } from "@workspace/integrations-openai-ai-server";
import { getChapterById, getSubjectById } from "../data/content";

const router = Router();

const summaryCache = new Map<string, { summary: string; keyPoints: string[]; hinglishSummary: string; hinglishKeyPoints: string[] }>();
const mcqCache = new Map<
  string,
  Array<{ id: string; question: string; options: string[]; correctIndex: number; explanation: string }>
>();

router.get(
  "/chapters/:chapterId/summary",
  async (req: Request<{ chapterId: string }>, res: Response) => {
  const chapter = getChapterById(req.params.chapterId);
  if (!chapter) {
    res.status(404).json({ error: "Chapter not found" });
    return;
  }

  const cached = summaryCache.get(chapter.id);
  if (cached) {
    res.json({ chapterId: chapter.id, ...cached });
    return;
  }

  const subject = getSubjectById(chapter.subjectId);
  const subjectName = subject?.name ?? chapter.subjectId;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5-mini",
      max_completion_tokens: 2048,
      messages: [
        {
          role: "user",
          content: `You are a helpful teacher for CBSE Class 9 students in India.

Generate TWO summaries for the chapter "${chapter.title}" from ${subjectName} (CBSE Class 9).

Chapter description: ${chapter.description}

1. ENGLISH SUMMARY: Short, exam-oriented, covers all important points.
2. HINGLISH SUMMARY: Very easy language. Explain as if teaching a beginner. Use simple English mixed with Hindi/Hinglish words. Include important concepts, characters, formulas and exam tips.

Respond ONLY with a valid JSON object in this exact format:
{
  "summary": "English summary - 3-4 sentences, exam-focused, key points.",
  "keyPoints": [
    "Key point 1",
    "Key point 2",
    "Key point 3",
    "Key point 4",
    "Key point 5"
  ],
  "hinglishSummary": "Hinglish summary - bahut aasaan language mein. Jaise ek dost samjha raha ho. Important concepts, formulas, exam tips include karo.",
  "hinglishKeyPoints": [
    "Hinglish point 1 - easy language",
    "Hinglish point 2 - simple explanation",
    "Hinglish point 3 - exam tip",
    "Hinglish point 4 - key concept",
    "Hinglish point 5 - important formula or character"
  ]
}`,
        },
      ],
    });

    const content = response.choices[0]?.message?.content ?? "{}";
    let parsed: { summary: string; keyPoints: string[]; hinglishSummary: string; hinglishKeyPoints: string[] };
    try {
      parsed = JSON.parse(content);
    } catch {
      parsed = {
        summary: `${chapter.title} covers ${chapter.description}. This is an important chapter for CBSE Class 9 ${subjectName}.`,
        keyPoints: [
          `Understanding ${chapter.title} is fundamental to ${subjectName}`,
          "Practice problems from NCERT textbook regularly",
          "Review definitions and formulas carefully",
          "Understand the concepts before memorizing",
          "Refer to solved examples to clarify doubts",
        ],
        hinglishSummary: `${chapter.title} ek important chapter hai CBSE Class 9 ${subjectName} ke liye. ${chapter.description}. Is chapter ko achhe se samajh lo, exam mein bahut aata hai.`,
        hinglishKeyPoints: [
          `${chapter.title} ka concept clear karo - ye ${subjectName} ka base hai`,
          "NCERT textbook ke questions practice karo - exam mein direct aate hain",
          "Definitions aur formulas ko carefully padho - confuse mat hona",
          "Concepts pehle samajh lo, baad mein yaad karna aasan hai",
          "Solved examples ko refer karo - doubt clear hone mein help karega",
        ],
      };
    }

    summaryCache.set(chapter.id, parsed);
    res.json({ chapterId: chapter.id, ...parsed });
  } catch (err) {
    req.log.error({ err }, "Error generating summary");
    res.status(500).json({ error: "Failed to generate summary" });
  }
  },
);

router.get(
  "/chapters/:chapterId/mcqs",
  async (req: Request<{ chapterId: string }>, res: Response) => {
  const chapter = getChapterById(req.params.chapterId);
  if (!chapter) {
    res.status(404).json({ error: "Chapter not found" });
    return;
  }

  const cached = mcqCache.get(chapter.id);
  if (cached) {
    res.json(cached);
    return;
  }

  const subject = getSubjectById(chapter.subjectId);
  const subjectName = subject?.name ?? chapter.subjectId;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5-mini",
      max_completion_tokens: 2048,
      messages: [
        {
          role: "user",
          content: `You are a CBSE Class 9 teacher creating MCQ questions for the chapter "${chapter.title}" from ${subjectName}.

Chapter description: ${chapter.description}

Generate exactly 5 multiple choice questions suitable for CBSE Class 9 students.

Respond ONLY with a valid JSON array in this exact format:
[
  {
    "id": "q1",
    "question": "Question text here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": 0,
    "explanation": "Brief explanation of why this answer is correct."
  }
]

Ensure correctIndex is 0-3 indicating which option (0=A, 1=B, 2=C, 3=D) is correct.`,
        },
      ],
    });

    const content = response.choices[0]?.message?.content ?? "[]";
    let parsed: Array<{
      id: string;
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    }>;

    try {
      parsed = JSON.parse(content);
    } catch {
      parsed = [
        {
          id: "q1",
          question: `What is the main topic of the chapter "${chapter.title}"?`,
          options: [
            chapter.description.split(" ").slice(0, 4).join(" "),
            "Photosynthesis and respiration",
            "Newton's laws of motion",
            "The French Revolution",
          ],
          correctIndex: 0,
          explanation: `${chapter.title} deals with ${chapter.description}.`,
        },
      ];
    }

    mcqCache.set(chapter.id, parsed);
    res.json(parsed);
  } catch (err) {
    req.log.error({ err }, "Error generating MCQs");
    res.status(500).json({ error: "Failed to generate MCQs" });
  }
  },
);

export default router;
