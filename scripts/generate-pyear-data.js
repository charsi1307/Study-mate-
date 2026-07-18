import fs from 'fs';

// ==================== PARSE MATHS ====================
const mathsContent = fs.readFileSync('attached_assets/maths_questions_(1)_1781281246742.js', 'utf8');
const mathsMatch = mathsContent.match(/const mathsQuestions = ([\s\S]+);$/);
const mathsData = eval('(' + mathsMatch[1] + ')');

const mathsChapterMap = {
  'Number Systems': 'maths-1',
  'Polynomials': 'maths-2',
  'Coordinate Geometry': 'maths-3',
  'Linear Equations in Two Variables': 'maths-4',
  'Introduction to Euclid\'s Geometry': 'maths-5',
  'Lines and Angles': 'maths-6',
  'Triangles': 'maths-7',
  'Quadrilaterals': 'maths-8',
  'Circles': 'maths-10',
  'Heron\'s Formula': 'maths-12',
  'Surface Areas and Volumes': 'maths-13',
  'Statistics': 'maths-14',
};

// ==================== PARSE SCIENCE ====================
const scienceContent = fs.readFileSync('attached_assets/science_questions_1781281246914.js', 'utf8');
const scienceMatch = scienceContent.match(/const scienceQuestions = ([\s\S]+);$/);
const scienceData = eval('(' + scienceMatch[1] + ')');

const scienceChapterMap = {
  'Matter in Our Surroundings': 'science-1',
  'Is Matter Around Us Pure': 'science-2',
  'Atoms and Molecules': 'science-3',
  'Structure of the Atom': 'science-4',
  'The Fundamental Unit of Life': 'science-5',
  'Tissues': 'science-6',
  'Diversity in Living Organisms': 'science-7',
  'Motion': 'science-8',
  'Force and Laws of Motion': 'science-9',
  'Gravitation': 'science-10',
  'Work and Energy': 'science-11',
  'Sound': 'science-12',
  'Why Do We Fall Ill': 'science-13',
  'Natural Resources': 'science-14',
  'Improvement in Food Resources': 'science-15',
};

// ==================== PARSE SST ====================
const sstContent = fs.readFileSync('attached_assets/Class9_SST_Important_QA-1_1781281246487.docx', 'utf8');
const sstLines = sstContent.split('\n');

const sstChapterMap = {
  'The French Revolution': 'ss-1',
  'Socialism in Europe and the Russian Revolution': 'ss-2',
  'Nazism and the Rise of Hitler': 'ss-3',
  'Forest Society and Colonialism': 'ss-4',
  'Pastoralists in the Modern World': 'ss-5',
  'India \u2014 Size and Location': 'ss-7',
  'Physical Features of India': 'ss-8',
  'Drainage': 'ss-9',
  'Climate': 'ss-10',
  'Natural Vegetation and Wildlife': 'ss-11',
  'Population': 'ss-12',
  'What is Democracy? Why Democracy?': 'ss-14',
  'Constitutional Design': 'ss-15',
  'Electoral Politics': 'ss-16',
  'Working of Institutions': 'ss-17',
  'Democratic Rights': 'ss-18',
  'The Story of Village Palampur': 'ss-19',
  'People as Resource': 'ss-20',
  'Poverty as a Challenge': 'ss-21',
  'Food Security in India': 'ss-22',
  'Disasters and its Hazards': 'ss-21',
  'Disaster Management and Safer Construction Practices': 'ss-22',
};

const sstQuestions = {};
let currentChapterId = null;
let currentQ = null;

for (const line of sstLines) {
  const trimmed = line.trim();
  if (!trimmed) continue;

  const chMatch = trimmed.match(/^\ud83d\udcd6 Chapter \d+: (.+)$/);
  if (chMatch) {
    const title = chMatch[1].trim();
    currentChapterId = sstChapterMap[title] || null;
    if (currentChapterId && !sstQuestions[currentChapterId]) sstQuestions[currentChapterId] = [];
    currentQ = null;
    continue;
  }

  const qMatch = trimmed.match(/^\[(\d+) Marks\]\s+Q:\s*(.+)$/);
  if (qMatch && currentChapterId) {
    currentQ = { question: qMatch[2].trim(), marks: parseInt(qMatch[1]), answer: '' };
    sstQuestions[currentChapterId].push(currentQ);
    continue;
  }

  const ansMatch = trimmed.match(/^Ans:\s*(.*)$/);
  if (ansMatch && currentQ) {
    currentQ.answer = ansMatch[1].trim();
    continue;
  }

  if (currentQ && currentQ.answer && !trimmed.startsWith('\ud83d\udcd6') && !trimmed.startsWith('[')) {
    currentQ.answer += '\n' + trimmed;
  }
}

// ==================== GENERATE OUTPUT ====================
function esc(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

let output = `export interface PreviousYearQuestion {
  question: string;
  marks: number;
  answer: string;
}

export interface ChapterPreviousYearQuestions {
  chapterId: string;
  subjectId: string;
  chapterNumber: number;
  chapterTitle: string;
  questions: PreviousYearQuestion[];
}

`;

const allChapters = [];

// Maths
for (const [title, chapterId] of Object.entries(mathsChapterMap)) {
  const qs = mathsData[title] || [];
  const num = parseInt(chapterId.split('-')[1]);
  allChapters.push({ chapterId, subjectId: 'maths', chapterNumber: num, chapterTitle: title, questions: qs });
}

// Science
for (const [title, chapterId] of Object.entries(scienceChapterMap)) {
  const qs = scienceData[title] || [];
  const num = parseInt(chapterId.split('-')[1]);
  allChapters.push({ chapterId, subjectId: 'science', chapterNumber: num, chapterTitle: title, questions: qs });
}

// SST
for (const [chapterId, qs] of Object.entries(sstQuestions)) {
  const num = parseInt(chapterId.split('-')[1]);
  // Find title from map
  const title = Object.entries(sstChapterMap).find(([_, id]) => id === chapterId)?.[0] || 'SST Chapter';
  allChapters.push({ chapterId, subjectId: 'social-science', chapterNumber: num, chapterTitle: title, questions: qs });
}

output += `const previousYearQuestionsData: ChapterPreviousYearQuestions[] = [\n`;

for (const ch of allChapters) {
  output += `  {
    chapterId: "${ch.chapterId}",
    subjectId: "${ch.subjectId}",
    chapterNumber: ${ch.chapterNumber},
    chapterTitle: "${esc(ch.chapterTitle)}",
    questions: [
`;
  for (const q of ch.questions) {
    output += `      {
        question: \`${esc(q.q || q.question)}\`,
        marks: ${q.marks},
        answer: \`${esc(q.answer)}\`,
      },
`;
  }
  output += `    ],
  },
`;
}

output += `];

export const allPreviousYearQuestions = previousYearQuestionsData;

export function getPreviousYearQuestionsByChapterId(chapterId: string): ChapterPreviousYearQuestions | undefined {
  return previousYearQuestionsData.find((q) => q.chapterId === chapterId);
}

export function getPreviousYearQuestionsBySubjectId(subjectId: string): ChapterPreviousYearQuestions[] {
  return previousYearQuestionsData.filter((q) => q.subjectId === subjectId);
}
`;

fs.writeFileSync('artifacts/api-server/src/data/previousYearQuestions.ts', output);

// Count
let totalQs = 0;
for (const ch of allChapters) totalQs += ch.questions.length;
console.log(`Generated ${allChapters.length} chapters with ${totalQs} total questions`);

// Verify per-chapter counts
for (const ch of allChapters) {
  console.log(`  ${ch.chapterId}: ${ch.questions.length} questions`);
}
