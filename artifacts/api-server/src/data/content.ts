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

// Video IDs are populated only after the chapter, format, and source have been verified.
const hindiKshitijIds = [
  "", "", "", "",
  "", "", "", "",
  "", "", "", "",
  "", "", "", "",
  "", "", ""
];
const hindiSparshIds = [
  "", "", "", "",
  "", "", "", "",
  "", "", "", "",
  "", "", "", ""
];

export const subjects: SubjectData[] = [
  {
    id: "maths",
    name: "Mathematics",
    description: "Algebra, Geometry, Statistics and more",
    icon: "calculator",
    color: "#6366f1",
    chapters: [
      { id: "maths-1", subjectId: "maths", number: 1, title: "Number Systems", description: "Real numbers, irrational numbers, and the number line", youtubeVideoId: "IMnSIaPcqiE", duration: "18:45" },
      { id: "maths-2", subjectId: "maths", number: 2, title: "Polynomials", description: "Definition, degree, zeroes and factorisation of polynomials", youtubeVideoId: "4VHrvMutJQw", duration: "22:10" },
      { id: "maths-3", subjectId: "maths", number: 3, title: "Coordinate Geometry", description: "Cartesian plane, coordinates and distance between two points", youtubeVideoId: "3MIZUl6bWxY", duration: "20:30" },
      { id: "maths-4", subjectId: "maths", number: 4, title: "Linear Equations in Two Variables", description: "Linear equations, solutions and graphical representation", youtubeVideoId: "rnudiJxVXxM", duration: "25:00" },
      { id: "maths-5", subjectId: "maths", number: 5, title: "Introduction to Euclid's Geometry", description: "Euclid's definitions, axioms and postulates", youtubeVideoId: "mxeXcTjQiuM", duration: "15:20" },
      { id: "maths-6", subjectId: "maths", number: 6, title: "Lines and Angles", description: "Angles, parallel lines, transversals and their properties", youtubeVideoId: "nEYldznpZmk", duration: "19:50" },
      { id: "maths-7", subjectId: "maths", number: 7, title: "Triangles", description: "Congruence of triangles and their properties", youtubeVideoId: "wIeiqvdVCJI", duration: "28:15" },
      { id: "maths-8", subjectId: "maths", number: 8, title: "Quadrilaterals", description: "Properties of parallelograms, rectangles, squares and rhombuses", youtubeVideoId: "STrfPXdTzUA", duration: "21:40" },
      { id: "maths-9", subjectId: "maths", number: 9, title: "Areas of Parallelograms and Triangles", description: "Figures on same base and between same parallels", youtubeVideoId: "", duration: "24:00" },
      { id: "maths-10", subjectId: "maths", number: 10, title: "Circles", description: "Angle subtended by a chord, cyclic quadrilaterals", youtubeVideoId: "mCWjZ5q58u8", duration: "26:30" },
      { id: "maths-11", subjectId: "maths", number: 11, title: "Constructions", description: "Basic constructions and constructing triangles", youtubeVideoId: "", duration: "17:45" },
      { id: "maths-12", subjectId: "maths", number: 12, title: "Heron's Formula", description: "Area of triangle using Heron's formula and its applications", youtubeVideoId: "", duration: "20:15" },
      { id: "maths-13", subjectId: "maths", number: 13, title: "Surface Areas and Volumes", description: "Cube, cuboid, cylinder, cone, sphere and hemisphere", youtubeVideoId: "", duration: "30:00" },
      { id: "maths-14", subjectId: "maths", number: 14, title: "Statistics", description: "Collection, presentation and analysis of data, mean, median, mode", youtubeVideoId: "", duration: "23:00" },
      { id: "maths-15", subjectId: "maths", number: 15, title: "Probability", description: "Experimental approach to probability and its applications", youtubeVideoId: "", duration: "18:30" },
    ],
  },
  {
    id: "science",
    name: "Science",
    description: "Physics, Chemistry and Biology concepts",
    icon: "flask",
    color: "#10b981",
    chapters: [
      { id: "science-1", subjectId: "science", number: 1, title: "Matter in Our Surroundings", description: "States of matter, interconversion and effect of temperature and pressure", youtubeVideoId: "d9tySXcfT-I", duration: "24:30" },
      { id: "science-2", subjectId: "science", number: 2, title: "Is Matter Around Us Pure?", description: "Mixtures, solutions, colloids and separation methods", youtubeVideoId: "aSXeach0I4A", duration: "26:15" },
      { id: "science-3", subjectId: "science", number: 3, title: "Atoms and Molecules", description: "Laws of chemical combination, atomic and molecular masses", youtubeVideoId: "YjDLkvTAYCU", duration: "30:00" },
      { id: "science-4", subjectId: "science", number: 4, title: "Structure of the Atom", description: "Bohr's model, electronic configuration and valency", youtubeVideoId: "vER0Fsazwe0", duration: "28:45" },
      { id: "science-5", subjectId: "science", number: 5, title: "The Fundamental Unit of Life", description: "Cell structure, organelles and their functions", youtubeVideoId: "_zOwnsquS6E", duration: "22:00" },
      { id: "science-6", subjectId: "science", number: 6, title: "Tissues", description: "Plant and animal tissues and their types", youtubeVideoId: "", duration: "25:30" },
      { id: "science-7", subjectId: "science", number: 7, title: "Diversity in Living Organisms", description: "Classification and hierarchy of living organisms", youtubeVideoId: "", duration: "27:00" },
      { id: "science-8", subjectId: "science", number: 8, title: "Motion", description: "Distance, displacement, speed, velocity and acceleration", youtubeVideoId: "EEwqHBmp7zU", duration: "32:20" },
      { id: "science-9", subjectId: "science", number: 9, title: "Force and Laws of Motion", description: "Newton's three laws of motion and their applications", youtubeVideoId: "uOz2jyshMO8", duration: "29:10" },
      { id: "science-10", subjectId: "science", number: 10, title: "Gravitation", description: "Universal law of gravitation, acceleration due to gravity", youtubeVideoId: "K_gbborBB_A", duration: "28:00" },
      { id: "science-11", subjectId: "science", number: 11, title: "Work and Energy", description: "Work, energy, power and their interrelation", youtubeVideoId: "NOu2YoxVyvY", duration: "25:45" },
      { id: "science-12", subjectId: "science", number: 12, title: "Sound", description: "Production, propagation and characteristics of sound", youtubeVideoId: "-sWDY2jc9nM", duration: "24:15" },
      { id: "science-13", subjectId: "science", number: 13, title: "Why Do We Fall Ill?", description: "Health, disease and their causes, immunity", youtubeVideoId: "", duration: "21:30" },
      { id: "science-14", subjectId: "science", number: 14, title: "Natural Resources", description: "Air, water, soil and biogeochemical cycles", youtubeVideoId: "", duration: "20:00" },
      { id: "science-15", subjectId: "science", number: 15, title: "Improvement in Food Resources", description: "Crop production, animal husbandry and sustainable practices", youtubeVideoId: "", duration: "22:30" },
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
      { id: "ss-1", subjectId: "social-science", number: 1, title: "The French Revolution", description: "Causes, events and impact of the French Revolution", youtubeVideoId: "N4KswB4OA0c", duration: "35:00" },
      { id: "ss-2", subjectId: "social-science", number: 2, title: "Socialism in Europe and the Russian Revolution", description: "Rise of socialism and the Russian Revolution of 1917", youtubeVideoId: "-VtOiHjmftc", duration: "30:45" },
      { id: "ss-3", subjectId: "social-science", number: 3, title: "Nazism and the Rise of Hitler", description: "Rise of Hitler, Nazi ideology and World War II", youtubeVideoId: "rFS0j494QEY", duration: "32:30" },
      { id: "ss-4", subjectId: "social-science", number: 4, title: "Forest Society and Colonialism", description: "Deforestation, forest laws and tribal revolts", youtubeVideoId: "", duration: "28:15" },
      { id: "ss-5", subjectId: "social-science", number: 5, title: "Pastoralists in the Modern World", description: "Lives of pastoral communities and colonial impact", youtubeVideoId: "EGdQVjWoxrQ", duration: "26:00" },
      { id: "ss-6", subjectId: "social-science", number: 6, title: "Peasants and Farmers", description: "Agrarian societies and peasant movements globally", youtubeVideoId: "", duration: "25:00" },
      // Geography
      { id: "ss-7", subjectId: "social-science", number: 7, title: "India – Size and Location", description: "India's geographical position, size and neighbouring countries", youtubeVideoId: "CdVf_H44tho", duration: "18:20" },
      { id: "ss-8", subjectId: "social-science", number: 8, title: "Physical Features of India", description: "Himalayan mountains, northern plains, plateaus and coastal plains", youtubeVideoId: "HpfNT8KhkoQ", duration: "22:15" },
      { id: "ss-9", subjectId: "social-science", number: 9, title: "Drainage", description: "River systems of India, lakes and their significance", youtubeVideoId: "7-4UgkKHm-g", duration: "24:00" },
      { id: "ss-10", subjectId: "social-science", number: 10, title: "Climate", description: "Climatic controls, monsoons and seasons of India", youtubeVideoId: "JfT_ci-pi-k", duration: "26:30" },
      { id: "ss-11", subjectId: "social-science", number: 11, title: "Natural Vegetation and Wildlife", description: "Types of vegetation, forests and conservation efforts", youtubeVideoId: "L26wKCUwo5o", duration: "23:00" },
      { id: "ss-12", subjectId: "social-science", number: 12, title: "Population", description: "Size, distribution, growth and composition of India's population", youtubeVideoId: "", duration: "21:45" },
      // Political Science
      { id: "ss-13", subjectId: "social-science", number: 13, title: "Democracy in the Contemporary World", description: "Democratic regimes and transitions across the world", youtubeVideoId: "zEXL6vwgz6c", duration: "19:30" },
      { id: "ss-14", subjectId: "social-science", number: 14, title: "What is Democracy? Why Democracy?", description: "Features, merits and demerits of democracy", youtubeVideoId: "zEXL6vwgz6c", duration: "20:00" },
      { id: "ss-15", subjectId: "social-science", number: 15, title: "Constitutional Design", description: "Indian constitution, its making and guiding values", youtubeVideoId: "Hp03gNFqHrw", duration: "25:40" },
      { id: "ss-16", subjectId: "social-science", number: 16, title: "Electoral Politics", description: "Elections, political parties and representation in India", youtubeVideoId: "09c12iKuLfY", duration: "22:10" },
      { id: "ss-17", subjectId: "social-science", number: 17, title: "Working of Institutions", description: "Parliament, executive, judiciary and their functions", youtubeVideoId: "oMqEsD-Utac", duration: "24:30" },
      { id: "ss-18", subjectId: "social-science", number: 18, title: "Democratic Rights", description: "Fundamental rights and their enforcement in India", youtubeVideoId: "gjIlCuiryfs", duration: "20:45" },
      // Economics
      { id: "ss-19", subjectId: "social-science", number: 19, title: "The Story of Village Palampur", description: "Economic activities, production and farming in a village", youtubeVideoId: "", duration: "22:50" },
      { id: "ss-20", subjectId: "social-science", number: 20, title: "People as Resource", description: "Human capital, education, health and economic development", youtubeVideoId: "OpfMnc92gDI", duration: "21:00" },
      { id: "ss-21", subjectId: "social-science", number: 21, title: "Poverty as a Challenge", description: "Causes, extent and anti-poverty measures in India", youtubeVideoId: "DaE_Hpe-sEI", duration: "23:30" },
      { id: "ss-22", subjectId: "social-science", number: 22, title: "Food Security in India", description: "Food security, public distribution system and buffer stocks", youtubeVideoId: "2oCsMusryJo", duration: "20:15" },
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
      { id: "eng-1", subjectId: "english", number: 1, title: "The Fun They Had", description: "A futuristic story about mechanical teachers and schools", youtubeVideoId: "", duration: "15:30" },
      { id: "eng-2", subjectId: "english", number: 2, title: "The Sound of Music", description: "Stories of Evelyn Glennie and Bismillah Khan", youtubeVideoId: "", duration: "18:00" },
      { id: "eng-3", subjectId: "english", number: 3, title: "The Little Girl", description: "A story about a child's fear and eventual love for her father", youtubeVideoId: "", duration: "16:45" },
      { id: "eng-4", subjectId: "english", number: 4, title: "A Truly Beautiful Mind", description: "The life of Albert Einstein and his contributions", youtubeVideoId: "", duration: "20:10" },
      { id: "eng-5", subjectId: "english", number: 5, title: "The Snake and the Mirror", description: "A humorous story about a doctor and a snake", youtubeVideoId: "", duration: "17:20" },
      { id: "eng-6", subjectId: "english", number: 6, title: "My Childhood", description: "Memories of APJ Abdul Kalam's childhood and early life", youtubeVideoId: "", duration: "19:35" },
      { id: "eng-7", subjectId: "english", number: 7, title: "Packing", description: "A humorous account of packing for a holiday", youtubeVideoId: "", duration: "14:55" },
      { id: "eng-8", subjectId: "english", number: 8, title: "Reach for the Top", description: "Stories of Santosh Yadav and Maria Sharapova", youtubeVideoId: "", duration: "21:00" },
      // Beehive Poems
      { id: "eng-9", subjectId: "english", number: 9, title: "The Road Not Taken", description: "A poem about choices and decisions in life by Robert Frost", youtubeVideoId: "", duration: "12:30" },
      { id: "eng-10", subjectId: "english", number: 10, title: "Wind", description: "A poem about the power and symbolism of wind by Subramania Bharati", youtubeVideoId: "vaAQbhBgimk", duration: "11:45" },
      { id: "eng-11", subjectId: "english", number: 11, title: "Rain on the Roof", description: "A poem about rain and memories by Coates Kinney", youtubeVideoId: "", duration: "10:30" },
      { id: "eng-12", subjectId: "english", number: 12, title: "The Lake Isle of Innisfree", description: "A poem about longing for nature by W.B. Yeats", youtubeVideoId: "", duration: "10:15" },
      { id: "eng-13", subjectId: "english", number: 13, title: "A Legend of the Northland", description: "A folk tale in verse form about Saint Peter and a woman", youtubeVideoId: "", duration: "13:00" },
      { id: "eng-14", subjectId: "english", number: 14, title: "No Men Are Foreign", description: "A poem about universal brotherhood by James Kirkup", youtubeVideoId: "", duration: "10:45" },
      { id: "eng-15", subjectId: "english", number: 15, title: "The Duck and the Kangaroo", description: "A humorous poem about friendship by Edward Lear", youtubeVideoId: "", duration: "9:30" },
      { id: "eng-16", subjectId: "english", number: 16, title: "On Killing a Tree", description: "A poem about the resilience of nature by Gieve Patel", youtubeVideoId: "", duration: "11:00" },
      { id: "eng-17", subjectId: "english", number: 17, title: "The Snake Trying", description: "A poem about human cruelty towards animals by W.W.E. Ross", youtubeVideoId: "", duration: "10:15" },
      { id: "eng-18", subjectId: "english", number: 18, title: "A Slumber Did My Spirit Seal", description: "A poem about loss and acceptance by William Wordsworth", youtubeVideoId: "", duration: "9:45" },
      // Moments
      { id: "eng-19", subjectId: "english", number: 19, title: "The Lost Child", description: "A story about a child lost in a fair by Mulk Raj Anand", youtubeVideoId: "", duration: "14:00" },
      { id: "eng-20", subjectId: "english", number: 20, title: "The Adventures of Toto", description: "A mischievous monkey and his antics by Ruskin Bond", youtubeVideoId: "", duration: "13:30" },
      { id: "eng-21", subjectId: "english", number: 21, title: "Iswaran the Storyteller", description: "A master storyteller and his wild tales by R.K. Laxman", youtubeVideoId: "", duration: "15:15" },
      { id: "eng-22", subjectId: "english", number: 22, title: "In the Kingdom of Fools", description: "A folktale about a foolish king and his kingdom", youtubeVideoId: "", duration: "12:45" },
      { id: "eng-23", subjectId: "english", number: 23, title: "The Happy Prince", description: "A statue and a swallow who help the poor by Oscar Wilde", youtubeVideoId: "", duration: "18:30" },
      { id: "eng-24", subjectId: "english", number: 24, title: "Weathering the Storm in Ersama", description: "A boy's courage during the 1999 Orissa cyclone", youtubeVideoId: "", duration: "14:30" },
      { id: "eng-25", subjectId: "english", number: 25, title: "The Last Leaf", description: "A story of hope and sacrifice by O. Henry", youtubeVideoId: "", duration: "16:00" },
      { id: "eng-26", subjectId: "english", number: 26, title: "A House Is Not a Home", description: "A story about overcoming loss by Zan Gaudioso", youtubeVideoId: "", duration: "13:45" },
      { id: "eng-27", subjectId: "english", number: 27, title: "The Accidental Tourist", description: "A humorous story about travel mishaps by Bill Bryson", youtubeVideoId: "", duration: "15:00" },
      { id: "eng-28", subjectId: "english", number: 28, title: "The Beggar", description: "A story about transformation and kindness by Anton Chekhov", youtubeVideoId: "", duration: "14:15" },
    ],
  },
  {
    id: "hindi",
    name: "Hindi",
    description: "Kshitij – क्षितिज भाग 2 \u0026 Sparsh \u2013 स्पर्श",
    icon: "scroll",
    color: "#f97316",
    chapters: [
      // Kshitij (Part 2) - 17 chapters
      { id: "hindi-k1", subjectId: "hindi", number: 1, title: "दो बैलों की कथा", description: "Two bullocks' story - moral tale about conflict and resolution", youtubeVideoId: hindiKshitijIds[0], duration: "12:00" },
      { id: "hindi-k2", subjectId: "hindi", number: 2, title: "ल्हासा की ओर", description: "Journey towards Lhasa - travelogue about Tibet", youtubeVideoId: hindiKshitijIds[1], duration: "14:00" },
      { id: "hindi-k3", subjectId: "hindi", number: 3, title: "उपभोक्तावाद की संस्कृति", description: "Consumerism culture - essay on materialism", youtubeVideoId: hindiKshitijIds[2], duration: "12:00" },
      { id: "hindi-k4", subjectId: "hindi", number: 4, title: "साँवले सपनों की याद", description: "Memory of dusky dreams - nostalgic prose", youtubeVideoId: hindiKshitijIds[3], duration: "11:00" },
      { id: "hindi-k5", subjectId: "hindi", number: 5, title: "नाना साहब की पुत्री देवी मैना को भस्म कर दिया गया", description: "Historical account of Nana Saheb's daughter", youtubeVideoId: hindiKshitijIds[4], duration: "15:00" },
      { id: "hindi-k6", subjectId: "hindi", number: 6, title: "प्रेमचंद के फटे जूते", description: "Premchand's torn shoes - tribute to the writer", youtubeVideoId: hindiKshitijIds[5], duration: "13:00" },
      { id: "hindi-k7", subjectId: "hindi", number: 7, title: "मेरे बचपन के दिन", description: "My childhood days - autobiographical essay", youtubeVideoId: hindiKshitijIds[6], duration: "14:00" },
      { id: "hindi-k8", subjectId: "hindi", number: 8, title: "एक कुत्ता और एक मैना", description: "A dog and a myna - humorous story", youtubeVideoId: hindiKshitijIds[7], duration: "11:00" },
      { id: "hindi-k9", subjectId: "hindi", number: 9, title: "साखियाँ", description: "Sakhis - Kabir's couplets", youtubeVideoId: hindiKshitijIds[8], duration: "10:00" },
      { id: "hindi-k10", subjectId: "hindi", number: 10, title: "वख", description: "Vakh - Lal Ded's mystic verses", youtubeVideoId: hindiKshitijIds[9], duration: "09:00" },
      { id: "hindi-k11", subjectId: "hindi", number: 11, title: "सवैये", description: "Savaiye - Rahim's poems", youtubeVideoId: hindiKshitijIds[10], duration: "10:00" },
      { id: "hindi-k12", subjectId: "hindi", number: 12, title: "कैदी और कोकिला", description: "Prisoner and the cuckoo - social commentary", youtubeVideoId: hindiKshitijIds[11], duration: "13:00" },
      { id: "hindi-k13", subjectId: "hindi", number: 13, title: "ग्राम श्री", description: "Village beauty - descriptive essay", youtubeVideoId: hindiKshitijIds[12], duration: "12:00" },
      { id: "hindi-k14", subjectId: "hindi", number: 14, title: "चंद्र गहना से लौटती बेर", description: "Returning from the moon's necklace - poem", youtubeVideoId: hindiKshitijIds[13], duration: "11:00" },
      { id: "hindi-k15", subjectId: "hindi", number: 15, title: "मेघ आए", description: "Clouds arrived - rain poem by Surdas", youtubeVideoId: hindiKshitijIds[14], duration: "10:00" },
      { id: "hindi-k16", subjectId: "hindi", number: 16, title: "यमराज की दिशा", description: "Direction of Yamaraj - philosophical poem", youtubeVideoId: hindiKshitijIds[15], duration: "11:00" },
      { id: "hindi-k17", subjectId: "hindi", number: 17, title: "बच्चे कामदेनी फार्मूला", description: "Children's formula - poem on child labour", youtubeVideoId: hindiKshitijIds[16], duration: "12:00" },
      // Sparsh (Part 2) - 15 chapters
      { id: "hindi-s1", subjectId: "hindi", number: 18, title: "धूल", description: "Dust - poem by Sarveshwar Dayal Saxena", youtubeVideoId: hindiSparshIds[0], duration: "11:00" },
      { id: "hindi-s2", subjectId: "hindi", number: 19, title: "गद्य की कविता", description: "Prose poetry - by Kaka Kalelkar", youtubeVideoId: hindiSparshIds[1], duration: "12:00" },
      { id: "hindi-s3", subjectId: "hindi", number: 20, title: "किट्टू-कमाता", description: "Kittu-Kamata - story by Premchand", youtubeVideoId: hindiSparshIds[2], duration: "14:00" },
      { id: "hindi-s4", subjectId: "hindi", number: 21, title: "मेज पर किताब", description: "Book on the table - poem by Sumitranandan Pant", youtubeVideoId: hindiSparshIds[3], duration: "10:00" },
      { id: "hindi-s5", subjectId: "hindi", number: 22, title: "माता का आँचल", description: "Mother's lap - poem by Shivmangal Singh Suman", youtubeVideoId: hindiSparshIds[4], duration: "11:00" },
      { id: "hindi-s6", subjectId: "hindi", number: 23, title: "मौत की अपार्टमेंट", description: "Death's apartment - story by Yashpal", youtubeVideoId: hindiSparshIds[5], duration: "15:00" },
      { id: "hindi-s7", subjectId: "hindi", number: 24, title: "पैर नीचे बिस्तर", description: "Feet under the bed - poem by Phanishwar Nath Renu", youtubeVideoId: hindiSparshIds[6], duration: "11:00" },
      { id: "hindi-s8", subjectId: "hindi", number: 25, title: "शुक्रिया", description: "Thank you - poem by Suryakant Tripathi Nirala", youtubeVideoId: hindiSparshIds[7], duration: "10:00" },
      { id: "hindi-s9", subjectId: "hindi", number: 26, title: "साकेत", description: "Saket - epic poem by Maithilisharan Gupt", youtubeVideoId: hindiSparshIds[8], duration: "13:00" },
      { id: "hindi-s10", subjectId: "hindi", number: 27, title: "दूरी", description: "Distance - poem by Hazari Prasad Dwivedi", youtubeVideoId: hindiSparshIds[9], duration: "11:00" },
      { id: "hindi-s11", subjectId: "hindi", number: 28, title: "मनमेजर", description: "Manmejar - poem by Nagarjun", youtubeVideoId: hindiSparshIds[10], duration: "10:00" },
      { id: "hindi-s12", subjectId: "hindi", number: 29, title: "बादल राग", description: "Cloud melody - poem by Ramdhari Singh Dinkar", youtubeVideoId: hindiSparshIds[11], duration: "12:00" },
      { id: "hindi-s13", subjectId: "hindi", number: 30, title: "तोप", description: "Cannon - poem by Kedarnath Agarwal", youtubeVideoId: hindiSparshIds[12], duration: "11:00" },
      { id: "hindi-s14", subjectId: "hindi", number: 31, title: "नीले पानी", description: "Blue water - poem by Meghnad Bhattacharya", youtubeVideoId: hindiSparshIds[13], duration: "10:00" },
      { id: "hindi-s15", subjectId: "hindi", number: 32, title: "दोहे (रहीम और कबीर)", description: "Dohas by Rahim and Kabir - moral couplets", youtubeVideoId: hindiSparshIds[14], duration: "12:00" },
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
