import fs from 'fs';

const content = fs.readFileSync('attached_assets/Class9_SST_Important_QA-1_1781281246487.docx', 'utf8');

// Map of chapter titles to content.ts chapter IDs
const chapterTitleMap = {
  'The French Revolution': 'ss-1',
  'Socialism in Europe and the Russian Revolution': 'ss-2',
  'Nazism and the Rise of Hitler': 'ss-3',
  'Forest Society and Colonialism': 'ss-4',
  'Pastoralists in the Modern World': 'ss-5',
  'India — Size and Location': 'ss-7',
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
  'Disasters and its Hazards': 'ss-21-disaster',  // Not in content.ts
  'Disaster Management and Safer Construction Practices': 'ss-22-disaster', // Not in content.ts
};

const lines = content.split('\n');
const questions = {};
let currentChapterId = null;
let currentQuestion = null;
let collectingAnswer = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  // Detect chapter heading
  const chapterMatch = line.match(/^📖 Chapter \d+: (.+)$/);
  if (chapterMatch) {
    const title = chapterMatch[1].trim();
    currentChapterId = chapterTitleMap[title] || null;
    if (currentChapterId) {
      if (!questions[currentChapterId]) questions[currentChapterId] = [];
    }
    currentQuestion = null;
    collectingAnswer = false;
    continue;
  }

  // Detect question
  const qMatch = line.match(/^\[(\d+) Marks\]\s+Q:\s*(.+)$/);
  if (qMatch && currentChapterId) {
    const marks = parseInt(qMatch[1]);
    const question = qMatch[2].trim();
    currentQuestion = { question, marks, answer: '' };
    questions[currentChapterId].push(currentQuestion);
    collectingAnswer = true;
    continue;
  }

  // Detect answer start
  const ansMatch = line.match(/^Ans:\s*(.*)$/);
  if (ansMatch && currentQuestion) {
    currentQuestion.answer = ansMatch[1].trim();
    collectingAnswer = true;
    continue;
  }

  // Collect answer continuation
  if (collectingAnswer && currentQuestion && line && !line.startsWith('📖') && !line.startsWith('[') && !line.startsWith('Ans:')) {
    currentQuestion.answer += '\n' + line;
  }
}

// Print as TS object
console.log('export const previousYearQuestions = [');
for (const [chapterId, qs] of Object.entries(questions)) {
  console.log(`  { chapterId: "${chapterId}", questions: [`);
  for (const q of qs) {
    const ans = q.answer.replace(/`/g, '\\`').replace(/\\n/g, '\\n');
    console.log(`    { question: \`${q.question}\`, marks: ${q.marks}, answer: \`${ans}\` },`);
  }
  console.log('  ] },');
}
console.log('];');

// Count
let total = 0;
for (const qs of Object.values(questions)) total += qs.length;
console.log(`\n// Total chapters: ${Object.keys(questions).length}, Total questions: ${total}`);
