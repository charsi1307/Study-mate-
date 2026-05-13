import { Router } from "express";
import { openai } from "@workspace/integrations-openai-ai-server";
import { getChapterById, getSubjectById } from "../data/content";

const router = Router();

const summaryCache = new Map<string, { summary: string; keyPoints: string[] }>();
const mcqCache = new Map<
  string,
  Array<{ id: string; question: string; options: string[]; correctIndex: number; explanation: string }>
>();

router.get("/chapters/:chapterId/summary", async (req, res) => {
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
      max_completion_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `You are a helpful teacher for CBSE Class 9 students in India.

Generate a concise educational summary for the chapter "${chapter.title}" from ${subjectName} (CBSE Class 9).

Chapter description: ${chapter.description}

Respond ONLY with a valid JSON object in this exact format:
{
  "summary": "A clear 3-4 sentence summary of the chapter concepts for Class 9 students.",
  "keyPoints": [
    "Key point 1",
    "Key point 2",
    "Key point 3",
    "Key point 4",
    "Key point 5"
  ]
}`,
        },
      ],
    });

    const content = response.choices[0]?.message?.content ?? "{}";
    let parsed: { summary: string; keyPoints: string[] };
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
      };
    }

    summaryCache.set(chapter.id, parsed);
    res.json({ chapterId: chapter.id, ...parsed });
  } catch (err) {
    req.log.error({ err }, "Error generating summary");
    res.status(500).json({ error: "Failed to generate summary" });
  }
});

router.get("/chapters/:chapterId/mcqs", async (req, res) => {
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
});

export default router;
