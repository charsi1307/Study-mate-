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

const hindiKshitijIds = ["jD_bYMq2m8Y","xYXhA8fvS_g","0_QVkb5wvec","sVMpSbrn3VM","-eA9pBaQRKs","JDs3Ayqm7-4","3n1P6Vpww6M","4LCWEYsf8DA","xYXhA8fvS_g","sVMpSbrn3VM","0_QVkb5wvec","sVMpSbrn3VM","jD_bYMq2m8Y","sVMpSbrn3VM","-eA9pBaQRKs","sVMpSbrn3VM","4LCWEYsf8DA"];
const hindiSparshIds = ["S2hB4holnd0","S2hB4holnd0","S2hB4holnd0","S2hB4holnd0","S2hB4holnd0","S2hB4holnd0","jkdW5JorvQI","0-FUQjTrmNQ","OGjIedwVULk","S2hB4holnd0","S2hB4holnd0","S2hB4holnd0","vSo7Iq0dzhU","l-cC2eqo77k","_dibA0wwEpE"];

export const subjects: SubjectData[] = [
  {
    id: "maths",
    name: "Mathematics",
    description: "Algebra, Geometry, Statistics and more",
    icon: "calculator",
    color: "#6366f1",
    chapters: [
      { id: "maths-1", subjectId: "maths", number: 1, title: "Number Systems", description: "Real numbers, irrational numbers, and the number line", youtubeVideoId: "IMnSIaPcqiE", duration: "18:45" },
      { id: "maths-2", subjectId: "maths", number: 2, title: "Polynomials", description: "Definition, degree, zeroes and factorisation of polynomials", youtubeVideoId: "WwcsvWh69_Q", duration: "22:10" },
      { id: "maths-3", subjectId: "maths", number: 3, title: "Coordinate Geometry", description: "Cartesian plane, coordinates and distance between two points", youtubeVideoId: "3MIZUl6bWxY", duration: "20:30" },
      { id: "maths-4", subjectId: "maths", number: 4, title: "Linear Equations in Two Variables", description: "Linear equations, solutions and graphical representation", youtubeVideoId: "rnudiJxVXxM", duration: "25:00" },
      { id: "maths-5", subjectId: "maths", number: 5, title: "Introduction to Euclid's Geometry", description: "Euclid's definitions, axioms and postulates", youtubeVideoId: "mxeXcTjQiuM", duration: "15:20" },
      { id: "maths-6", subjectId: "maths", number: 6, title: "Lines and Angles", description: "Angles, parallel lines, transversals and their properties", youtubeVideoId: "nEYldznpZmk", duration: "19:50" },
      { id: "maths-7", subjectId: "maths", number: 7, title: "Triangles", description: "Congruence of triangles and their properties", youtubeVideoId: "wIeiqvdVCJI", duration: "28:15" },
      { id: "maths-8", subjectId: "maths", number: 8, title: "Quadrilaterals", description: "Properties of parallelograms, rectangles, squares and rhombuses", youtubeVideoId: "STrfPXdTzUA", duration: "21:40" },
      { id: "maths-9", subjectId: "maths", number: 9, title: "Areas of Parallelograms and Triangles", description: "Figures on same base and between same parallels", youtubeVideoId: "8XFyN7oUhZg", duration: "24:00" },
      { id: "maths-10", subjectId: "maths", number: 10, title: "Circles", description: "Angle subtended by a chord, cyclic quadrilaterals", youtubeVideoId: "mCWjZ5q58u8", duration: "26:30" },
      { id: "maths-11", subjectId: "maths", number: 11, title: "Constructions", description: "Basic constructions and constructing triangles", youtubeVideoId: "jatncoayANg", duration: "17:45" },
      { id: "maths-12", subjectId: "maths", number: 12, title: "Heron's Formula", description: "Area of triangle using Heron's formula and its applications", youtubeVideoId: "ZZEqpRKR4mI", duration: "20:15" },
      { id: "maths-13", subjectId: "maths", number: 13, title: "Surface Areas and Volumes", description: "Cube, cuboid, cylinder, cone, sphere and hemisphere", youtubeVideoId: "CqkDFwAZlC4", duration: "30:00" },
      { id: "maths-14", subjectId: "maths", number: 14, title: "Statistics", description: "Collection, presentation and analysis of data, mean, median, mode", youtubeVideoId: "vOcgQETAy08", duration: "23:00" },
      { id: "maths-15", subjectId: "maths", number: 15, title: "Probability", description: "Experimental approach to probability and its applications", youtubeVideoId: "fbM6MsueWT8", duration: "18:30" },
    ],
  },
  {
    id: "science",
    name: "Science",
    description: "Physics, Chemistry and Biology concepts",
    icon: "flask",
    color: "#10b981",
    chapters: [
      { id: "science-1", subjectId: "science", number: 1, title: "Matter in Our Surroundings", description: "States of matter, interconversion and effect of temperature and pressure", youtubeVideoId: "G3hza-lgnQs", duration: "24:30" },
      { id: "science-2", subjectId: "science", number: 2, title: "Is Matter Around Us Pure?", description: "Mixtures, solutions, colloids and separation methods", youtubeVideoId: "mv9QOTH5Exs", duration: "26:15" },
      { id: "science-3", subjectId: "science", number: 3, title: "Atoms and Molecules", description: "Laws of chemical combination, atomic and molecular masses", youtubeVideoId: "g7ri3srcn1Q", duration: "30:00" },
      { id: "science-4", subjectId: "science", number: 4, title: "Structure of the Atom", description: "Bohr's model, electronic configuration and valency", youtubeVideoId: "f-U-N5HcP-Y", duration: "28:45" },
      { id: "science-5", subjectId: "science", number: 5, title: "The Fundamental Unit of Life", description: "Cell structure, organelles and their functions", youtubeVideoId: "tbTeeqISUzo", duration: "22:00" },
      { id: "science-6", subjectId: "science", number: 6, title: "Tissues", description: "Plant and animal tissues and their types", youtubeVideoId: "PSwDpuw5kPA", duration: "25:30" },
      { id: "science-7", subjectId: "science", number: 7, title: "Diversity in Living Organisms", description: "Classification and hierarchy of living organisms", youtubeVideoId: "HHbFCy2lEVc", duration: "27:00" },
      { id: "science-8", subjectId: "science", number: 8, title: "Motion", description: "Distance, displacement, speed, velocity and acceleration", youtubeVideoId: "OzENYyB63iI", duration: "32:20" },
      { id: "science-9", subjectId: "science", number: 9, title: "Force and Laws of Motion", description: "Newton's three laws of motion and their applications", youtubeVideoId: "eeG9_f9ELBA", duration: "29:10" },
      { id: "science-10", subjectId: "science", number: 10, title: "Gravitation", description: "Universal law of gravitation, acceleration due to gravity", youtubeVideoId: "YeqQWJ74t-M", duration: "28:00" },
      { id: "science-11", subjectId: "science", number: 11, title: "Work and Energy", description: "Work, energy, power and their interrelation", youtubeVideoId: "38xLDSrMxeE", duration: "25:45" },
      { id: "science-12", subjectId: "science", number: 12, title: "Sound", description: "Production, propagation and characteristics of sound", youtubeVideoId: "aynVhvlDYkk", duration: "24:15" },
      { id: "science-13", subjectId: "science", number: 13, title: "Why Do We Fall Ill?", description: "Health, disease and their causes, immunity", youtubeVideoId: "BU4iegMXWCw", duration: "21:30" },
      { id: "science-14", subjectId: "science", number: 14, title: "Natural Resources", description: "Air, water, soil and biogeochemical cycles", youtubeVideoId: "rLKMERwFQz0", duration: "20:00" },
      { id: "science-15", subjectId: "science", number: 15, title: "Improvement in Food Resources", description: "Crop production, animal husbandry and sustainable practices", youtubeVideoId: "68hwjxxh_34", duration: "22:30" },
    ],
  },
  {
    id: "social-science",
    name: "Social Science",
    description: "History, Geography, Civics and Economics",
    icon: "globe",
    color: "#f59e0b",
    chapters: [
      // History
      { id: "ss-1", subjectId: "social-science", number: 1, title: "The French Revolution", description: "Causes, events and impact of the French Revolution", youtubeVideoId: "qjuqPfy6gwU", duration: "35:00" },
      { id: "ss-2", subjectId: "social-science", number: 2, title: "Socialism in Europe and the Russian Revolution", description: "Rise of socialism and the Russian Revolution of 1917", youtubeVideoId: "V1K-bhiaV9w", duration: "30:45" },
      { id: "ss-3", subjectId: "social-science", number: 3, title: "Nazism and the Rise of Hitler", description: "Rise of Hitler, Nazi ideology and World War II", youtubeVideoId: "aBURdabrhBA", duration: "32:30" },
      { id: "ss-4", subjectId: "social-science", number: 4, title: "Forest Society and Colonialism", description: "Deforestation, forest laws and tribal revolts", youtubeVideoId: "fua0AGRybg8", duration: "28:15" },
      { id: "ss-5", subjectId: "social-science", number: 5, title: "Pastoralists in the Modern World", description: "Lives of pastoral communities and colonial impact", youtubeVideoId: "-YFBcI-xPiM", duration: "26:00" },
      { id: "ss-6", subjectId: "social-science", number: 6, title: "Peasants and Farmers", description: "Agrarian societies and peasant movements globally", youtubeVideoId: "NiHrfcFDzBA", duration: "25:00" },
      // Geography
      { id: "ss-7", subjectId: "social-science", number: 7, title: "India – Size and Location", description: "India's geographical position, size and neighbouring countries", youtubeVideoId: "G8oi-Qlwb9E", duration: "18:20" },
      { id: "ss-8", subjectId: "social-science", number: 8, title: "Physical Features of India", description: "Himalayan mountains, northern plains, plateaus and coastal plains", youtubeVideoId: "cv_DwtW0c-Q", duration: "22:15" },
      { id: "ss-9", subjectId: "social-science", number: 9, title: "Drainage", description: "River systems of India, lakes and their significance", youtubeVideoId: "JTVxuCGTxE8", duration: "24:00" },
      { id: "ss-10", subjectId: "social-science", number: 10, title: "Climate", description: "Climatic controls, monsoons and seasons of India", youtubeVideoId: "JfT_ci-pi-k", duration: "26:30" },
      { id: "ss-11", subjectId: "social-science", number: 11, title: "Natural Vegetation and Wildlife", description: "Types of vegetation, forests and conservation efforts", youtubeVideoId: "cnW-TLjkNTM", duration: "23:00" },
      { id: "ss-12", subjectId: "social-science", number: 12, title: "Population", description: "Size, distribution, growth and composition of India's population", youtubeVideoId: "6nppIEsHkqg", duration: "21:45" },
      // Political Science
      { id: "ss-13", subjectId: "social-science", number: 13, title: "Democracy in the Contemporary World", description: "Democratic regimes and transitions across the world", youtubeVideoId: "RCpWFnF5XQg", duration: "19:30" },
      { id: "ss-14", subjectId: "social-science", number: 14, title: "What is Democracy? Why Democracy?", description: "Features, merits and demerits of democracy", youtubeVideoId: "zum9LXY_o4Q", duration: "20:00" },
      { id: "ss-15", subjectId: "social-science", number: 15, title: "Constitutional Design", description: "Indian constitution, its making and guiding values", youtubeVideoId: "Hp03gNFqHrw", duration: "25:40" },
      { id: "ss-16", subjectId: "social-science", number: 16, title: "Electoral Politics", description: "Elections, political parties and representation in India", youtubeVideoId: "py9OGrgUVXo", duration: "22:10" },
      { id: "ss-17", subjectId: "social-science", number: 17, title: "Working of Institutions", description: "Parliament, executive, judiciary and their functions", youtubeVideoId: "h9BOoAqttrk", duration: "24:30" },
      { id: "ss-18", subjectId: "social-science", number: 18, title: "Democratic Rights", description: "Fundamental rights and their enforcement in India", youtubeVideoId: "gjIlCuiryfs", duration: "20:45" },
      // Economics
      { id: "ss-19", subjectId: "social-science", number: 19, title: "The Story of Village Palampur", description: "Economic activities, production and farming in a village", youtubeVideoId: "ZmJ1pNWltW8", duration: "22:50" },
      { id: "ss-20", subjectId: "social-science", number: 20, title: "People as Resource", description: "Human capital, education, health and economic development", youtubeVideoId: "XlY_U0vfX68", duration: "21:00" },
      { id: "ss-21", subjectId: "social-science", number: 21, title: "Poverty as a Challenge", description: "Causes, extent and anti-poverty measures in India", youtubeVideoId: "r5MQ4DzoINM", duration: "23:30" },
      { id: "ss-22", subjectId: "social-science", number: 22, title: "Food Security in India", description: "Food security, public distribution system and buffer stocks", youtubeVideoId: "nx4OSNe_AB8", duration: "20:15" },
    ],
  },
  {
    id: "english",
    name: "English",
    description: "Literature, Grammar and Writing Skills",
    icon: "book-open",
    color: "#ec4899",
    chapters: [
      // Beehive Prose
      { id: "eng-1", subjectId: "english", number: 1, title: "The Fun They Had", description: "A futuristic story about mechanical teachers and schools", youtubeVideoId: "A30OuLLUa-g", duration: "15:30" },
      { id: "eng-2", subjectId: "english", number: 2, title: "The Sound of Music", description: "Stories of Evelyn Glennie and Bismillah Khan", youtubeVideoId: "PiarTp5kP8s", duration: "18:00" },
      { id: "eng-3", subjectId: "english", number: 3, title: "The Little Girl", description: "A story about a child's fear and eventual love for her father", youtubeVideoId: "0aKcX6eqa9w", duration: "16:45" },
      { id: "eng-4", subjectId: "english", number: 4, title: "A Truly Beautiful Mind", description: "The life of Albert Einstein and his contributions", youtubeVideoId: "5pPrqM9i588", duration: "20:10" },
      { id: "eng-5", subjectId: "english", number: 5, title: "The Snake and the Mirror", description: "A humorous story about a doctor and a snake", youtubeVideoId: "nViom0_nfk4", duration: "17:20" },
      { id: "eng-6", subjectId: "english", number: 6, title: "My Childhood", description: "Memories of APJ Abdul Kalam's childhood and early life", youtubeVideoId: "oKsrn0ytX3k", duration: "19:35" },
      { id: "eng-7", subjectId: "english", number: 7, title: "Packing", description: "A humorous account of packing for a holiday", youtubeVideoId: "Q0I8RfcbtN8", duration: "14:55" },
      { id: "eng-8", subjectId: "english", number: 8, title: "Reach for the Top", description: "Stories of Santosh Yadav and Maria Sharapova", youtubeVideoId: "nu8ifL0Zl7E", duration: "21:00" },
      // Beehive Poems
      { id: "eng-9", subjectId: "english", number: 9, title: "The Road Not Taken", description: "A poem about choices and decisions in life by Robert Frost", youtubeVideoId: "yn-P6EZsohE", duration: "12:30" },
      { id: "eng-10", subjectId: "english", number: 10, title: "Wind", description: "A poem about the power and symbolism of wind by Subramania Bharati", youtubeVideoId: "s-K4mdjDOQg", duration: "11:45" },
      { id: "eng-11", subjectId: "english", number: 11, title: "Rain on the Roof", description: "A poem about rain and memories by Coates Kinney", youtubeVideoId: "toFntUdFpxA", duration: "10:30" },
      { id: "eng-12", subjectId: "english", number: 12, title: "The Lake Isle of Innisfree", description: "A poem about longing for nature by W.B. Yeats", youtubeVideoId: "dyrfCe1kKwE", duration: "10:15" },
      { id: "eng-13", subjectId: "english", number: 13, title: "A Legend of the Northland", description: "A folk tale in verse form about Saint Peter and a woman", youtubeVideoId: "SRXpV3a22ho", duration: "13:00" },
      { id: "eng-14", subjectId: "english", number: 14, title: "No Men Are Foreign", description: "A poem about universal brotherhood by James Kirkup", youtubeVideoId: "9AfUKVjHIok", duration: "10:45" },
      { id: "eng-15", subjectId: "english", number: 15, title: "The Duck and the Kangaroo", description: "A humorous poem about friendship by Edward Lear", youtubeVideoId: "ylWa10vD5rc", duration: "9:30" },
      { id: "eng-16", subjectId: "english", number: 16, title: "On Killing a Tree", description: "A poem about the resilience of nature by Gieve Patel", youtubeVideoId: "FbC6tTteJ5A", duration: "11:00" },
      { id: "eng-17", subjectId: "english", number: 17, title: "The Snake Trying", description: "A poem about human cruelty towards animals by W.W.E. Ross", youtubeVideoId: "PVW6a0FeBso", duration: "10:15" },
      { id: "eng-18", subjectId: "english", number: 18, title: "A Slumber Did My Spirit Seal", description: "A poem about loss and acceptance by William Wordsworth", youtubeVideoId: "a3f2Xvrjhfg", duration: "9:45" },
      // Moments
      { id: "eng-19", subjectId: "english", number: 19, title: "The Lost Child", description: "A story about a child lost in a fair by Mulk Raj Anand", youtubeVideoId: "tGMrW7lD4zk", duration: "14:00" },
      { id: "eng-20", subjectId: "english", number: 20, title: "The Adventures of Toto", description: "A mischievous monkey and his antics by Ruskin Bond", youtubeVideoId: "NTz3QLUgWxE", duration: "13:30" },
      { id: "eng-21", subjectId: "english", number: 21, title: "Iswaran the Storyteller", description: "A master storyteller and his wild tales by R.K. Laxman", youtubeVideoId: "XJT5Kda5kUI", duration: "15:15" },
      { id: "eng-22", subjectId: "english", number: 22, title: "In the Kingdom of Fools", description: "A folktale about a foolish king and his kingdom", youtubeVideoId: "80Q43II-kZ0", duration: "12:45" },
      { id: "eng-23", subjectId: "english", number: 23, title: "The Happy Prince", description: "A statue and a swallow who help the poor by Oscar Wilde", youtubeVideoId: "i4wcKCV-e-4", duration: "18:30" },
      { id: "eng-24", subjectId: "english", number: 24, title: "Weathering the Storm in Ersama", description: "A boy's courage during the 1999 Orissa cyclone", youtubeVideoId: "s31AldGuaqM", duration: "14:30" },
      { id: "eng-25", subjectId: "english", number: 25, title: "The Last Leaf", description: "A story of hope and sacrifice by O. Henry", youtubeVideoId: "a_Lc6sc3CKQ", duration: "16:00" },
      { id: "eng-26", subjectId: "english", number: 26, title: "A House Is Not a Home", description: "A story about overcoming loss by Zan Gaudioso", youtubeVideoId: "7r2LmgeM160", duration: "13:45" },
      { id: "eng-27", subjectId: "english", number: 27, title: "The Accidental Tourist", description: "A humorous story about travel mishaps by Bill Bryson", youtubeVideoId: "alVtTm-38gc", duration: "15:00" },
      { id: "eng-28", subjectId: "english", number: 28, title: "The Beggar", description: "A story about transformation and kindness by Anton Chekhov", youtubeVideoId: "PghXzZVQnIc", duration: "14:15" },
    ],
  },
  {
    id: "hindi",
    name: "Hindi",
    description: "Kshitij – श्रेणी भाग 2 \u0026 Sparsh \u2013 स्पर्श",
    icon: "scroll",
    color: "#f97316",
    chapters: [
      // Kshitij (Part 2) - prose, poem, letter, notice
      { id: "hindi-k1", subjectId: "hindi", number: 1, title: "वे आँखें मीथी को परबत करो", description: "प्रयावरण के प्रभाव और प्रदूषण", youtubeVideoId: hindiKshitijIds[0], duration: "12:00" },
      { id: "hindi-k2", subjectId: "hindi", number: 2, title: "तुम काबून हो मेरे पास", description: "व्यक्तिगत कविता", youtubeVideoId: hindiKshitijIds[1], duration: "10:00" },
      { id: "hindi-k3", subjectId: "hindi", number: 3, title: "जल्प्रलय और कलु कुमार की उनकोटी", description: "व्यक्तिगत कहानी", youtubeVideoId: hindiKshitijIds[2], duration: "14:00" },
      { id: "hindi-k4", subjectId: "hindi", number: 4, title: "मेरे छोटे से नीजी पुस्तकालय", description: "व्यक्तिगत व्यंग्यास", youtubeVideoId: hindiKshitijIds[3], duration: "11:00" },
      { id: "hindi-k5", subjectId: "hindi", number: 5, title: "हामिद खाँ", description: "व्यक्तिगत कहानी", youtubeVideoId: hindiKshitijIds[4], duration: "13:00" },
      { id: "hindi-k6", subjectId: "hindi", number: 6, title: "नए इलाके में", description: "व्यक्तिगत कहानी", youtubeVideoId: hindiKshitijIds[5], duration: "12:00" },
      { id: "hindi-k7", subjectId: "hindi", number: 7, title: "आग", description: "व्यक्तिगत कहानी", youtubeVideoId: hindiKshitijIds[6], duration: "10:00" },
      { id: "hindi-k8", subjectId: "hindi", number: 8, title: "दिया जले उसी जमीन", description: "व्यक्तिगत कविता", youtubeVideoId: hindiKshitijIds[7], duration: "09:00" },
      { id: "hindi-k9", subjectId: "hindi", number: 9, title: "ज़िप्रिया प्रयोग और टिप़िया घर", description: "व्यक्तिगत व्यंग्यास", youtubeVideoId: hindiKshitijIds[8], duration: "11:00" },
      { id: "hindi-k10", subjectId: "hindi", number: 10, title: "किब्बिली", description: "व्यक्तिगत कविता", youtubeVideoId: hindiKshitijIds[9], duration: "08:00" },
      { id: "hindi-k11", subjectId: "hindi", number: 11, title: "शुक्रतारे के समान", description: "व्यक्तिगत कविता", youtubeVideoId: hindiKshitijIds[10], duration: "09:00" },
      { id: "hindi-k12", subjectId: "hindi", number: 12, title: "पंडित जवाहरलाल नेहरू", description: "व्यक्तिगत जीवनी", youtubeVideoId: hindiKshitijIds[11], duration: "15:00" },
      { id: "hindi-k13", subjectId: "hindi", number: 13, title: "गिर कविता", description: "व्यक्तिगत कविता", youtubeVideoId: hindiKshitijIds[12], duration: "10:00" },
      { id: "hindi-k14", subjectId: "hindi", number: 14, title: "अंधेर नगरी चौपट राजा", description: "व्यंग्यास", youtubeVideoId: hindiKshitijIds[13], duration: "12:00" },
      { id: "hindi-k15", subjectId: "hindi", number: 15, title: "सचिव की सूचना पत्र", description: "व्यक्तिगत पत्र", youtubeVideoId: hindiKshitijIds[14], duration: "11:00" },
      { id: "hindi-k16", subjectId: "hindi", number: 16, title: "स्नेही को पत्र", description: "व्यक्तिगत पत्र", youtubeVideoId: hindiKshitijIds[15], duration: "10:00" },
      { id: "hindi-k17", subjectId: "hindi", number: 17, title: "ग्राम शिल्पी", description: "व्यक्तिगत जीवनी", youtubeVideoId: hindiKshitijIds[16], duration: "14:00" },
      // Sparsh (supplementary)
      { id: "hindi-s1", subjectId: "hindi", number: 18, title: "धूल", description: "व्यक्तिगत कहानी", youtubeVideoId: hindiSparshIds[0], duration: "12:00" },
      { id: "hindi-s2", subjectId: "hindi", number: 19, title: "गाय", description: "व्यक्तिगत कविता", youtubeVideoId: hindiSparshIds[1], duration: "10:00" },
      { id: "hindi-s3", subjectId: "hindi", number: 20, title: "किदाब और मैं म्यूज़िक से कुछ दिन", description: "व्यक्तिगत कहानी", youtubeVideoId: hindiSparshIds[2], duration: "11:00" },
      { id: "hindi-s4", subjectId: "hindi", number: 21, title: "चांदीनी और मैं", description: "व्यक्तिगत व्यंग्यास", youtubeVideoId: hindiSparshIds[3], duration: "09:00" },
      { id: "hindi-s5", subjectId: "hindi", number: 22, title: "जीवन का संघर्ष के बाद कुछ दिन", description: "व्यक्तिगत व्यंग्यास", youtubeVideoId: hindiSparshIds[4], duration: "08:00" },
      { id: "hindi-s6", subjectId: "hindi", number: 23, title: "मात्रृभूमि का अस्मिता निर्दार की मेो क्वाल", description: "व्यक्तिगत कहानी", youtubeVideoId: hindiSparshIds[5], duration: "12:00" },
      { id: "hindi-s6b", subjectId: "hindi", number: 24, title: "जिस पुस्तक में तिन कहानियां हैं", description: "व्यक्तिगत कहानी", youtubeVideoId: hindiSparshIds[6], duration: "10:00" },
      { id: "hindi-s7", subjectId: "hindi", number: 25, title: "श़ुक्रीया", description: "व्यक्तिगत कविता", youtubeVideoId: hindiSparshIds[7], duration: "09:00" },
      { id: "hindi-s8", subjectId: "hindi", number: 26, title: "व्यंग्यास", description: "व्यक्तिगत व्यंग्यास", youtubeVideoId: hindiSparshIds[8], duration: "11:00" },
      { id: "hindi-s9", subjectId: "hindi", number: 27, title: "एक मकान ई की विभा है", description: "व्यक्तिगत व्यंग्यास", youtubeVideoId: hindiSparshIds[9], duration: "10:00" },
      { id: "hindi-s10", subjectId: "hindi", number: 28, title: "बालड़ि ज़िमेदारी", description: "व्यक्तिगत कहानी", youtubeVideoId: hindiSparshIds[10], duration: "13:00" },
      { id: "hindi-s11", subjectId: "hindi", number: 29, title: "क्या च़ूते हैं लम्बी मटि क़़ुरसानी साहब", description: "व्यक्तिगत व्यंग्यास", youtubeVideoId: hindiSparshIds[11], duration: "11:00" },
      { id: "hindi-s12", subjectId: "hindi", number: 30, title: "कौन सिंह सिंह को क्यों पसंद करती है", description: "व्यक्तिगत कहानी", youtubeVideoId: hindiSparshIds[12], duration: "12:00" },
      { id: "hindi-s13", subjectId: "hindi", number: 31, title: "रहीम के दोहे", description: "व्यक्तिगत दोहा", youtubeVideoId: hindiSparshIds[13], duration: "08:00" },
      { id: "hindi-s14", subjectId: "hindi", number: 32, title: "कबीर", description: "व्यक्तिगत दोहा", youtubeVideoId: hindiSparshIds[14], duration: "09:00" },
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
