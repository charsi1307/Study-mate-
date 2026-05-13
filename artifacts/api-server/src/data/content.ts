export interface SubjectData {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  chapters: ChapterData[];
}

export interface ChapterData {
  id: string;
  subjectId: string;
  number: number;
  title: string;
  description: string;
  youtubeVideoId: string;
  duration: string;
}

export const subjects: SubjectData[] = [
  {
    id: "maths",
    name: "Mathematics",
    description: "Algebra, Geometry, Statistics and more",
    icon: "calculator",
    color: "#6366f1",
    chapters: [
      {
        id: "maths-1",
        subjectId: "maths",
        number: 1,
        title: "Number Systems",
        description: "Real numbers, irrational numbers, and the number line",
        youtubeVideoId: "q_SHr2Z4MiQ",
        duration: "18:45",
      },
      {
        id: "maths-2",
        subjectId: "maths",
        number: 2,
        title: "Polynomials",
        description: "Definition, degree, zeroes and factorisation of polynomials",
        youtubeVideoId: "0hkNl7VmNbQ",
        duration: "22:10",
      },
      {
        id: "maths-3",
        subjectId: "maths",
        number: 3,
        title: "Coordinate Geometry",
        description: "Cartesian plane, coordinates and distance between two points",
        youtubeVideoId: "ZRlKGKiGkGo",
        duration: "20:30",
      },
      {
        id: "maths-4",
        subjectId: "maths",
        number: 4,
        title: "Linear Equations in Two Variables",
        description: "Linear equations, solutions and graphical representation",
        youtubeVideoId: "r5gYuNaKpYo",
        duration: "25:00",
      },
      {
        id: "maths-5",
        subjectId: "maths",
        number: 5,
        title: "Introduction to Euclid's Geometry",
        description: "Euclid's definitions, axioms and postulates",
        youtubeVideoId: "Ds_cCwBRX6E",
        duration: "15:20",
      },
      {
        id: "maths-6",
        subjectId: "maths",
        number: 6,
        title: "Lines and Angles",
        description: "Angles, parallel lines, transversals and their properties",
        youtubeVideoId: "NkfIVLWP5Ac",
        duration: "19:50",
      },
      {
        id: "maths-7",
        subjectId: "maths",
        number: 7,
        title: "Triangles",
        description: "Congruence of triangles and their properties",
        youtubeVideoId: "7Dm9P35rEgk",
        duration: "28:15",
      },
      {
        id: "maths-8",
        subjectId: "maths",
        number: 8,
        title: "Quadrilaterals",
        description: "Properties of parallelograms, rectangles, squares and rhombuses",
        youtubeVideoId: "0sFjMoSEQtA",
        duration: "21:40",
      },
    ],
  },
  {
    id: "science",
    name: "Science",
    description: "Physics, Chemistry and Biology concepts",
    icon: "flask",
    color: "#10b981",
    chapters: [
      {
        id: "science-1",
        subjectId: "science",
        number: 1,
        title: "Matter in Our Surroundings",
        description: "States of matter, interconversion and effect of temperature and pressure",
        youtubeVideoId: "vdICUq7cIk8",
        duration: "24:30",
      },
      {
        id: "science-2",
        subjectId: "science",
        number: 2,
        title: "Is Matter Around Us Pure?",
        description: "Mixtures, solutions, colloids and separation methods",
        youtubeVideoId: "LRAFoWToG-4",
        duration: "26:15",
      },
      {
        id: "science-3",
        subjectId: "science",
        number: 3,
        title: "Atoms and Molecules",
        description: "Laws of chemical combination, atomic and molecular masses",
        youtubeVideoId: "9P7J5EsH4Ek",
        duration: "30:00",
      },
      {
        id: "science-4",
        subjectId: "science",
        number: 4,
        title: "Structure of the Atom",
        description: "Bohr's model, electronic configuration and valency",
        youtubeVideoId: "lT-7GV-wMa8",
        duration: "28:45",
      },
      {
        id: "science-5",
        subjectId: "science",
        number: 5,
        title: "The Fundamental Unit of Life",
        description: "Cell structure, organelles and their functions",
        youtubeVideoId: "kqE6bwGzO7E",
        duration: "22:00",
      },
      {
        id: "science-6",
        subjectId: "science",
        number: 6,
        title: "Tissues",
        description: "Plant and animal tissues and their types",
        youtubeVideoId: "1iMX1sMBhWg",
        duration: "25:30",
      },
      {
        id: "science-7",
        subjectId: "science",
        number: 7,
        title: "Motion",
        description: "Distance, displacement, speed, velocity and acceleration",
        youtubeVideoId: "VUsD-PoaHYo",
        duration: "32:20",
      },
      {
        id: "science-8",
        subjectId: "science",
        number: 8,
        title: "Force and Laws of Motion",
        description: "Newton's three laws of motion and their applications",
        youtubeVideoId: "2z8lZs_OJ0I",
        duration: "29:10",
      },
    ],
  },
  {
    id: "social-science",
    name: "Social Science",
    description: "History, Geography, Civics and Economics",
    icon: "globe",
    color: "#f59e0b",
    chapters: [
      {
        id: "ss-1",
        subjectId: "social-science",
        number: 1,
        title: "The French Revolution",
        description: "Causes, events and impact of the French Revolution",
        youtubeVideoId: "K0aXFpDiKqI",
        duration: "35:00",
      },
      {
        id: "ss-2",
        subjectId: "social-science",
        number: 2,
        title: "Socialism in Europe and the Russian Revolution",
        description: "Rise of socialism and the Russian Revolution of 1917",
        youtubeVideoId: "aYSPNtWF4oQ",
        duration: "30:45",
      },
      {
        id: "ss-3",
        subjectId: "social-science",
        number: 3,
        title: "Nazism and the Rise of Hitler",
        description: "Rise of Hitler, Nazi ideology and World War II",
        youtubeVideoId: "e5k2SVG-TiA",
        duration: "32:30",
      },
      {
        id: "ss-4",
        subjectId: "social-science",
        number: 4,
        title: "India – Size and Location",
        description: "India's geographical position, size and neighbouring countries",
        youtubeVideoId: "4cH5JFjxAkE",
        duration: "18:20",
      },
      {
        id: "ss-5",
        subjectId: "social-science",
        number: 5,
        title: "Physical Features of India",
        description: "Himalayan mountains, northern plains, plateaus and coastal plains",
        youtubeVideoId: "ZFiJJbhJl8s",
        duration: "22:15",
      },
      {
        id: "ss-6",
        subjectId: "social-science",
        number: 6,
        title: "What is Democracy? Why Democracy?",
        description: "Features, merits and demerits of democracy",
        youtubeVideoId: "KHal0gLR3h8",
        duration: "20:00",
      },
      {
        id: "ss-7",
        subjectId: "social-science",
        number: 7,
        title: "Constitutional Design",
        description: "Indian constitution, its making and guiding values",
        youtubeVideoId: "3w_jBJLpJ-0",
        duration: "25:40",
      },
      {
        id: "ss-8",
        subjectId: "social-science",
        number: 8,
        title: "The Story of Village Palampur",
        description: "Economic activities, production and farming in a village",
        youtubeVideoId: "sQg8TxQKPd4",
        duration: "22:50",
      },
    ],
  },
  {
    id: "english",
    name: "English",
    description: "Literature, Grammar and Writing Skills",
    icon: "book-open",
    color: "#ec4899",
    chapters: [
      {
        id: "eng-1",
        subjectId: "english",
        number: 1,
        title: "The Fun They Had",
        description: "A futuristic story about mechanical teachers and schools",
        youtubeVideoId: "uqTkCZ4a3XY",
        duration: "15:30",
      },
      {
        id: "eng-2",
        subjectId: "english",
        number: 2,
        title: "The Sound of Music",
        description: "Stories of Evelyn Glennie and Bismillah Khan",
        youtubeVideoId: "WIR7xbD-LJY",
        duration: "18:00",
      },
      {
        id: "eng-3",
        subjectId: "english",
        number: 3,
        title: "The Little Girl",
        description: "A story about a child's fear and eventual love for her father",
        youtubeVideoId: "eDxSwOp-Yv4",
        duration: "16:45",
      },
      {
        id: "eng-4",
        subjectId: "english",
        number: 4,
        title: "A Truly Beautiful Mind",
        description: "The life of Albert Einstein and his contributions",
        youtubeVideoId: "OBzHqgpKwXE",
        duration: "20:10",
      },
      {
        id: "eng-5",
        subjectId: "english",
        number: 5,
        title: "The Snake and the Mirror",
        description: "A humorous story about a doctor and a snake",
        youtubeVideoId: "p8WIuWmWB8E",
        duration: "17:20",
      },
      {
        id: "eng-6",
        subjectId: "english",
        number: 6,
        title: "My Childhood",
        description: "Memories of APJ Abdul Kalam's childhood and early life",
        youtubeVideoId: "kzgMM1sqZ0M",
        duration: "19:35",
      },
      {
        id: "eng-7",
        subjectId: "english",
        number: 7,
        title: "Packing",
        description: "A humorous account of packing for a holiday",
        youtubeVideoId: "9wQdwBNyxFM",
        duration: "14:55",
      },
      {
        id: "eng-8",
        subjectId: "english",
        number: 8,
        title: "Reach for the Top",
        description: "Stories of Santosh Yadav and Maria Sharapova",
        youtubeVideoId: "IibBHJnTCjY",
        duration: "21:00",
      },
    ],
  },
];

export function getSubjectById(id: string): SubjectData | undefined {
  return subjects.find((s) => s.id === id);
}

export function getChapterById(id: string): ChapterData | undefined {
  for (const subject of subjects) {
    const chapter = subject.chapters.find((c) => c.id === id);
    if (chapter) return chapter;
  }
  return undefined;
}
