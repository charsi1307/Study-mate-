export interface PracticeQuestion {
  question: string;
  marks: number;
  answer: string;
}

export interface ChapterQuestions {
  chapterId: string;
  subjectId: string;
  chapterNumber: number;
  chapterTitle: string;
  questions: PracticeQuestion[];
}

// ==================== MATHEMATICS ====================

const mathsQuestions: ChapterQuestions[] = [
  {
    chapterId: "maths-1",
    subjectId: "maths",
    chapterNumber: 1,
    chapterTitle: "Number Systems",
    questions: [
      {
        question: "Is zero a rational number? Give reason.",
        marks: 2,
        answer: "Yes, zero is a rational number because it can be written as 0/1, 0/2, 0/3, etc. — in the form p/q where p = 0 and q ≠ 0."
      },
      {
        question: "Find two rational numbers between 1/3 and 1/2.",
        marks: 2,
        answer: "Two rational numbers between 1/3 and 1/2 are 5/12 and 7/18. (Method: Convert to same denominator — 4/12 and 6/12, so 5/12 is between them.)"
      },
      {
        question: "Represent √3 on the number line.",
        marks: 3,
        answer: "Step 1: Draw a number line and mark point O (0) and A (1).\nStep 2: At A, draw a perpendicular AB = 1 unit.\nStep 3: Join OB. By Pythagoras theorem, OB = √(1² + 1²) = √2.\nStep 4: At B, draw BC = 1 unit perpendicular.\nStep 5: OC = √(√2² + 1²) = √3.\nStep 6: With O as center and OC as radius, draw an arc cutting the number line at point P. P represents √3."
      },
      {
        question: "Simplify: (√5 + √2)² and identify if the result is rational or irrational.",
        marks: 5,
        answer: "(√5 + √2)² = (√5)² + 2×√5×√2 + (√2)²\n= 5 + 2√10 + 2\n= 7 + 2√10\nSince √10 is irrational, 2√10 is irrational, so 7 + 2√10 is irrational."
      },
      {
        question: "Rationalize the denominator of 1/(√7 − √6) and simplify.",
        marks: 5,
        answer: "Multiply numerator and denominator by (√7 + √6):\n1/(√7 − √6) × (√7 + √6)/(√7 + √6)\n= (√7 + √6) / ((√7)² − (√6)²)\n= (√7 + √6) / (7 − 6)\n= (√7 + √6) / 1\n= √7 + √6"
      }
    ]
  },
  {
    chapterId: "maths-2",
    subjectId: "maths",
    chapterNumber: 2,
    chapterTitle: "Polynomials",
    questions: [
      {
        question: "Find the zero of the polynomial p(x) = 2x + 5.",
        marks: 2,
        answer: "Set p(x) = 0:\n2x + 5 = 0\n2x = −5\nx = −5/2\nThe zero of p(x) = 2x + 5 is x = −5/2."
      },
      {
        question: "Check whether x = 2 is a zero of polynomial p(x) = x³ − 2x² + x − 2.",
        marks: 2,
        answer: "p(2) = (2)³ − 2(2)² + 2 − 2\n= 8 − 8 + 2 − 2\n= 0\nSince p(2) = 0, x = 2 is a zero of the polynomial."
      },
      {
        question: "Using Factor Theorem, show that (x − 1) is a factor of x³ − 3x² + 3x − 1.",
        marks: 3,
        answer: "Let p(x) = x³ − 3x² + 3x − 1\nBy Factor Theorem, (x − 1) is a factor if p(1) = 0.\np(1) = (1)³ − 3(1)² + 3(1) − 1\n= 1 − 3 + 3 − 1\n= 0\nSince p(1) = 0, (x − 1) is a factor of the polynomial."
      },
      {
        question: "Factorise: x³ − 23x² + 142x − 120 given that x = 1 is one of its zeros.",
        marks: 5,
        answer: "Since x = 1 is a zero, (x − 1) is a factor.\nDivide x³ − 23x² + 142x − 120 by (x − 1):\nQuotient = x² − 22x + 120\nNow factorise x² − 22x + 120:\nx² − 22x + 120 = x² − 10x − 12x + 120\n= x(x − 10) − 12(x − 10)\n= (x − 10)(x − 12)\nSo: x³ − 23x² + 142x − 120 = (x − 1)(x − 10)(x − 12)"
      },
      {
        question: "Expand using suitable identity: (2x + 3y + 4z)²",
        marks: 5,
        answer: "Using identity (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca\nHere a = 2x, b = 3y, c = 4z\n= (2x)² + (3y)² + (4z)² + 2(2x)(3y) + 2(3y)(4z) + 2(4z)(2x)\n= 4x² + 9y² + 16z² + 12xy + 24yz + 16zx"
      }
    ]
  },
  {
    chapterId: "maths-3",
    subjectId: "maths",
    chapterNumber: 3,
    chapterTitle: "Coordinate Geometry",
    questions: [
      {
        question: "In which quadrant does the point (−3, 4) lie?",
        marks: 2,
        answer: "The point (−3, 4) has negative x-coordinate and positive y-coordinate.\nTherefore, it lies in the Second Quadrant (Quadrant II)."
      },
      {
        question: "Write the coordinates of a point which lies on x-axis at a distance of 5 units from origin.",
        marks: 2,
        answer: "A point on the x-axis has y-coordinate = 0.\nAt distance 5 from origin: the point is (5, 0) or (−5, 0)."
      },
      {
        question: "Plot the points A(2, 3), B(−3, 1), and C(0, −2) on a Cartesian plane and name the quadrants.",
        marks: 3,
        answer: "A(2, 3) — both positive → Quadrant I\nB(−3, 1) — x negative, y positive → Quadrant II\nC(0, −2) — lies on negative y-axis (not in any quadrant)\n\nTo plot:\n- Draw x-axis (horizontal) and y-axis (vertical) intersecting at origin O.\n- A: move 2 right, 3 up\n- B: move 3 left, 1 up\n- C: on y-axis, 2 units below origin"
      },
      {
        question: "The points A(1, 2), B(5, 2), C(5, 6), D(1, 6) are vertices of a quadrilateral. Find the type of quadrilateral and its area.",
        marks: 5,
        answer: "AB: distance = 5 − 1 = 4 units (horizontal)\nBC: distance = 6 − 2 = 4 units (vertical)\nCD: distance = 5 − 1 = 4 units (horizontal)\nDA: distance = 6 − 2 = 4 units (vertical)\nAll sides equal and all angles 90° → Square\nArea = side × side = 4 × 4 = 16 square units"
      },
      {
        question: "What is the distance of point P(a, b) from origin? If P(3, 4), find the distance from origin.",
        marks: 5,
        answer: "Distance of P(a, b) from origin O(0, 0):\nUsing distance formula: d = √(a² + b²)\n\nFor P(3, 4):\nd = √(3² + 4²)\n= √(9 + 16)\n= √25\n= 5 units\n\nSo point P(3, 4) is 5 units away from the origin."
      }
    ]
  },
  {
    chapterId: "maths-4",
    subjectId: "maths",
    chapterNumber: 4,
    chapterTitle: "Linear Equations in Two Variables",
    questions: [
      {
        question: "Write two solutions of the equation 2x + y = 7.",
        marks: 2,
        answer: "Put x = 0: 2(0) + y = 7 → y = 7 → Solution: (0, 7)\nPut x = 1: 2(1) + y = 7 → y = 5 → Solution: (1, 5)\nTwo solutions: (0, 7) and (1, 5)"
      },
      {
        question: "Express y in terms of x for the equation 3x + 2y = 6.",
        marks: 2,
        answer: "3x + 2y = 6\n2y = 6 − 3x\ny = (6 − 3x) / 2\ny = 3 − 3x/2"
      },
      {
        question: "Draw the graph of x + y = 5 and find the point where it meets both axes.",
        marks: 3,
        answer: "For x-intercept: put y = 0 → x = 5 → Point (5, 0)\nFor y-intercept: put x = 0 → y = 5 → Point (0, 5)\nOne more point: x = 2 → y = 3 → Point (2, 3)\n\nPlot (5, 0), (0, 5), (2, 3) on graph and join them.\nThe line meets x-axis at (5, 0) and y-axis at (0, 5)."
      },
      {
        question: "The cost of a notebook is twice the cost of a pen. Write a linear equation in two variables and draw its graph.",
        marks: 5,
        answer: "Let cost of pen = x, cost of notebook = y\nAccording to condition: y = 2x\nOr: 2x − y = 0\n\nSolutions:\nx = 0 → y = 0 → (0, 0)\nx = 1 → y = 2 → (1, 2)\nx = 2 → y = 4 → (2, 4)\n\nPlot these points and draw a straight line passing through origin.\nThe graph of y = 2x is a straight line through (0,0) with slope 2."
      },
      {
        question: "The taxi fare in a city is as follows: For the first km, the fare is ₹8 and for subsequent distance, it is ₹5/km. Write a linear equation for this and draw graph. Find fare for 4 km.",
        marks: 5,
        answer: "Let total distance = x km, total fare = ₹y\nFare = ₹8 (first km) + ₹5 × (x − 1) for remaining\ny = 8 + 5(x − 1)\ny = 8 + 5x − 5\ny = 5x + 3\n\nSolutions:\nx = 1 → y = 8 → (1, 8)\nx = 2 → y = 13 → (2, 13)\nx = 3 → y = 18 → (3, 18)\n\nFor x = 4: y = 5(4) + 3 = 20 + 3 = ₹23\nFare for 4 km = ₹23\n\nPlot points and join to get straight line graph."
      }
    ]
  },
  {
    chapterId: "maths-5",
    subjectId: "maths",
    chapterNumber: 5,
    chapterTitle: "Introduction to Euclid's Geometry",
    questions: [
      {
        question: "State Euclid's first postulate.",
        marks: 2,
        answer: "Euclid's First Postulate: A straight line may be drawn from any one point to any other point.\nThis means between any two points, exactly one straight line can be drawn."
      },
      {
        question: "What is the difference between an axiom and a postulate?",
        marks: 2,
        answer: "Axiom: A general statement accepted as true without proof, applicable to all branches of mathematics. Example: 'The whole is greater than the part.'\nPostulate: A statement accepted as true specifically in geometry without proof. Example: 'A circle can be drawn with any centre and radius.'\nBoth are self-evident truths but postulates are geometry-specific."
      },
      {
        question: "If A, B, C are three points on a line and B is between A and C, prove that AB + BC = AC.",
        marks: 3,
        answer: "Given: Points A, B, C on a line with B between A and C.\nTo prove: AB + BC = AC\n\nProof:\nFrom the figure, AC is the whole line segment and AB, BC are its parts.\nBy Euclid's Axiom 4: 'The whole is equal to the sum of its parts.'\nTherefore, AB + BC = AC\nHence proved."
      },
      {
        question: "State and explain any four of Euclid's axioms with examples.",
        marks: 5,
        answer: "1. Things equal to the same thing are equal to each other.\n   Example: If AB = CD and CD = EF, then AB = EF.\n\n2. If equals are added to equals, wholes are equal.\n   Example: If a = b, then a + c = b + c.\n\n3. If equals are subtracted from equals, remainders are equal.\n   Example: If a = b, then a − c = b − c.\n\n4. The whole is greater than the part.\n   Example: If AC = AB + BC, then AC > AB and AC > BC."
      },
      {
        question: "Prove that an equilateral triangle can be constructed on any given line segment. (Euclid's Proposition 1)",
        marks: 5,
        answer: "Given: Line segment AB.\nTo construct: Equilateral triangle on AB.\n\nConstruction:\n1. Draw circle with centre A and radius AB.\n2. Draw circle with centre B and radius BA.\n3. Let the two circles intersect at point C.\n4. Join CA and CB.\n\nProof:\nAB = AC (radii of same circle with centre A)\nAB = BC (radii of same circle with centre B)\nSince AB = AC and AB = BC,\nBy Euclid's Axiom 1: AC = BC\nTherefore AB = BC = CA\nHence triangle ABC is equilateral. ✓"
      }
    ]
  },
  {
    chapterId: "maths-6",
    subjectId: "maths",
    chapterNumber: 6,
    chapterTitle: "Lines and Angles",
    questions: [
      {
        question: "If two lines intersect each other, prove that vertically opposite angles are equal.",
        marks: 2,
        answer: "Let lines AB and CD intersect at O.\n∠AOC + ∠AOD = 180° (linear pair) ...(1)\n∠BOD + ∠AOD = 180° (linear pair) ...(2)\nFrom (1) and (2): ∠AOC = ∠BOD\nThus vertically opposite angles are equal."
      },
      {
        question: "In the figure, if ∠AOB = 35°, find ∠BOC if AOC is a straight line.",
        marks: 2,
        answer: "AOC is a straight line, so ∠AOB + ∠BOC = 180° (angles on a straight line)\n35° + ∠BOC = 180°\n∠BOC = 180° − 35°\n∠BOC = 145°"
      },
      {
        question: "If a transversal intersects two parallel lines, prove that alternate interior angles are equal.",
        marks: 3,
        answer: "Given: Lines l ∥ m, transversal t intersects them at A and B.\nTo prove: ∠3 = ∠6 (alternate interior angles)\n\nProof:\n∠1 = ∠3 (vertically opposite angles at A)\n∠1 = ∠6 (corresponding angles, l ∥ m)\nTherefore ∠3 = ∠6\nAlternate interior angles are equal. ✓"
      },
      {
        question: "In a triangle, if one angle is 90° and another is 45°, find the third angle. Also state the theorem used.",
        marks: 5,
        answer: "Let the three angles be ∠A = 90°, ∠B = 45°, ∠C = ?\n\nBy Angle Sum Property of Triangle:\n∠A + ∠B + ∠C = 180°\n90° + 45° + ∠C = 180°\n135° + ∠C = 180°\n∠C = 45°\n\nTheorem used: The sum of all angles of a triangle is 180°.\n\nThis is an isosceles right triangle since ∠B = ∠C = 45°."
      },
      {
        question: "Prove that the sum of angles of a triangle is 180°.",
        marks: 5,
        answer: "Given: Triangle ABC.\nTo prove: ∠A + ∠B + ∠C = 180°\n\nConstruction: Draw line XY through A parallel to BC.\n\nProof:\nXY ∥ BC (by construction)\n∠XAB = ∠ABC (alternate interior angles, XY ∥ BC) ...(1)\n∠YAC = ∠ACB (alternate interior angles, XY ∥ BC) ...(2)\n\nNow, XAY is a straight line:\n∠XAB + ∠BAC + ∠YAC = 180° ...(3)\n\nSubstituting (1) and (2) in (3):\n∠ABC + ∠BAC + ∠ACB = 180°\n∠A + ∠B + ∠C = 180° ✓\nHence proved."
      }
    ]
  },
  {
    chapterId: "maths-7",
    subjectId: "maths",
    chapterNumber: 7,
    chapterTitle: "Triangles",
    questions: [
      {
        question: "State SAS congruence rule.",
        marks: 2,
        answer: "SAS (Side-Angle-Side) Congruence Rule: Two triangles are congruent if two sides and the included angle of one triangle are equal to the corresponding two sides and included angle of the other triangle.\nExample: If AB = PQ, ∠A = ∠P, AC = PR, then △ABC ≅ △PQR."
      },
      {
        question: "In △ABC, AB = AC. The bisector of ∠A meets BC at D. Show that BD = DC.",
        marks: 2,
        answer: "In △ABD and △ACD:\nAB = AC (given)\n∠BAD = ∠CAD (AD bisects ∠A)\nAD = AD (common)\nBy SAS: △ABD ≅ △ACD\nTherefore BD = DC (CPCT) ✓"
      },
      {
        question: "Prove that angles opposite to equal sides of an isosceles triangle are equal.",
        marks: 3,
        answer: "Given: △ABC where AB = AC.\nTo prove: ∠B = ∠C\n\nConstruction: Draw AD bisecting ∠A, meeting BC at D.\n\nIn △ABD and △ACD:\nAB = AC (given)\n∠BAD = ∠CAD (AD bisects ∠A)\nAD = AD (common)\nBy SAS: △ABD ≅ △ACD\nTherefore ∠ABD = ∠ACD (CPCT)\nSo ∠B = ∠C ✓"
      },
      {
        question: "In a △ABC, E is the midpoint of BC. AE is produced to F such that EF = AE. Show that ABFC is a parallelogram.",
        marks: 5,
        answer: "In △AEB and △FEC:\nAE = FE (given)\nBE = CE (E is midpoint of BC)\n∠AEB = ∠FEC (vertically opposite)\nBy SAS: △AEB ≅ △FEC\nTherefore AB = FC (CPCT) ...(1)\n∠ABE = ∠FCE (CPCT) → AB ∥ FC ...(2)\n\nFrom (1) and (2): AB = FC and AB ∥ FC\nTherefore ABFC is a parallelogram. ✓"
      },
      {
        question: "Prove that the sum of any two sides of a triangle is greater than the third side.",
        marks: 5,
        answer: "Given: Triangle ABC.\nTo prove: AB + AC > BC\n\nConstruction: Produce BA to D such that AD = AC. Join CD.\n\nProof:\nIn △ACD:\nAD = AC (construction)\nSo ∠ADC = ∠ACD (angles opposite equal sides)\n\nNow ∠BCD > ∠ACD (∠BCD = ∠BCA + ∠ACD)\nSo ∠BCD > ∠ADC = ∠BDC\n\nIn △BCD:\n∠BCD > ∠BDC\nTherefore BD > BC (side opposite greater angle is greater)\n\nBut BD = BA + AD = BA + AC = AB + AC\nTherefore AB + AC > BC ✓"
      }
    ]
  },
  {
    chapterId: "maths-8",
    subjectId: "maths",
    chapterNumber: 8,
    chapterTitle: "Quadrilaterals",
    questions: [
      {
        question: "If the diagonals of a parallelogram are equal, what type of parallelogram is it?",
        marks: 2,
        answer: "If the diagonals of a parallelogram are equal, it is a Rectangle.\nIn a rectangle, diagonals are equal in length and bisect each other.\nExample: In rectangle ABCD, AC = BD."
      },
      {
        question: "In a parallelogram ABCD, if ∠A = 70°, find all other angles.",
        marks: 2,
        answer: "In parallelogram ABCD:\n∠A = 70° (given)\n∠C = ∠A = 70° (opposite angles are equal)\n∠A + ∠B = 180° (co-interior angles)\n∠B = 180° − 70° = 110°\n∠D = ∠B = 110° (opposite angles equal)\nSo ∠A = 70°, ∠B = 110°, ∠C = 70°, ∠D = 110°"
      },
      {
        question: "Prove that the diagonals of a parallelogram bisect each other.",
        marks: 3,
        answer: "Given: Parallelogram ABCD, diagonals AC and BD intersect at O.\nTo prove: OA = OC and OB = OD\n\nIn △AOB and △COD:\nAB = CD (opposite sides of parallelogram)\n∠OAB = ∠OCD (alternate interior angles, AB ∥ CD)\n∠OBA = ∠ODC (alternate interior angles)\nBy ASA: △AOB ≅ △COD\nTherefore OA = OC and OB = OD (CPCT) ✓"
      },
      {
        question: "State and prove the Midpoint Theorem.",
        marks: 5,
        answer: "Midpoint Theorem: The line segment joining the midpoints of two sides of a triangle is parallel to the third side and is half of it.\n\nGiven: △ABC, E and F are midpoints of AB and AC.\nTo prove: EF ∥ BC and EF = ½BC\n\nProof:\nProduce EF to D such that FD = EF. Join CD.\nIn △AEF and △CDF:\nAF = CF (F is midpoint)\nEF = DF (construction)\n∠AFE = ∠CFD (vertically opposite)\nBy SAS: △AEF ≅ △CDF\nSo AE = CD and AE ∥ CD → EB = CD and EB ∥ CD\nTherefore EBCD is a parallelogram.\nSo EF ∥ BC and ED = BC → EF = ½BC ✓"
      },
      {
        question: "ABCD is a rhombus. Show that diagonal AC bisects ∠A as well as ∠C and diagonal BD bisects ∠B and ∠D.",
        marks: 5,
        answer: "Given: ABCD is a rhombus (AB = BC = CD = DA).\nTo prove: AC bisects ∠A and ∠C; BD bisects ∠B and ∠D.\n\nIn △ABC:\nAB = BC (sides of rhombus)\nSo ∠BAC = ∠BCA (angles opposite equal sides) ...(1)\n\nAB ∥ DC (rhombus), AC is transversal:\n∠BAC = ∠DCA (alternate interior angles) ...(2)\n\nFrom (1) and (2): ∠BCA = ∠DCA\nSo AC bisects ∠C.\n\nSimilarly AB ∥ DC → ∠BAC = ∠DCA\nAD ∥ BC → ∠DAC = ∠BCA = ∠BAC\nSo AC bisects ∠A.\n\nSimilarly, we can prove BD bisects ∠B and ∠D. ✓"
      }
    ]
  },
  {
    chapterId: "maths-9",
    subjectId: "maths",
    chapterNumber: 9,
    chapterTitle: "Areas of Parallelograms and Triangles",
    questions: [
      {
        question: "State the theorem: Parallelograms on the same base and between the same parallels are equal in area.",
        marks: 2,
        answer: "Theorem: Parallelograms on the same base and between the same parallels are equal in area.\nIf parallelograms ABCD and ABEF are on the same base AB and between the same parallels AB and CF, then ar(ABCD) = ar(ABEF)."
      },
      {
        question: "If a triangle and a parallelogram are on the same base and between the same parallels, what is the ratio of their areas?",
        marks: 2,
        answer: "If a triangle and a parallelogram are on the same base and between the same parallels, the area of the triangle is half the area of the parallelogram.\nRatio = 1:2\nThis is because a diagonal of a parallelogram divides it into two triangles of equal area."
      },
      {
        question: "Prove that a diagonal of a parallelogram divides it into two triangles of equal area.",
        marks: 3,
        answer: "Given: Parallelogram ABCD with diagonal AC.\nTo prove: ar(△ABC) = ar(△ADC)\n\nProof:\nIn △ABC and △ADC:\nAB = CD (opposite sides of parallelogram)\nBC = AD (opposite sides)\nAC = AC (common)\nBy SSS: △ABC ≅ △ADC\nTherefore ar(△ABC) = ar(△ADC) (congruent triangles have equal area) ✓"
      },
      {
        question: "Two triangles ABC and DBC are on the same base BC and between the same parallels. AD and BC intersect at O. Prove that ar(△AOB) = ar(△DOC).",
        marks: 5,
        answer: "Given: △ABC and △DBC on same base BC and between same parallels.\nTo prove: ar(△AOB) = ar(△DOC)\n\nProof:\nar(△ABC) = ar(△DBC) (same base, same parallels) ...(1)\n\nNow:\nar(△ABC) = ar(△AOB) + ar(△BOC) ...(2)\nar(△DBC) = ar(△DOC) + ar(△BOC) ...(3)\n\nFrom (1), (2), (3):\nar(△AOB) + ar(△BOC) = ar(△DOC) + ar(△BOC)\nar(△AOB) = ar(△DOC) ✓"
      },
      {
        question: "ABCD is a quadrilateral. A line through D parallel to AC meets BC produced at P. Prove that ar(△ABP) = ar(quad ABCD).",
        marks: 5,
        answer: "Given: Quadrilateral ABCD, line through D ∥ AC meeting BC produced at P.\nTo prove: ar(△ABP) = ar(quad ABCD)\n\nProof:\nSince AC ∥ DP and they share base AC, triangles on same base between same parallels are equal:\nar(△ACP) = ar(△ACD) ...(1)\n\nNow:\nar(△ABP) = ar(△ABC) + ar(△ACP)\nUsing (1):\nar(△ABP) = ar(△ABC) + ar(△ACD)\nar(△ABP) = ar(quad ABCD) ✓"
      }
    ]
  },
  {
    chapterId: "maths-10",
    subjectId: "maths",
    chapterNumber: 10,
    chapterTitle: "Circles",
    questions: [
      {
        question: "State the theorem: Equal chords of a circle subtend equal angles at the centre.",
        marks: 2,
        answer: "Theorem: Equal chords of a circle subtend equal angles at the centre.\n\nIf AB and CD are two equal chords of a circle with centre O, then:\n∠AOB = ∠COD\n\nConverse is also true: If two chords subtend equal angles at the centre, they are equal."
      },
      {
        question: "A chord of a circle is equal to its radius. Find the angle subtended by the chord at a point on the major arc.",
        marks: 2,
        answer: "Let chord AB = radius OA = OB.\nSo △OAB is equilateral.\n∠AOB = 60°\n\nAngle at centre = 2 × angle at circumference (major arc)\nAngle at major arc = ∠AOB / 2 = 60° / 2 = 30°\n\nThe chord subtends an angle of 30° at any point on the major arc."
      },
      {
        question: "Prove that the angle subtended by an arc at the centre is double the angle subtended by it at any point on the remaining part of the circle.",
        marks: 3,
        answer: "Given: Arc PQ of circle with centre O. R is a point on remaining arc.\nTo prove: ∠POQ = 2∠PRQ\n\nConstruction: Join RO and extend to point A.\n\nIn △OPR: OP = OR (radii)\n∠ORP = ∠OPR (isosceles)\n∠POR = 180° − 2∠ORP ...(exterior angle)\n∠POA = 2∠ORP ...(1)\n\nSimilarly in △OQR:\n∠QOA = 2∠ORQ ...(2)\n\nAdding (1) and (2):\n∠POQ = 2∠PRQ ✓"
      },
      {
        question: "Prove that angles in the same segment of a circle are equal.",
        marks: 5,
        answer: "Given: Circle with centre O, chord AB. C and D are points on same arc.\nTo prove: ∠ACB = ∠ADB\n\nProof:\nBy theorem: Angle at centre = 2 × angle at circumference\n∠AOB = 2∠ACB ...(1)\n∠AOB = 2∠ADB ...(2)\n\nFrom (1) and (2):\n2∠ACB = 2∠ADB\n∠ACB = ∠ADB\n\nAngles in same segment are equal. ✓"
      },
      {
        question: "ABCD is a cyclic quadrilateral. If ∠A = 100°, find ∠C. Prove that opposite angles of a cyclic quadrilateral are supplementary.",
        marks: 5,
        answer: "Given: Cyclic quadrilateral ABCD, ∠A = 100°.\n\nTheorem Proof:\nLet arc BCD subtend ∠BAD at A and ∠BOD at centre O.\n∠BOD = 2∠BAD ...(i)\n\nReflex ∠BOD = 2∠BCD ...(ii) (arc BAD)\n\n∠BOD + reflex ∠BOD = 360°\nFrom (i) and (ii): 2∠BAD + 2∠BCD = 360°\n∠BAD + ∠BCD = 180°\n∠A + ∠C = 180° ✓\n\nSo opposite angles are supplementary.\n\nFor given question:\n∠A + ∠C = 180°\n100° + ∠C = 180°\n∠C = 80°"
      }
    ]
  },
  {
    chapterId: "maths-11",
    subjectId: "maths",
    chapterNumber: 11,
    chapterTitle: "Constructions",
    questions: [
      {
        question: "Construct a perpendicular bisector of a line segment of length 7 cm.",
        marks: 2,
        answer: "Steps:\n1. Draw line segment AB = 7 cm.\n2. With A as centre and radius > 3.5 cm, draw arcs above and below AB.\n3. With B as centre and same radius, draw arcs intersecting the previous arcs at P and Q.\n4. Join PQ, which intersects AB at M.\nPQ is the perpendicular bisector of AB and M is the midpoint."
      },
      {
        question: "Construct an angle of 60° at the initial point of a given ray.",
        marks: 2,
        answer: "Steps:\n1. Draw ray OA.\n2. With O as centre and any radius, draw an arc cutting OA at B.\n3. With B as centre and same radius, draw an arc cutting the previous arc at C.\n4. Join OC.\n∠AOC = 60°.\n(Justification: △OBC is equilateral, so ∠BOC = 60°)"
      },
      {
        question: "Construct a triangle with sides 4 cm, 5 cm, and 6 cm. Then construct a similar triangle with sides 2/3 of the corresponding sides.",
        marks: 3,
        answer: "Steps for original triangle:\n1. Draw AB = 6 cm.\n2. With A as centre, radius 4 cm, draw an arc.\n3. With B as centre, radius 5 cm, draw another arc intersecting at C.\n4. Join AC and BC. △ABC is constructed.\n\nSteps for similar triangle:\n1. Draw ray AX making acute angle with AB.\n2. Mark 3 equal points A1, A2, A3 on AX.\n3. Join A3B.\n4. Through A2, draw A2B' ∥ A3B, meeting AB at B'.\n5. Through B', draw B'C' ∥ BC, meeting AC at C'.\n△AB'C' is the required triangle with sides 2/3 of original."
      },
      {
        question: "Construct a triangle ABC in which BC = 6 cm, AB = 5 cm, and ∠ABC = 60°. Then construct a triangle whose sides are 3/4 of the corresponding sides of △ABC.",
        marks: 5,
        answer: "Steps:\n1. Draw BC = 6 cm.\n2. At B, construct ∠XBC = 60°.\n3. With B as centre, radius 5 cm, draw an arc cutting BX at A.\n4. Join AC. △ABC is constructed.\n\nFor similar triangle (3/4 ratio):\n1. Draw ray BY making acute angle with BC.\n2. Mark 4 equal points B1, B2, B3, B4 on BY.\n3. Join B4C.\n4. Through B3, draw B3C' ∥ B4C, meeting BC at C'.\n5. Through C', draw C'A' ∥ CA, meeting BA at A'.\n△A'BC' is the required triangle with sides 3/4 of original."
      },
      {
        question: "Construct a pair of tangents to a circle of radius 4 cm from a point 8 cm away from its centre.",
        marks: 5,
        answer: "Steps:\n1. Draw a circle with centre O and radius 4 cm.\n2. Mark point P at 8 cm from O.\n3. Join OP. Find midpoint M of OP.\n4. With M as centre and radius MO, draw a circle intersecting the given circle at A and B.\n5. Join PA and PB.\n\nPA and PB are the required tangents.\n\nJustification: ∠OAP = 90° (angle in a semicircle), so OA ⊥ PA. Since radius is perpendicular to tangent at point of contact, PA is a tangent. Similarly PB is a tangent."
      }
    ]
  },
  {
    chapterId: "maths-12",
    subjectId: "maths",
    chapterNumber: 12,
    chapterTitle: "Heron's Formula",
    questions: [
      {
        question: "Find the area of a triangle with sides 5 cm, 6 cm, and 7 cm using Heron's Formula.",
        marks: 2,
        answer: "s = (5 + 6 + 7)/2 = 18/2 = 9 cm\n\nArea = √[s(s−a)(s−b)(s−c)]\n= √[9 × (9−5) × (9−6) × (9−7)]\n= √[9 × 4 × 3 × 2]\n= √216\n= 6√6 cm²\n≈ 14.7 cm²"
      },
      {
        question: "The sides of a triangle are in ratio 3:5:7 and its perimeter is 300 cm. Find its area.",
        marks: 2,
        answer: "Sides: 3x + 5x + 7x = 300 → x = 20\nSides: a = 60, b = 100, c = 140 cm\ns = 300/2 = 150 cm\n\nArea = √[150 × 90 × 50 × 10]\n= √[6750000]\n= 1500√3 cm²\n≈ 2598 cm²"
      },
      {
        question: "A triangular park has sides 120m, 80m, and 50m. A gardener has to put a fence all around it and also plant grass inside. Find the area for grass planting.",
        marks: 3,
        answer: "a = 120m, b = 80m, c = 50m\ns = (120 + 80 + 50)/2 = 250/2 = 125m\n\nArea = √[s(s−a)(s−b)(s−c)]\n= √[125 × 5 × 45 × 75]\n= √[2109375]\n= 375√15 m²\n≈ 1452 m²\n\nThis is the area for planting grass."
      },
      {
        question: "A rhombus-shaped field has diagonals 14m and 48m. Find its area using Heron's Formula on one triangle.",
        marks: 5,
        answer: "Diagonals of rhombus bisect each other at 90°.\nHalf diagonals: 7m and 24m\n\nSide of rhombus = √(7² + 24²) = √(49 + 576) = √625 = 25m\n\nFor one triangle (half of rhombus) with sides 25, 25, 48:\ns = (25 + 25 + 48)/2 = 49\n\nArea of triangle = √[49 × 24 × 24 × 1]\n= √[49 × 576]\n= 7 × 24 = 168 m²\n\nTotal area of rhombus = 2 × 168 = 336 m²\n(Verify: ½ × d1 × d2 = ½ × 14 × 48 = 336 m² ✓)"
      },
      {
        question: "A field is in the shape of a trapezium whose parallel sides are 25m and 10m. The non-parallel sides are 14m and 13m. Find the area.",
        marks: 5,
        answer: "Let ABCD be trapezium with AB = 25m, CD = 10m, BC = 14m, AD = 13m.\n\nDraw CE ∥ AD and CF ⊥ AB.\nAE = CD = 10m, EB = 25 − 10 = 15m\n\nIn △BCE: BC = 14m, CE = 13m, BE = 15m\ns = (14 + 13 + 15)/2 = 21m\n\nArea of △BCE = √[21 × 7 × 8 × 6]\n= √7056 = 84 m²\n\nAlso Area = ½ × base × height = ½ × 15 × h = 84\nh = 168/15 = 11.2m\n\nArea of trapezium = ½ × (25 + 10) × 11.2\n= ½ × 35 × 11.2\n= 196 m²"
      }
    ]
  },
  {
    chapterId: "maths-13",
    subjectId: "maths",
    chapterNumber: 13,
    chapterTitle: "Surface Areas and Volumes",
    questions: [
      {
        question: "Find the total surface area of a cube whose edge is 5 cm.",
        marks: 2,
        answer: "Total Surface Area of cube = 6a²\nHere a = 5 cm\nTSA = 6 × (5)²\n= 6 × 25\n= 150 cm²"
      },
      {
        question: "The radius of a sphere is 7 cm. Find its surface area. (π = 22/7)",
        marks: 2,
        answer: "Surface Area of sphere = 4πr²\n= 4 × (22/7) × 7 × 7\n= 4 × 22 × 7\n= 616 cm²"
      },
      {
        question: "A cylindrical pillar has radius 0.5m and height 3.5m. Find the curved surface area and cost of painting at ₹12.50 per m².",
        marks: 3,
        answer: "CSA of cylinder = 2πrh\n= 2 × (22/7) × 0.5 × 3.5\n= 2 × (22/7) × 1.75\n= 2 × 5.5\n= 11 m²\n\nCost of painting = 11 × 12.50\n= ₹137.50"
      },
      {
        question: "A cone has slant height 13 cm and base radius 5 cm. Find its total surface area and volume. (π = 3.14)",
        marks: 5,
        answer: "l = 13 cm, r = 5 cm\nh = √(l² − r²) = √(169 − 25) = √144 = 12 cm\n\nTSA of cone = πr(l + r)\n= 3.14 × 5 × (13 + 5)\n= 3.14 × 5 × 18\n= 282.6 cm²\n\nVolume of cone = (1/3)πr²h\n= (1/3) × 3.14 × 25 × 12\n= (1/3) × 942\n= 314 cm³"
      },
      {
        question: "A hemispherical bowl has inner radius 9 cm. Find the volume of water it can hold. Also find the TSA of a solid hemisphere of same radius. (π = 22/7)",
        marks: 5,
        answer: "r = 9 cm\n\nVolume of hemisphere = (2/3)πr³\n= (2/3) × (22/7) × 9³\n= (2/3) × (22/7) × 729\n= (2 × 22 × 729) / (3 × 7)\n= 32076 / 21\n= 1527.43 cm³ ≈ 1527.4 cm³\n\nTSA of solid hemisphere = 3πr²\n= 3 × (22/7) × 81\n= 3 × (22 × 81) / 7\n= 5346/7\n= 763.71 cm² ≈ 763.7 cm²"
      }
    ]
  },
  {
    chapterId: "maths-14",
    subjectId: "maths",
    chapterNumber: 14,
    chapterTitle: "Statistics",
    questions: [
      {
        question: "Find the mean of: 5, 10, 15, 20, 25.",
        marks: 2,
        answer: "Mean = Sum of observations / Number of observations\n= (5 + 10 + 15 + 20 + 25) / 5\n= 75 / 5\n= 15\n\nThe mean is 15."
      },
      {
        question: "Find the median of: 3, 1, 5, 6, 3, 4, 5.",
        marks: 2,
        answer: "Arrange in ascending order: 1, 3, 3, 4, 5, 5, 6\nNumber of observations (n) = 7 (odd)\nMedian = [(n+1)/2]th term = [8/2]th = 4th term\nMedian = 4"
      },
      {
        question: "The following marks were scored by students: 72, 65, 89, 54, 72, 91, 65, 72. Find mean, median and mode.",
        marks: 3,
        answer: "Data: 72, 65, 89, 54, 72, 91, 65, 72\n\nMean = (72+65+89+54+72+91+65+72)/8 = 580/8 = 72.5\n\nArranged: 54, 65, 65, 72, 72, 72, 89, 91 (n=8, even)\nMedian = (4th + 5th)/2 = (72 + 72)/2 = 72\n\nMode = 72 (appears 3 times, most frequent)"
      },
      {
        question: "Draw a histogram for the following data:\nMarks: 0-20, 20-40, 40-60, 60-80, 80-100\nStudents: 5, 10, 15, 8, 6",
        marks: 5,
        answer: "Steps to draw histogram:\n1. Draw x-axis for marks (0 to 100) and y-axis for number of students.\n2. Mark class intervals on x-axis: 0-20, 20-40, 40-60, 60-80, 80-100.\n3. Draw bars of heights equal to frequency (no gap between bars):\n   - 0-20: height 5\n   - 20-40: height 10\n   - 40-60: height 15 (tallest bar)\n   - 60-80: height 8\n   - 80-100: height 6\n4. Label both axes properly.\n5. Give a title: 'Marks Distribution of Students'\n\nNote: All bars are of equal width with no gaps (continuous data)."
      },
      {
        question: "The mean of 5 numbers is 18. If one number is excluded, the mean becomes 16. Find the excluded number.",
        marks: 5,
        answer: "Mean of 5 numbers = 18\nSum of 5 numbers = 18 × 5 = 90\n\nMean of remaining 4 numbers = 16\nSum of 4 numbers = 16 × 4 = 64\n\nExcluded number = Sum of 5 − Sum of 4\n= 90 − 64\n= 26\n\nThe excluded number is 26.\n\nVerification: (26 + sum of 4 numbers) / 5 = (26 + 64)/5 = 90/5 = 18 ✓"
      }
    ]
  },
  {
    chapterId: "maths-15",
    subjectId: "maths",
    chapterNumber: 15,
    chapterTitle: "Probability",
    questions: [
      {
        question: "What is the probability of getting a head when a coin is tossed?",
        marks: 2,
        answer: "When a coin is tossed, there are 2 equally likely outcomes: Head (H) or Tail (T).\nFavourable outcome = 1 (Head)\nTotal outcomes = 2\nP(Head) = 1/2 = 0.5"
      },
      {
        question: "A die is thrown once. Find the probability of getting (i) a prime number (ii) a number greater than 4.",
        marks: 2,
        answer: "Total outcomes when a die is thrown = 6 (1, 2, 3, 4, 5, 6)\n\n(i) Prime numbers: 2, 3, 5 → 3 outcomes\nP(prime) = 3/6 = 1/2\n\n(ii) Numbers > 4: 5, 6 → 2 outcomes\nP(>4) = 2/6 = 1/3"
      },
      {
        question: "A bag contains 5 red balls, 8 blue balls, and 7 green balls. One ball is drawn at random. Find the probability that it is (i) red (ii) not blue.",
        marks: 3,
        answer: "Total balls = 5 + 8 + 7 = 20\n\n(i) P(red) = 5/20 = 1/4\n\n(ii) Not blue means red or green = 5 + 7 = 12\nP(not blue) = 12/20 = 3/5\n\nOR: P(not blue) = 1 − P(blue) = 1 − 8/20 = 12/20 = 3/5"
      },
      {
        question: "Two coins are tossed simultaneously. Find the probability of getting (i) two heads (ii) at least one head (iii) at most one head.",
        marks: 5,
        answer: "Sample space when two coins are tossed: {HH, HT, TH, TT}\nTotal outcomes = 4\n\n(i) Two heads: {HH} → 1 outcome\nP(two heads) = 1/4\n\n(ii) At least one head: {HH, HT, TH} → 3 outcomes\nP(at least one head) = 3/4\n\n(iii) At most one head: {HT, TH, TT} → 3 outcomes\nP(at most one head) = 3/4"
      },
      {
        question: "A card is drawn from a well-shuffled deck of 52 cards. Find the probability of getting (i) a king (ii) a red card (iii) a face card.",
        marks: 5,
        answer: "Total cards = 52\n\n(i) Kings: 4 (one in each suit)\nP(King) = 4/52 = 1/13\n\n(ii) Red cards: 26 (hearts + diamonds)\nP(Red) = 26/52 = 1/2\n\n(iii) Face cards: 12 (Jack, Queen, King in each of 4 suits)\nP(Face card) = 12/52 = 3/13"
      }
    ]
  }
];

// ==================== SCIENCE ====================

const scienceQuestions: ChapterQuestions[] = [
  {
    chapterId: "science-1",
    subjectId: "science",
    chapterNumber: 1,
    chapterTitle: "Matter in Our Surroundings",
    questions: [
      {
        question: "Why does a gas fill the entire container it is placed in?",
        marks: 2,
        answer: "Gas particles have very high kinetic energy and move randomly in all directions.\nThere is negligible force of attraction between gas particles.\nSo they spread out and fill the entire container."
      },
      {
        question: "What happens to the rate of evaporation when humidity increases?",
        marks: 2,
        answer: "When humidity increases, the air already has a lot of water vapour.\nSo less water can evaporate into the air.\nTherefore, rate of evaporation decreases with increase in humidity."
      },
      {
        question: "Explain the process of sublimation with one example.",
        marks: 3,
        answer: "Sublimation is the process in which a solid directly converts into gas without passing through liquid state.\nExample: Naphthalene (camphor) balls kept in open air slowly disappear — they sublime directly into vapour.\nDry ice (solid CO₂) also sublimes at room temperature.\nThis happens when solid particles gain enough energy to escape directly into gaseous state."
      },
      {
        question: "Describe the effect of pressure and temperature on the state of matter with examples.",
        marks: 5,
        answer: "Effect of Temperature:\nOn increasing temperature, kinetic energy of particles increases.\nSolid → Liquid (melting) and Liquid → Gas (vaporisation) occur.\nExample: Ice melts to water at 0°C, water boils at 100°C.\n\nEffect of Pressure:\nIncreasing pressure brings particles closer together.\nGas can be converted to liquid by applying high pressure.\nExample: LPG is stored as liquid under high pressure in cylinders.\nCO₂ gas is compressed to make dry ice."
      },
      {
        question: "What is latent heat? Explain latent heat of fusion and vaporisation with examples.",
        marks: 5,
        answer: "Latent Heat: The heat energy absorbed or released by a substance during change of state at constant temperature is called latent heat.\n\nLatent Heat of Fusion:\nThe heat required to change 1 kg of solid into liquid at its melting point without change in temperature.\nLatent heat of fusion of ice = 3.34 × 10⁵ J/kg\nExample: When ice melts at 0°C, it absorbs heat without temperature rising.\n\nLatent Heat of Vaporisation:\nThe heat required to change 1 kg of liquid into gas at its boiling point without temperature change.\nLatent heat of vaporisation of water = 22.5 × 10⁵ J/kg\nExample: Water at 100°C absorbs heat and converts to steam.\nThis is why steam causes more severe burns than boiling water at same temperature."
      }
    ]
  },
  {
    chapterId: "science-2",
    subjectId: "science",
    chapterNumber: 2,
    chapterTitle: "Is Matter Around Us Pure?",
    questions: [
      {
        question: "What is the difference between a homogeneous and heterogeneous mixture?",
        marks: 2,
        answer: "Homogeneous mixture has uniform composition throughout — components cannot be seen separately. Example: salt in water.\nHeterogeneous mixture has non-uniform composition — components are visible. Example: sand in water."
      },
      {
        question: "Why is a solution considered a homogeneous mixture?",
        marks: 2,
        answer: "In a solution, solute particles are uniformly distributed in solvent.\nParticle size is very small (less than 1 nm) so they cannot be seen.\nTherefore a solution looks uniform throughout and is a homogeneous mixture."
      },
      {
        question: "Explain the difference between a solution, suspension, and colloid with one example each.",
        marks: 3,
        answer: "Solution: Homogeneous mixture, particle size < 1nm, does not scatter light. Example: saltwater.\nColloid: Heterogeneous mixture, particle size 1-100nm, scatters light (Tyndall effect). Example: milk.\nSuspension: Heterogeneous mixture, particle size > 100nm, particles settle on standing. Example: chalk in water.\nMain difference is particle size and stability."
      },
      {
        question: "What is chromatography? Explain its principle and one application.",
        marks: 5,
        answer: "Chromatography is a technique used to separate components of a mixture based on their different rates of movement through a medium.\n\nPrinciple: Different components of a mixture have different solubilities in a solvent. The component more soluble in solvent moves faster and separates.\n\nProcess:\n1. A spot of mixture is placed on chromatography paper.\n2. Paper is dipped in solvent (mobile phase).\n3. Solvent rises and carries components at different speeds.\n4. Components separate at different heights.\n\nApplication: Used to separate dyes in ink, detect drugs in urine, separate plant pigments like chlorophyll."
      },
      {
        question: "How would you separate a mixture of ammonium chloride and sand? Explain each step.",
        marks: 5,
        answer: "Ammonium chloride sublimes but sand does not. We use sublimation.\n\nStep 1 — Sublimation:\nTake mixture in a china dish.\nCover with an inverted funnel stuffed with cotton at top.\nHeat gently.\nAmmonium chloride sublimes and collects on cool inner walls of funnel.\nSand remains in china dish.\n\nStep 2 — Collection:\nScrape the ammonium chloride from funnel walls.\nSand is left behind in china dish.\n\nResult: Ammonium chloride and sand are successfully separated.\n\nPrinciple used: Sublimation — ammonium chloride converts directly from solid to vapour on heating."
      }
    ]
  },
  {
    chapterId: "science-3",
    subjectId: "science",
    chapterNumber: 3,
    chapterTitle: "Atoms and Molecules",
    questions: [
      {
        question: "State the Law of Conservation of Mass.",
        marks: 2,
        answer: "Law of Conservation of Mass: Mass can neither be created nor destroyed in a chemical reaction.\nThe total mass of reactants equals the total mass of products.\nGiven by Antoine Lavoisier."
      },
      {
        question: "Calculate the molecular mass of H₂SO₄. (H=1, S=32, O=16)",
        marks: 2,
        answer: "Molecular mass of H₂SO₄:\n= 2(1) + 1(32) + 4(16)\n= 2 + 32 + 64\n= 98 u"
      },
      {
        question: "What is a mole? State its relation with Avogadro's number and mass.",
        marks: 3,
        answer: "Mole is the SI unit for amount of substance.\n1 mole = 6.022 × 10²³ particles (Avogadro's number).\nMolar mass = molecular/atomic mass expressed in grams.\nExample: 1 mole of water (H₂O) = 18g = 6.022 × 10²³ molecules.\nFormula: Number of moles = Given mass / Molar mass"
      },
      {
        question: "Write the chemical formulae of the following: (i) Magnesium chloride (ii) Calcium oxide (iii) Aluminium sulphate (iv) Sodium nitrate",
        marks: 5,
        answer: "(i) Magnesium chloride: Mg²⁺ and Cl⁻ → MgCl₂\n(ii) Calcium oxide: Ca²⁺ and O²⁻ → CaO\n(iii) Aluminium sulphate: Al³⁺ and SO₄²⁻ → Al₂(SO₄)₃\n(iv) Sodium nitrate: Na⁺ and NO₃⁻ → NaNO₃\n\nValency criss-cross method is used to write formulae.\nSubscript of one ion becomes the valency of the other."
      },
      {
        question: "Calculate the number of molecules in 36g of water. Also find the number of hydrogen and oxygen atoms. (H=1, O=16, Avogadro's number = 6.022×10²³)",
        marks: 5,
        answer: "Molar mass of H₂O = 2(1) + 16 = 18 g/mol\n\nNumber of moles = 36/18 = 2 moles\n\nNumber of molecules = 2 × 6.022 × 10²³\n= 12.044 × 10²³\n= 1.2044 × 10²⁴ molecules\n\nEach H₂O has 2 H atoms:\nNumber of H atoms = 2 × 1.2044 × 10²⁴ = 2.4088 × 10²⁴\n\nEach H₂O has 1 O atom:\nNumber of O atoms = 1 × 1.2044 × 10²⁴ = 1.2044 × 10²⁴"
      }
    ]
  },
  {
    chapterId: "science-4",
    subjectId: "science",
    chapterNumber: 4,
    chapterTitle: "Structure of the Atom",
    questions: [
      {
        question: "State any two limitations of Rutherford's model of atom.",
        marks: 2,
        answer: "1. Rutherford could not explain why electrons moving in circular orbits don't lose energy and fall into nucleus.\n2. He could not explain the stability of the atom and the arrangement of electrons in orbits."
      },
      {
        question: "What are valence electrons? What is the valence of an element with atomic number 17?",
        marks: 2,
        answer: "Valence electrons are electrons present in the outermost shell of an atom.\nElement with atomic number 17 (Chlorine): 2, 8, 7 — outermost shell has 7 electrons.\nValence = 8 - 7 = 1 (or it needs 1 electron to complete octet)."
      },
      {
        question: "What are isotopes and isobars? Give one example of each.",
        marks: 3,
        answer: "Isotopes: Atoms of same element having same atomic number but different mass numbers.\nExample: Carbon-12 (⁶C¹²) and Carbon-14 (⁶C¹⁴) — same atomic number 6, different mass numbers.\nUse: C-14 used in carbon dating.\n\nIsobars: Atoms of different elements having same mass number but different atomic numbers.\nExample: Calcium (₂₀Ca⁴⁰) and Argon (₁₈Ar⁴⁰) — same mass number 40, different atomic numbers."
      },
      {
        question: "Describe Thomson's model of atom. What were its drawbacks?",
        marks: 5,
        answer: "Thomson's Model (Plum Pudding Model):\nAtom is a sphere of positive charge.\nElectrons are embedded in it like plums in a pudding.\nThe positive and negative charges are equal, making atom electrically neutral.\n\nDrawbacks:\n1. Could not explain Rutherford's gold foil experiment results.\n2. Could not explain why positive charge is concentrated at centre (nucleus).\n3. Could not explain deflection of alpha particles.\n4. Later experiments showed positive charge is in a tiny nucleus, not spread throughout."
      },
      {
        question: "Write the electronic configuration of the following and find their valency: Na(11), Mg(12), Al(13), Cl(17), Ar(18).",
        marks: 5,
        answer: "Na (11): 2, 8, 1 → Valency = 1 (loses 1 electron)\nMg (12): 2, 8, 2 → Valency = 2 (loses 2 electrons)\nAl (13): 2, 8, 3 → Valency = 3 (loses 3 electrons)\nCl (17): 2, 8, 7 → Valency = 1 (gains 1 electron)\nAr (18): 2, 8, 8 → Valency = 0 (complete outermost shell, inert)\n\nRule: Valency = electrons in outermost shell (if ≤4)\nOR Valency = 8 − outermost electrons (if >4)\nAr has complete octet so valency = 0 (noble gas)."
      }
    ]
  },
  {
    chapterId: "science-5",
    subjectId: "science",
    chapterNumber: 5,
    chapterTitle: "The Fundamental Unit of Life",
    questions: [
      {
        question: "Why is the cell called the fundamental unit of life?",
        marks: 2,
        answer: "Cell is the smallest unit capable of performing all basic life functions like respiration, nutrition, and reproduction.\nAll living organisms are made of cells.\nNew cells arise only from pre-existing cells.\nTherefore, cell is called the fundamental unit of life."
      },
      {
        question: "What is osmosis? Give one example from daily life.",
        marks: 2,
        answer: "Osmosis is the movement of water molecules through a semipermeable membrane from a region of high water concentration (low solute) to low water concentration (high solute).\nExample: When raisins are kept in water, they swell up due to water entering by osmosis."
      },
      {
        question: "Describe the structure and function of mitochondria.",
        marks: 3,
        answer: "Structure: Mitochondria are double-membrane organelles. Outer membrane is smooth, inner membrane is folded into cristae. Matrix is the fluid inside.\nFunction: Mitochondria produce energy (ATP) through cellular respiration.\nThey are called the 'powerhouse of the cell.'\nThey have their own DNA and ribosomes so can self-replicate.\nFormula: Glucose + O₂ → CO₂ + H₂O + Energy (ATP)"
      },
      {
        question: "What is the difference between plant cell and animal cell? Give four points.",
        marks: 5,
        answer: "Plant Cell vs Animal Cell:\n\n1. Cell Wall: Present in plant cell (made of cellulose); Absent in animal cell.\n2. Chloroplast: Present in plant cell (for photosynthesis); Absent in animal cell.\n3. Vacuole: Large central vacuole in plant cell; Small or absent in animal cell.\n4. Shape: Plant cells are rectangular/fixed shape; Animal cells are irregular/flexible shape.\n5. Centrosome: Absent in plant cell; Present in animal cell (for cell division)."
      },
      {
        question: "Explain the structure and functions of the nucleus in detail.",
        marks: 5,
        answer: "Structure of Nucleus:\n1. Nuclear Membrane (Envelope): Double-layered membrane with nuclear pores for exchange of material.\n2. Nucleoplasm: Fluid inside nucleus that contains chromosomes.\n3. Nucleolus: Dense body inside nucleus, produces ribosomes.\n4. Chromosomes: Thread-like structures made of DNA and proteins (histones).\n\nFunctions of Nucleus:\n1. Controls all cellular activities — called 'control centre' of cell.\n2. Contains genetic information (DNA) which determines heredity.\n3. Plays key role in cell division.\n4. Nucleolus helps in protein synthesis by producing ribosomes.\n5. Regulates which proteins are made in the cell.\n\nNote: Cells without nucleus (RBC, sieve tubes) cannot divide or live long."
      }
    ]
  },
  {
    chapterId: "science-6",
    subjectId: "science",
    chapterNumber: 6,
    chapterTitle: "Tissues",
    questions: [
      {
        question: "What is a tissue? Why do multicellular organisms need tissues?",
        marks: 2,
        answer: "A tissue is a group of cells having similar structure and performing the same function.\nMulticellular organisms need tissues for division of labour — different tissues perform different functions efficiently, making the organism more organised and functional."
      },
      {
        question: "What are the functions of areolar connective tissue?",
        marks: 2,
        answer: "Areolar tissue fills space between organs and holds them in place.\nIt supports internal organs and helps in repair of tissues.\nIt acts as packing material between organs.\nFound between skin and muscles, around blood vessels and nerves."
      },
      {
        question: "Differentiate between striated, unstriated, and cardiac muscles.",
        marks: 3,
        answer: "Striated (Skeletal) Muscle: Voluntary, attached to bones, shows striations (bands), cells are cylindrical multinucleated. Controls body movements.\n\nUnstriated (Smooth) Muscle: Involuntary, found in walls of hollow organs (stomach, intestine), no striations, spindle-shaped with single nucleus. Controls internal organ movements.\n\nCardiac Muscle: Involuntary, found only in heart, shows faint striations, branched cells with single nucleus. Contracts rhythmically throughout life."
      },
      {
        question: "Explain the types of meristematic tissue and their locations.",
        marks: 5,
        answer: "Meristematic tissue consists of actively dividing cells that help in plant growth.\n\nTypes based on location:\n1. Apical Meristem: Present at tips of roots and shoots. Responsible for increase in length.\n\n2. Lateral Meristem: Present on lateral sides of stem (cambium). Responsible for increase in girth (secondary growth).\n\n3. Intercalary Meristem: Present at internodes and base of leaves. Helps in growth between nodes.\n\nCharacteristics: Cells are small, have dense cytoplasm, large nucleus, no vacuoles, thin cell wall."
      },
      {
        question: "Describe the structure and function of different types of simple permanent tissues in plants.",
        marks: 5,
        answer: "Simple permanent tissues are made of one type of cells.\n\n1. Parenchyma:\nStructure: Thin-walled, loosely packed, isodiametric cells with large vacuoles.\nFunction: Storage of food and water, photosynthesis (when containing chlorophyll — called chlorenchyma), exchange of gases (aerenchyma in aquatic plants).\n\n2. Collenchyma:\nStructure: Cells with thickened corners (pectin deposits), living cells.\nFunction: Provides mechanical support and flexibility to plant. Found in leaf stalks.\n\n3. Sclerenchyma:\nStructure: Dead cells with thick, lignified cell walls. Two types: fibres and sclereids.\nFunction: Provides strength and rigidity. Found in seed coats, nutshells, husk of coconut.\n\nKey difference: Parenchyma is living and flexible; Sclerenchyma is dead and rigid."
      }
    ]
  },
  {
    chapterId: "science-7",
    subjectId: "science",
    chapterNumber: 7,
    chapterTitle: "Diversity in Living Organisms",
    questions: [
      {
        question: "What is the basic criterion for classification of organisms?",
        marks: 2,
        answer: "The basic criterion for classification is the body design of the organism.\nOrganisms with similar body design and characteristics are grouped together.\nThis reflects evolutionary relationships and helps in studying biodiversity systematically."
      },
      {
        question: "What are the two kingdoms given by Linnaeus? What was the limitation?",
        marks: 2,
        answer: "Linnaeus gave two kingdoms: Plantae (plants) and Animalia (animals).\nLimitation: Bacteria, fungi, and algae did not fit clearly into either kingdom.\nMicroorganisms like Euglena (both plant and animal characters) could not be classified properly."
      },
      {
        question: "What are the main characteristics of Class Mammalia? Give two examples.",
        marks: 3,
        answer: "Characteristics of Mammalia:\n1. Have mammary glands to feed young ones with milk.\n2. Body covered with hair or fur.\n3. Warm-blooded (homeothermic).\n4. Give birth to young ones (mostly viviparous).\n5. Have 4-chambered heart.\n6. Breathe through lungs.\n\nExamples: Human (Homo sapiens), Whale (Balaenoptera), Bat (Chiroptera).\nNote: Platypus is a mammal that lays eggs (exception)."
      },
      {
        question: "Explain the five-kingdom classification given by Whittaker with one example each.",
        marks: 5,
        answer: "Whittaker (1969) classified organisms into 5 kingdoms:\n\n1. Monera: Prokaryotes, no nuclear membrane, unicellular. Example: Bacteria, Blue-green algae.\n\n2. Protista: Eukaryotes, unicellular, aquatic. Example: Amoeba, Paramecium.\n\n3. Fungi: Eukaryotes, heterotrophic, cell wall of chitin, decomposers. Example: Mushroom, Penicillium.\n\n4. Plantae: Eukaryotes, multicellular, autotrophic (photosynthesis), cell wall of cellulose. Example: Mango tree, fern.\n\n5. Animalia: Eukaryotes, multicellular, heterotrophic, no cell wall. Example: Lion, earthworm."
      },
      {
        question: "What are the distinguishing features of Amphibia, Reptilia, and Aves? Give two examples of each.",
        marks: 5,
        answer: "Amphibia:\n- Live on both land and water (amphi = both)\n- Moist, scaleless skin for cutaneous respiration\n- Cold-blooded, 3-chambered heart\n- Lay eggs in water, larvae breathe through gills\nExamples: Frog (Rana), Toad (Bufo), Salamander\n\nReptilia:\n- Body covered with dry scales\n- Cold-blooded, breathe through lungs\n- Lay eggs with leathery shell on land\n- 3-chambered heart (crocodile has 4)\nExamples: Lizard (Lacerta), Snake (Naja), Crocodile\n\nAves (Birds):\n- Body covered with feathers\n- Warm-blooded, 4-chambered heart\n- Forelimbs modified into wings for flying\n- Lay eggs with hard shell, beak present\nExamples: Pigeon (Columba), Penguin, Ostrich (cannot fly but is Aves)"
      }
    ]
  },
  {
    chapterId: "science-8",
    subjectId: "science",
    chapterNumber: 8,
    chapterTitle: "Motion",
    questions: [
      {
        question: "What is the difference between distance and displacement?",
        marks: 2,
        answer: "Distance is the total path length covered by an object — it is scalar (only magnitude).\nDisplacement is the shortest straight-line distance between initial and final position — it is vector (has direction).\nExample: If you walk 4m east and 3m north, distance = 7m but displacement = 5m (NE direction)."
      },
      {
        question: "A car travels 30 km in 30 minutes. Find its speed in m/s.",
        marks: 2,
        answer: "Distance = 30 km = 30,000 m\nTime = 30 min = 30 × 60 = 1800 s\nSpeed = Distance/Time = 30000/1800 = 16.67 m/s"
      },
      {
        question: "Derive the equation v = u + at using velocity-time graph.",
        marks: 3,
        answer: "Draw a v-t graph with initial velocity u at t=0 and final velocity v at time t.\nThe graph is a straight line (uniform acceleration).\n\nAcceleration a = slope of v-t graph\na = (v - u) / (t - 0)\na = (v - u) / t\nat = v - u\nv = u + at ✓\n\nThis is the first equation of motion."
      },
      {
        question: "A train starts from rest and attains a speed of 72 km/h in 5 minutes. Find: (i) acceleration (ii) distance covered.",
        marks: 5,
        answer: "u = 0, v = 72 km/h = 20 m/s, t = 5 min = 300 s\n\n(i) Acceleration:\na = (v - u)/t = (20 - 0)/300 = 1/15 m/s² ≈ 0.067 m/s²\n\n(ii) Distance covered:\nUsing s = ut + ½at²\ns = 0 × 300 + ½ × (1/15) × (300)²\ns = 0 + ½ × (1/15) × 90000\ns = 3000 m = 3 km\n\nOR using v² = u² + 2as:\n400 = 0 + 2 × (1/15) × s\ns = 400 × 15/2 = 3000 m = 3 km"
      },
      {
        question: "What is uniform circular motion? Derive an expression to show that a body in uniform circular motion is accelerating.",
        marks: 5,
        answer: "Uniform Circular Motion: When an object moves in a circular path with constant speed, it is called uniform circular motion.\nExample: Earth revolving around sun, tip of a clock hand.\n\nWhy it is accelerating:\nAcceleration = rate of change of velocity.\nVelocity is a vector — it has both magnitude and direction.\nIn circular motion, even though speed (magnitude) is constant, direction continuously changes.\nSince direction changes, velocity changes.\nChange in velocity means acceleration is present.\nThis acceleration is directed towards the centre — called centripetal acceleration.\n\nFormula: a = v²/r\nwhere v = speed, r = radius of circular path.\n\nTherefore, uniform circular motion is accelerated motion even though speed is constant.\nThe force providing this centripetal acceleration is called centripetal force."
      }
    ]
  },
  {
    chapterId: "science-9",
    subjectId: "science",
    chapterNumber: 9,
    chapterTitle: "Force and Laws of Motion",
    questions: [
      {
        question: "State Newton's First Law of Motion.",
        marks: 2,
        answer: "Newton's First Law (Law of Inertia): An object remains in its state of rest or uniform motion in a straight line unless an external unbalanced force acts on it.\nThis property is called inertia. Heavier objects have more inertia."
      },
      {
        question: "A bullet of mass 20g is fired from a gun of mass 4 kg with a velocity of 400 m/s. Find the recoil velocity of the gun.",
        marks: 2,
        answer: "By Law of Conservation of Momentum:\nm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂\n0 = 0.02 × 400 + 4 × v\n4v = −8\nv = −2 m/s\nRecoil velocity of gun = 2 m/s (opposite direction)"
      },
      {
        question: "State and explain Newton's Third Law of Motion with two examples.",
        marks: 3,
        answer: "Newton's Third Law: For every action, there is an equal and opposite reaction. Forces always act in pairs.\n\nExample 1: When we push a wall, wall pushes us back with equal force — that's why our hand hurts.\n\nExample 2: Rocket propulsion — gases are expelled downward (action), rocket moves upward (reaction).\n\nKey point: Action and reaction act on different objects, so they don't cancel each other."
      },
      {
        question: "Prove the Law of Conservation of Momentum using Newton's Third Law.",
        marks: 5,
        answer: "Consider two objects A (mass m₁) and B (mass m₂) colliding.\nInitial velocities: u₁ and u₂. Final velocities: v₁ and v₂.\nTime of contact = t\n\nForce on A by B: F_AB = m₁(v₁-u₁)/t\nForce on B by A: F_BA = m₂(v₂-u₂)/t\n\nBy Newton's Third Law: F_AB = -F_BA\nm₁(v₁-u₁)/t = -m₂(v₂-u₂)/t\nm₁v₁ - m₁u₁ = -m₂v₂ + m₂u₂\nm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂\n\nTotal initial momentum = Total final momentum ✓\nHence, momentum is conserved."
      },
      {
        question: "What is inertia? Explain its types with examples. How is inertia related to mass?",
        marks: 5,
        answer: "Inertia: The tendency of an object to resist any change in its state of rest or motion is called inertia.\n\nTypes of Inertia:\n\n1. Inertia of Rest: Tendency to remain at rest.\nExample: When a bus suddenly starts, passengers fall backward.\nExample: Dust falls off a carpet when beaten — carpet moves, dust stays.\n\n2. Inertia of Motion: Tendency to continue moving.\nExample: When a bus suddenly stops, passengers lean forward.\nExample: An athlete runs before long jump to use inertia of motion.\n\n3. Inertia of Direction: Tendency to continue in same direction.\nExample: When a turning bus takes a turn, passengers tend to go straight.\nExample: Water drops fly tangentially off a wet spinning wheel.\n\nRelation with Mass:\nInertia is directly proportional to mass.\nHeavier objects are harder to move or stop → more inertia.\nExample: A cricket ball has more inertia than a tennis ball.\nMeasure of inertia = mass of the object."
      }
    ]
  },
  {
    chapterId: "science-10",
    subjectId: "science",
    chapterNumber: 10,
    chapterTitle: "Gravitation",
    questions: [
      {
        question: "State the Universal Law of Gravitation.",
        marks: 2,
        answer: "Every object in the universe attracts every other object with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them.\nF = Gm₁m₂/d²\nwhere G = 6.67 × 10⁻¹¹ Nm²/kg² is the Universal Gravitational Constant."
      },
      {
        question: "What is the difference between mass and weight?",
        marks: 2,
        answer: "Mass: Amount of matter in an object. Constant everywhere. Unit = kg. Scalar quantity.\nWeight: Gravitational force acting on an object. Changes with location (less on moon). Unit = Newton. Vector quantity.\nRelation: W = mg, where g = acceleration due to gravity."
      },
      {
        question: "Why does a freely falling object experience weightlessness? Explain with the concept of apparent weight.",
        marks: 3,
        answer: "When an object is in free fall, both the object and its support (like a scale) fall with same acceleration g.\nThe normal reaction force (N) from the surface becomes zero.\nApparent weight = m(g - a). During free fall, a = g, so apparent weight = m(g-g) = 0.\nThe person feels weightless.\nExample: Astronauts in space station are in free fall around Earth — they experience weightlessness."
      },
      {
        question: "A stone is thrown vertically upward with a velocity of 40 m/s. Find: (i) maximum height (ii) time to reach maximum height (iii) total time of flight. (g = 10 m/s²)",
        marks: 5,
        answer: "u = 40 m/s, a = -10 m/s² (going up), v = 0 at max height\n\n(i) Maximum height using v² = u² + 2as:\n0 = 1600 - 20s\ns = 1600/20 = 80 m\n\n(ii) Time to reach max height using v = u + at:\n0 = 40 - 10t\nt = 4 s\n\n(iii) Total time of flight:\nTime up = time down = 4 s\nTotal time = 4 + 4 = 8 s"
      },
      {
        question: "Derive an expression for the acceleration due to gravity (g) on the surface of Earth. Why does g vary on Earth's surface?",
        marks: 5,
        answer: "Derivation of g:\nLet mass of Earth = M, radius = R, mass of object = m\nGravitational force: F = GMm/R²  ...(1)\nBy Newton's 2nd law: F = mg  ...(2)\n\nFrom (1) and (2):\nmg = GMm/R²\ng = GM/R²\n\nPutting G = 6.67×10⁻¹¹, M = 6×10²⁴ kg, R = 6.4×10⁶ m:\ng = (6.67×10⁻¹¹ × 6×10²⁴) / (6.4×10⁶)²\ng ≈ 9.8 m/s²\n\nWhy g varies:\n1. Shape of Earth: Earth is not a perfect sphere — bulges at equator. R is more at equator, so g is less at equator and more at poles.\n2. Altitude: As height increases, R increases, so g decreases (g ∝ 1/R²).\n3. Depth: As depth increases, effective mass of Earth decreases, so g decreases.\n4. Rotation of Earth: Due to Earth's rotation, effective g is slightly reduced."
      }
    ]
  },
  {
    chapterId: "science-11",
    subjectId: "science",
    chapterNumber: 11,
    chapterTitle: "Work and Energy",
    questions: [
      {
        question: "When is work said to be done? Give the formula.",
        marks: 2,
        answer: "Work is done when a force applied on an object causes displacement in the direction of force.\nW = F × s × cos θ\nwhere F = force, s = displacement, θ = angle between force and displacement.\nWork is zero if displacement is zero or force is perpendicular to displacement."
      },
      {
        question: "A body of mass 5 kg is moving with velocity 10 m/s. Find its kinetic energy.",
        marks: 2,
        answer: "KE = ½mv²\n= ½ × 5 × (10)²\n= ½ × 5 × 100\n= 250 J"
      },
      {
        question: "State and explain the Law of Conservation of Energy with an example.",
        marks: 3,
        answer: "Law of Conservation of Energy: Energy can neither be created nor destroyed; it can only be converted from one form to another. Total energy of an isolated system remains constant.\n\nExample: A ball thrown upward:\n- At ground: KE = maximum, PE = 0\n- Going up: KE decreases, PE increases\n- At maximum height: KE = 0, PE = maximum\n- Coming down: PE decreases, KE increases\nAt every point: KE + PE = constant (mechanical energy conserved)"
      },
      {
        question: "A pump raises 200 litres of water per minute to a height of 10m. Calculate the power of the pump. (g = 10 m/s², 1 litre = 1 kg)",
        marks: 5,
        answer: "Mass of water = 200 kg (since 200 litres = 200 kg)\nHeight = 10 m, Time = 1 min = 60 s\n\nWork done = mgh = 200 × 10 × 10 = 20000 J\n\nPower = Work/Time = 20000/60 = 333.33 W ≈ 333 W\n\nOr in terms of horsepower: 333/746 ≈ 0.447 HP"
      },
      {
        question: "Derive the expression for kinetic energy. Show that work done on an object equals its change in kinetic energy (Work-Energy Theorem).",
        marks: 5,
        answer: "Derivation of KE:\nLet object of mass m start from rest (u=0) and reach velocity v.\nUsing v² = u² + 2as: v² = 2as → a = v²/2s\nForce: F = ma = mv²/2s\nWork done: W = F × s = (mv²/2s) × s = ½mv²\nTherefore, KE = ½mv² ✓\n\nWork-Energy Theorem:\nLet initial velocity = u, final velocity = v, force = F, displacement = s\nW = F × s = ma × s\nUsing v² = u² + 2as: as = (v²-u²)/2\nW = m × (v²-u²)/2\nW = ½mv² - ½mu²\nW = Final KE - Initial KE\nW = ΔKE ✓\n\nWork done on a body equals its change in kinetic energy."
      }
    ]
  },
  {
    chapterId: "science-12",
    subjectId: "science",
    chapterNumber: 12,
    chapterTitle: "Sound",
    questions: [
      {
        question: "What are the characteristics of sound? Define frequency and amplitude.",
        marks: 2,
        answer: "Frequency: Number of vibrations per second. Unit = Hertz (Hz). Determines pitch of sound.\nAmplitude: Maximum displacement of a particle from its mean position. Determines loudness of sound.\nHigher frequency = shriller sound. Higher amplitude = louder sound."
      },
      {
        question: "What is the echo of sound? What is the minimum distance required to hear an echo?",
        marks: 2,
        answer: "Echo is the reflection of sound heard after the original sound due to reflection from a distant surface.\nFor echo to be heard, the time gap between original and reflected sound must be at least 1/10th second.\nMinimum distance = (speed of sound × 0.1)/2 = (344 × 0.1)/2 = 17.2 m ≈ 17 m"
      },
      {
        question: "What is SONAR? Explain its working principle.",
        marks: 3,
        answer: "SONAR stands for Sound Navigation And Ranging.\nIt is used to find depth of sea and detect underwater objects like submarines.\n\nWorking:\nUltrasonic waves are sent from ship into water.\nThese waves hit the object/seabed and reflect back.\nTime taken for echo to return is measured.\nDepth = (speed of sound in water × time) / 2\nd = v × t/2\n\nSpeed of sound in water ≈ 1500 m/s.\nSonar is used in ships, submarines, fish finders."
      },
      {
        question: "A sound wave has a frequency of 500 Hz. The wave travels at 340 m/s. Find (i) wavelength (ii) time period. Also find distance from a wall if echo is heard after 2 seconds.",
        marks: 5,
        answer: "(i) Wavelength:\nv = f × λ\nλ = v/f = 340/500 = 0.68 m\n\n(ii) Time period:\nT = 1/f = 1/500 = 0.002 s = 2 × 10⁻³ s\n\n(iii) Distance for echo:\nEcho heard after 2 s means sound traveled to wall and back.\nTotal distance = v × t = 340 × 2 = 680 m\nDistance to wall = 680/2 = 340 m"
      },
      {
        question: "What are ultrasonic waves? Write four applications of ultrasound in medicine and industry.",
        marks: 5,
        answer: "Ultrasonic waves are sound waves with frequency greater than 20,000 Hz (20 kHz) — beyond human hearing range.\n\nAnimals like bats, dolphins, and dogs can hear ultrasound.\n\nMedical Applications:\n1. Ultrasonography: Used to get images of internal organs (liver, kidney, uterus). Safe for pregnant women to monitor foetal development.\n2. SONAR in medicine: Echocardiography to examine heart.\n3. Kidney stones: Ultrasound waves used to break kidney stones into small pieces without surgery.\n4. Cancer detection: Ultrasound used to detect tumours.\n\nIndustrial Applications:\n1. Flaw detection: Used to detect cracks in metal blocks, bridges, and machinery.\n2. Cleaning: Ultrasound used to clean delicate parts like jewellery, electronic components.\n3. Echolocation: Used in SONAR to detect submarines and measure sea depth.\n4. Homogenisation: Used to mix milk and cream uniformly."
      }
    ]
  },
  {
    chapterId: "science-13",
    subjectId: "science",
    chapterNumber: 13,
    chapterTitle: "Why Do We Fall Ill?",
    questions: [
      {
        question: "What is the difference between being healthy and being disease-free?",
        marks: 2,
        answer: "Disease-free means absence of a specific disease in the body.\nHealthy means complete physical, mental, and social well-being — not just absence of disease.\nA person can be disease-free but not healthy (due to stress, malnutrition, or poor social conditions)."
      },
      {
        question: "What are the differences between acute and chronic diseases?",
        marks: 2,
        answer: "Acute disease: Short duration, comes suddenly, severe symptoms. Example: Cold, cholera.\nChronic disease: Long duration, develops slowly, lasts for months/years. Example: TB, diabetes.\nChronic diseases cause more damage to health over time."
      },
      {
        question: "What are the modes of transmission of infectious diseases? Give one example each.",
        marks: 3,
        answer: "1. Air-borne: Pathogens spread through air via droplets from sneezing/coughing. Example: Common cold, tuberculosis.\n\n2. Water-borne: Pathogens spread through contaminated water. Example: Cholera, typhoid.\n\n3. Contact: Direct contact with infected person or their belongings. Example: Skin infections, AIDS (blood contact).\n\n4. Vector-borne: Organisms like mosquitoes carry and transmit disease. Example: Malaria (Anopheles mosquito), Dengue (Aedes mosquito).\n\n5. Food-borne: Contaminated food causes infection. Example: Food poisoning."
      },
      {
        question: "What is immunity? Explain the difference between general and specific immunity.",
        marks: 5,
        answer: "Immunity is the ability of the body to resist infection and disease.\n\nGeneral (Non-specific) Immunity:\n- Present from birth, does not target specific pathogens.\n- Includes skin (barrier), mucus, tears, stomach acid.\n- White blood cells engulf and destroy any foreign particles.\n- Quick response but not targeted.\n\nSpecific Immunity:\n- Develops against specific pathogens.\n- Involves lymphocytes (B-cells and T-cells).\n- B-cells produce antibodies specific to antigens.\n- Has memory — responds faster on second exposure.\n- Basis of vaccination: weak/dead pathogens trigger specific immunity without causing disease.\n\nVaccination gives artificial specific immunity."
      },
      {
        question: "What are antibiotics? How do they work? What are their limitations?",
        marks: 5,
        answer: "Antibiotics are medicines that kill or inhibit the growth of bacteria.\nExamples: Penicillin, Streptomycin, Tetracycline, Amoxicillin.\n\nHow they work:\nAntibiotics block specific biochemical processes important for bacteria.\nPenicillin blocks cell wall synthesis in bacteria → bacteria burst and die.\nStreptomycin blocks protein synthesis in bacteria.\nThey do NOT affect our cells because our cells are different from bacterial cells.\n\nLimitations of Antibiotics:\n1. Ineffective against viruses: Cannot treat viral diseases like cold, flu, COVID-19.\n2. Antibiotic resistance: Overuse/misuse causes bacteria to become resistant — a major global health crisis.\n3. Side effects: Can kill beneficial gut bacteria causing digestive problems.\n4. Allergic reactions: Some people are allergic to certain antibiotics (e.g., penicillin allergy).\n5. Incomplete course danger: Not completing the course leaves stronger bacteria alive, promoting resistance.\n\nTherefore, antibiotics should only be taken when prescribed by a doctor."
      }
    ]
  },
  {
    chapterId: "science-14",
    subjectId: "science",
    chapterNumber: 14,
    chapterTitle: "Natural Resources",
    questions: [
      {
        question: "What is the role of atmosphere in climate control?",
        marks: 2,
        answer: "The atmosphere acts as a blanket — it keeps Earth warm by absorbing and retaining heat.\nDuring day, it prevents excess heating. At night, it prevents rapid cooling.\nWithout atmosphere, temperature variation would be extreme (like on Moon: +120°C to -180°C)."
      },
      {
        question: "What is the water cycle? Name the processes involved.",
        marks: 2,
        answer: "Water cycle is the continuous circulation of water in nature.\nProcesses: Evaporation (water → vapour), Condensation (vapour → clouds), Precipitation (rain/snow), and Collection (in rivers, lakes, ground).\nThe sun provides energy and gravity drives the cycle."
      },
      {
        question: "Explain the nitrogen cycle in brief.",
        marks: 3,
        answer: "Nitrogen cycle is the circulation of nitrogen through nature.\n1. Nitrogen Fixation: N₂ gas from air is converted to nitrates by nitrogen-fixing bacteria (Rhizobium in legume roots) and lightning.\n2. Assimilation: Plants absorb nitrates from soil to make proteins. Animals eat plants.\n3. Ammonification: Dead organisms are decomposed by bacteria releasing ammonia.\n4. Nitrification: Ammonia → nitrites → nitrates (by nitrifying bacteria).\n5. Denitrification: Nitrates → N₂ gas (by denitrifying bacteria) — nitrogen returns to atmosphere."
      },
      {
        question: "What are the causes and effects of soil erosion? How can it be prevented?",
        marks: 5,
        answer: "Causes of Soil Erosion:\n1. Deforestation — roots no longer hold soil\n2. Heavy rain and wind\n3. Overgrazing by animals\n4. Faulty farming practices\n\nEffects:\n1. Loss of fertile topsoil reduces crop productivity\n2. Flooding due to reduced water absorption\n3. Desertification of land\n4. Silting of rivers and dams\n\nPrevention:\n1. Afforestation — planting trees\n2. Contour ploughing on slopes\n3. Building check dams\n4. Terrace farming on hillsides\n5. Banning overgrazing"
      },
      {
        question: "What are the biogeochemical cycles? Explain the carbon cycle in detail.",
        marks: 5,
        answer: "Biogeochemical cycles are natural cycles through which elements like carbon, nitrogen, oxygen, and water circulate continuously between living organisms and the environment.\n\nCarbon Cycle:\nCarbon exists as CO₂ in atmosphere.\n\nSteps:\n1. Photosynthesis: Plants absorb CO₂ and convert it to glucose (organic carbon).\n   6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n\n2. Consumption: Animals eat plants, carbon passes through food chain.\n\n3. Respiration: All living organisms release CO₂ back to atmosphere.\n   C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy\n\n4. Decomposition: Dead organisms decomposed by bacteria, releasing CO₂.\n\n5. Combustion: Burning of fossil fuels releases stored carbon as CO₂.\n\n6. Ocean absorption: Oceans absorb CO₂, marine organisms use it to form shells (CaCO₃).\n\nImbalance: Excess burning of fossil fuels increases CO₂ → greenhouse effect → global warming.\nSolution: Reduce fossil fuel use, increase afforestation."
      }
    ]
  },
  {
    chapterId: "science-15",
    subjectId: "science",
    chapterNumber: 15,
    chapterTitle: "Improvement in Food Resources",
    questions: [
      {
        question: "What is the difference between mixed cropping and intercropping?",
        marks: 2,
        answer: "Mixed Cropping: Two or more crops grown simultaneously in same field, seeds mixed together. Reduces risk of total crop failure.\nIntercropping: Two or more crops grown in alternate rows in same field. Allows better nutrient use and pest control. Example: Soybean + maize."
      },
      {
        question: "What are macronutrients? Give two examples.",
        marks: 2,
        answer: "Macronutrients are nutrients required by plants in large quantities.\nThere are 6 macronutrients: Carbon, Hydrogen, Oxygen (from air/water), and Nitrogen, Phosphorus, Potassium (from soil).\nNitrogen helps in vegetative growth; Phosphorus helps in root development."
      },
      {
        question: "What is crop rotation? What are its benefits?",
        marks: 3,
        answer: "Crop rotation is the practice of growing different crops alternately on the same land in successive seasons.\nExample: Wheat → Legumes → Wheat (alternating)\n\nBenefits:\n1. Maintains soil fertility — legumes fix nitrogen naturally.\n2. Reduces pest and disease buildup (pests specific to one crop don't accumulate).\n3. Controls weeds naturally.\n4. Reduces need for fertilisers and pesticides.\n5. Better yield overall."
      },
      {
        question: "What is manure? Differentiate between manure and fertilisers. Which is better for soil health?",
        marks: 5,
        answer: "Manure: Organic substance obtained by decomposition of animal waste and plant residues.\nTypes: Compost, vermicompost, green manure, farmyard manure.\n\nManure vs Fertiliser:\n1. Source: Manure — natural/organic; Fertiliser — chemical/synthetic.\n2. Nutrients: Manure adds humus and improves soil texture; Fertiliser gives specific nutrients.\n3. Cost: Manure — cheap; Fertiliser — expensive.\n4. Environment: Manure — eco-friendly; Fertilisers — can cause water pollution (eutrophication).\n5. Speed: Manure — slow acting; Fertiliser — fast acting.\n\nFor long-term soil health, manure is better as it improves soil structure and microbial life."
      },
      {
        question: "What is poultry farming? Describe the management practices required for healthy poultry.",
        marks: 5,
        answer: "Poultry farming is the raising of domesticated birds like chickens, ducks, turkeys for eggs and meat.\n\nCommon breeds:\n- Egg layers: Leghorn, Minorca\n- Meat breeds (broilers): Plymouth Rock, Cornish\n\nManagement Practices:\n\n1. Housing:\n- Clean, well-ventilated, spacious housing.\n- Protection from rain, sun, predators.\n- Proper drainage system.\n\n2. Feeding:\n- Balanced diet with proteins, carbohydrates, fats, vitamins, minerals.\n- Clean drinking water always available.\n- Feed varies for layers (more calcium) and broilers (more protein).\n\n3. Disease Prevention:\n- Regular vaccination against diseases like Ranikhet, fowl pox.\n- Regular health checkups by veterinarian.\n- Sick birds should be isolated immediately.\n\n4. Hygiene:\n- Regular cleaning of poultry house.\n- Proper disposal of droppings.\n- Disinfection of equipment.\n\n5. Breeding:\n- Cross-breeding of desi (disease-resistant) with exotic (high-yield) breeds.\n- Improves egg production and meat quality."
      }
    ]
  }
];

// ==================== SOCIAL SCIENCE ====================

const ssQuestions: ChapterQuestions[] = [
  {
    chapterId: "ss-1",
    subjectId: "social-science",
    chapterNumber: 1,
    chapterTitle: "The French Revolution",
    questions: [
      {
        question: "What was the 'Reign of Terror'? Who led it?",
        marks: 2,
        answer: "The Reign of Terror (1793-94) was a period of extreme violence during the French Revolution led by Robespierre. He ordered the execution of thousands of people considered enemies of the Revolution, including nobles, clergy, and ordinary citizens."
      },
      {
        question: "What were the three Estates in French society before the Revolution?",
        marks: 2,
        answer: "French society was divided into: First Estate — Clergy, Second Estate — Nobility, and Third Estate — Common people (merchants, peasants, laborers). The Third Estate paid all taxes but had no political power."
      },
      {
        question: "What role did women play in the French Revolution?",
        marks: 3,
        answer: "Women actively participated in the Revolution. They formed clubs like 'Society of Revolutionary and Republican Women.' They marched to Versailles demanding bread in October 1789. They demanded equal rights including voting rights. However, even after the Revolution, women were not given political rights, and women's clubs were shut down in 1793."
      },
      {
        question: "Explain the causes of the French Revolution.",
        marks: 5,
        answer: "Main causes: (1) Social inequality — Three Estates system was highly unjust; clergy and nobility had privileges while the Third Estate was burdened with taxes. (2) Financial crisis — France was bankrupt due to wars and expensive royal lifestyle. (3) Food shortage — Bad harvests led to bread shortages and rising prices. (4) Enlightenment ideas — Philosophers like Rousseau and Voltaire promoted ideas of liberty, equality, and democracy. (5) Weak leadership — King Louis XVI was indecisive and out of touch with people's sufferings."
      },
      {
        question: "How did the French Revolution influence the world? Explain with examples.",
        marks: 5,
        answer: "The French Revolution had a far-reaching impact: (1) Spread of democratic ideals — Concepts of Liberty, Equality, and Fraternity became universal principles. (2) Abolition of monarchy — It inspired other nations to question absolute monarchy. (3) Napoleon's conquests — He spread revolutionary laws (Napoleonic Code) across Europe. (4) Latin American revolutions — Leaders like Simon Bolivar were inspired to free their countries. (5) Indian nationalism — Indians drew inspiration for their freedom struggle from French ideals. (6) Abolition of slavery — The revolution sparked debate about universal human rights, eventually leading to anti-slavery movements. Thus, the French Revolution is considered a turning point in world history."
      }
    ]
  },
  {
    chapterId: "ss-2",
    subjectId: "social-science",
    chapterNumber: 2,
    chapterTitle: "Socialism in Europe and the Russian Revolution",
    questions: [
      {
        question: "What was 'Bloody Sunday'? When did it occur?",
        marks: 2,
        answer: "Bloody Sunday (January 1905) was the day when Tsar's forces fired on a peaceful procession of workers led by Father Gapon in St. Petersburg. They were marching to present a petition to the Tsar. Hundreds of workers were killed, sparking widespread protests."
      },
      {
        question: "Differentiate between Bolsheviks and Mensheviks.",
        marks: 2,
        answer: "Bolsheviks (led by Lenin) believed in a disciplined, small party of professional revolutionaries for immediate socialist revolution. Mensheviks believed in a broad-based party and wanted a gradual, democratic revolution. Both were factions of the Russian Social Democratic Workers' Party."
      },
      {
        question: "What were the main changes brought by the Bolsheviks after the October Revolution?",
        marks: 3,
        answer: "(1) Industries and banks were nationalized. (2) Land was declared social property — peasants could seize noble lands. (3) Army and administration were restructured. (4) Russia withdrew from World War I (Treaty of Brest-Litovsk, 1918). (5) Soviet Union (USSR) was formed in 1922 with a planned socialist economy."
      },
      {
        question: "Explain the causes of the Russian Revolution of 1917.",
        marks: 5,
        answer: "(1) Autocratic rule — Tsar Nicholas II refused to share power or listen to people's demands. (2) Poverty and inequality — Most Russians were poor peasants working on nobles' lands. (3) World War I — Russia suffered huge losses in the war, causing food shortages and military discontent. (4) Industrialization problems — Factory workers faced terrible conditions, low wages, and long hours. (5) Influence of Marxist ideas — Lenin and the Bolsheviks convinced workers that revolution was the solution. These factors combined to overthrow the Tsar in February 1917 and bring the Bolsheviks to power in October 1917."
      },
      {
        question: "How did socialism develop as an ideology in Europe during the 19th century?",
        marks: 5,
        answer: "Socialism emerged as a response to the harsh conditions of industrial capitalism. (1) Early Socialists — Thinkers like Robert Owen (Britain) and Louis Blanc (France) proposed cooperative societies where workers would share profits. (2) Marxism — Karl Marx and Friedrich Engels argued that history is driven by class struggle. Workers (proletariat) must overthrow capitalists (bourgeoisie) through revolution. (3) Trade Unions — Workers formed unions to demand better wages and conditions, becoming politically active. (4) Socialist Parties — Parties like the Social Democratic Party in Germany gained influence. (5) International organizations — The First International (1864) and Second International (1889) united socialist workers worldwide. Socialism spread across Europe by promising a classless society where all owned the means of production collectively."
      }
    ]
  },
  {
    chapterId: "ss-3",
    subjectId: "social-science",
    chapterNumber: 3,
    chapterTitle: "Nazism and the Rise of Hitler",
    questions: [
      {
        question: "What was the 'Night of the Long Knives'?",
        marks: 2,
        answer: "On June 30, 1934, Hitler ordered the killing of his own storm troopers (SA) and other rivals within the Nazi party. This purge eliminated internal opposition and consolidated Hitler's complete power over the Nazi movement and Germany."
      },
      {
        question: "What was the Weimar Republic? Why did it fail?",
        marks: 2,
        answer: "The Weimar Republic was Germany's democratic government (1919-1933) established after WWI. It failed due to economic crisis (hyperinflation, Great Depression), political instability, harsh Treaty of Versailles, and people's loss of faith in democracy, allowing Hitler to rise to power."
      },
      {
        question: "Explain Hitler's racial ideology and its impact on Jews.",
        marks: 3,
        answer: "Hitler believed in Nordic/Aryan racial superiority. He considered Jews, Gypsies, Blacks, and Slavs as inferior races. This led to: Nuremberg Laws (1935) stripping Jews of citizenship, Kristallnacht (1938) — mass destruction of Jewish property, and finally the Holocaust — systematic extermination of 6 million Jews in concentration camps like Auschwitz. This genocide is one of history's greatest crimes against humanity."
      },
      {
        question: "How did Hitler establish a totalitarian state in Germany?",
        marks: 5,
        answer: "(1) Reichstag fire (1933) — Used arson at parliament to blame Communists and pass emergency laws. (2) Enabling Act (1933) — Gave Hitler power to rule by decree without parliament. (3) Destroyed opposition — Banned all parties, arrested Communist and Socialist leaders. (4) Controlled media — Newspapers, radio, and film were used for Nazi propaganda. (5) Hitler Youth — Children were indoctrinated with Nazi ideology. (6) Gestapo (secret police) — Controlled population through fear and surveillance. Thus Germany became a one-party, one-leader totalitarian state."
      },
      {
        question: "Explain the Holocaust. Why is it considered one of history's greatest crimes?",
        marks: 5,
        answer: "The Holocaust was the systematic state-sponsored persecution and murder of 6 million Jews by the Nazi regime (1933-1945). Stages: (1) Legal discrimination — Jews lost citizenship, were banned from professions. (2) Violence — Kristallnacht (1938) destroyed Jewish businesses and synagogues. (3) Ghettos — Jews were forced into crowded, disease-ridden areas. (4) Final Solution — Mass killings began at concentration/extermination camps like Auschwitz, Treblinka. Methods included gas chambers, shooting, and starvation. It is called history's greatest crime because: it was state-organized genocide, it targeted civilians including children, it used industrial methods to mass-murder an entire ethnic group, and it violated all principles of human dignity and rights. The Holocaust is a reminder of the dangers of racism, totalitarianism, and the failure of humanity."
      }
    ]
  },
  {
    chapterId: "ss-4",
    subjectId: "social-science",
    chapterNumber: 4,
    chapterTitle: "Forest Society and Colonialism",
    questions: [
      {
        question: "What was the 'Scientific Forestry' introduced by the British?",
        marks: 2,
        answer: "Scientific Forestry was a system where natural mixed forests were replaced by single-species plantations of commercially valuable trees like teak and sal. The British introduced it to maximize timber production for ships, railways, and construction, disrupting the ecological balance and tribal communities."
      },
      {
        question: "Who were the Bastar tribals and why did they revolt in 1910?",
        marks: 2,
        answer: "The Bastar tribals lived in Central India. They revolted in 1910 (Bhumkal Rebellion) led by Gunda Dhur because the British closed large forest areas, imposed forced labor (begar), demanded heavy taxes, and restricted traditional forest use, threatening their entire way of life."
      },
      {
        question: "How did colonial rule affect forest-dwelling communities?",
        marks: 3,
        answer: "(1) Their access to forests for food, fuel, and grazing was restricted. (2) Shifting cultivation (jhum) was banned. (3) They were forced into settled agriculture or labor. (4) Forest laws made their traditional practices illegal. (5) Many communities like the Kalangs of Java and tribals of India lost their livelihoods entirely. Communities like the Mundas, Santhals, and Bastar tribes staged revolts against these restrictions."
      },
      {
        question: "Why were forests important to the colonial government? Explain.",
        marks: 5,
        answer: "(1) Railway expansion — India had 1,40,000 km of railways by 1890, requiring millions of wooden sleepers — forests were the only source. (2) Navy and ships — Teak from Indian forests was prized for building warships. (3) Commercial timber — Sal and deodar wood were needed for construction. (4) Revenue — Forest products were a major source of colonial income. (5) Plantations — Forest land was cleared for tea, coffee, and rubber plantations. The colonial government established the Forest Department (1864) and passed the Indian Forest Act (1865, 1878, 1927) to take complete control over forests."
      },
      {
        question: "Describe the impact of colonial rule on forests in India. How did tribals resist?",
        marks: 5,
        answer: "Colonial Impact: (1) India lost nearly one-third of its forests to railways, agriculture, and commercial use. (2) Indian Forest Act classified forests as Reserved, Protected, and Village forests — restricting community use. (3) Traditional rights of grazing, shifting cultivation, collecting forest produce were severely curtailed. (4) Forest officers had unlimited power to punish villagers. Tribal Resistance: (1) Bastar Rebellion (1910) — Led by Gunda Dhur; tribals refused to pay taxes and attacked British camps. (2) Birsa Munda Movement — Birsa Munda led Mundas against British land policies. (3) The Santhals revolted in 1855-56 over forest rights and land alienation. Despite these revolts, the British strengthened forest laws. The legacy of colonial forestry continues to affect tribal rights in India even today."
      }
    ]
  },
  {
    chapterId: "ss-5",
    subjectId: "social-science",
    chapterNumber: 5,
    chapterTitle: "Pastoralists in the Modern World",
    questions: [
      {
        question: "Who are pastoralists? Name any two pastoral communities of India.",
        marks: 2,
        answer: "Pastoralists are people who depend on rearing animals (cattle, sheep, goats, camels) for their livelihood and move from place to place in search of pasture and water. Two pastoral communities of India: Gujjars (Himachal Pradesh/Jammu) and Dhangars (Maharashtra)."
      },
      {
        question: "How did colonial rule affect the pastoralists of India?",
        marks: 2,
        answer: "Colonial rule affected pastoralists by: (1) Waste Land Acts took over common grazing lands. (2) Forest Acts restricted movement through reserved forests. (3) Criminal Tribes Act (1871) labeled some nomadic communities as criminals. (4) Heavy taxes on animals and movement routes disrupted their traditional way of life."
      },
      {
        question: "Explain the seasonal movement of the Gujjar Bakarwals of Jammu and Kashmir.",
        marks: 3,
        answer: "The Gujjar Bakarwals are a pastoral community who practice transhumance — seasonal migration. In winter, they descend to the low-lying plains of Jammu region where snow does not fall and they graze their animals (sheep, goats) on dry scrublands. As summer approaches, they move up to high-altitude Alpine pastures (bugyals) in the Himalayas (around 3,500-4,500 m). They follow the same routes every year, timing their movement with the seasons. The entire family, with thousands of animals, travels together."
      },
      {
        question: "Describe the problems faced by pastoral communities in the modern world.",
        marks: 5,
        answer: "(1) Loss of grazing land — Common pastures have been taken over by cultivation, reserved forests, wildlife sanctuaries, and urban expansion. (2) Restricted movement — National boundaries and new state borders cut off traditional migration routes. (3) Drought and uncertain rainfall — Reduces availability of pastures and water. (4) Government policies — Pressure to settle down disrupts their mobile lifestyle. (5) Market changes — New synthetic products reduced demand for wool and pastoral products. (6) Debt — Pastoralists often borrow from moneylenders at high interest rates when herds decline. These challenges have led to the decline of many pastoral communities worldwide."
      },
      {
        question: "Compare the lives of pastoralists in Africa and India. What challenges do they share?",
        marks: 5,
        answer: "India: Communities like Gujjars, Dhangars, Raikas, and Bakarwals practice seasonal migration between plains and highlands or across regions. Colonial Forest and Grazing Acts disrupted their movement. Africa: Maasai of East Africa (Kenya/Tanzania) are traditional cattle herders. Colonial land policies took away their best grazing lands for European farms and game reserves. Common Challenges: (1) Loss of pastures — Both lost land to agriculture, forests, and settlements. (2) Restricted movement — Colonial and modern governments forced boundaries on their migrations. (3) Forced settlement — Governments pushed both communities into permanent settlements. (4) Poverty — Both face poverty as traditional livelihoods decline. (5) Social changes — Young people move to cities, breaking the pastoral tradition. Despite centuries of successful adaptation, both communities face the threat of their way of life disappearing in the modern world."
      }
    ]
  },
  {
    chapterId: "ss-6",
    subjectId: "social-science",
    chapterNumber: 6,
    chapterTitle: "Peasants and Farmers",
    questions: [
      {
        question: "What was the 'Dust Bowl'? How was it caused?",
        marks: 2,
        answer: "The Dust Bowl was a period of severe dust storms in the 1930s that damaged the ecology and agriculture of the American and Canadian prairies. It was caused by extensive deep ploughing of the virgin topsoil of the Great Plains, which removed the natural grasses that held the soil in place. Combined with drought, the loose soil turned to dust and was blown away by winds."
      },
      {
        question: "Who were the 'Diggers' in England? Why did they protest?",
        marks: 2,
        answer: "The Diggers were a group of poor farmers in England during the 17th century who believed that land should be common property. They protested because the enclosures (fencing off common lands) deprived them of their traditional rights to graze animals and cultivate small plots. They dug up and cultivated common lands, asserting their right to the land."
      },
      {
        question: "Explain the causes of the Great Agrarian Depression of the 1930s in the USA.",
        marks: 3,
        answer: "(1) Overproduction — During WWI, US farmers expanded production to feed Europe. After the war, demand fell but production remained high. (2) Falling prices — Surplus grain led to falling prices. Wheat prices fell by 50% between 1929 and 1932. (3) Debt — Farmers had borrowed heavily to buy land and machinery during the boom. When prices fell, they could not repay. (4) Dust Bowl — Ecological disaster destroyed farmland. (5) Bank foreclosures — Many farmers lost their land to banks. The Depression forced many farmers to become laborers or migrate to cities."
      },
      {
        question: "How did the British policy of enclosures affect English peasants?",
        marks: 5,
        answer: "Enclosure was the process of fencing off common lands and converting them into private property. Impact on peasants: (1) Loss of livelihood — Poor peasants could no longer graze animals or collect firewood from common lands. (2) Migration — Many peasants were displaced and moved to cities seeking work. (3) Agricultural labor — Former peasants became wage laborers on large farms. (4) Poverty — The loss of supplementary income from common lands pushed many into poverty. (5) Protests — Groups like the Diggers and protests against enclosures were common. The enclosure movement transformed England from a society of small farmers to one of large commercial farms and landless laborers."
      },
      {
        question: "Compare the lives of peasants in India and the USA during the early 20th century.",
        marks: 5,
        answer: "India: Peasants were mostly small farmers or landless laborers. They faced heavy land revenue demands from the British, frequent famines, and indebtedness to moneylenders. Many were forced into commercial crops like indigo and cotton. The Champaran Satyagraha (1917) and Kheda Satyagraha (1918) were peasant movements against British exploitation. USA: Peasants were independent farmers owning large tracts of land. They used machinery and modern methods. However, they faced the Great Depression, falling prices, and the Dust Bowl. Many lost land to banks and became migrants. Key difference: Indian peasants suffered colonial exploitation and traditional agriculture; American farmers faced capitalist market fluctuations and ecological disasters. Both experienced poverty and displacement, but their contexts were very different."
      }
    ]
  },
  {
    chapterId: "ss-7",
    subjectId: "social-science",
    chapterNumber: 7,
    chapterTitle: "India – Size and Location",
    questions: [
      {
        question: "What is the latitudinal and longitudinal extent of India?",
        marks: 2,
        answer: "India lies between latitudes 8°4'N to 37°6'N and longitudes 68°7'E to 97°25'E. The Tropic of Cancer (23°30'N) passes through the middle of the country, dividing it into almost equal halves."
      },
      {
        question: "What is the significance of India's central location in Asia?",
        marks: 2,
        answer: "India's central location in the Indian Ocean gives it strategic importance. It is equidistant from both ends of the Ocean. This location helped India develop trade routes with Africa, West Asia, and Southeast Asia. India acts as a connecting point for sea routes between East and West."
      },
      {
        question: "How does India's location influence its climate and culture?",
        marks: 3,
        answer: "(1) Climate — The Tropic of Cancer divides India; the north has continental climate while the south has tropical climate. Monsoon winds blow from the Indian Ocean, bringing rain. (2) Cultural Exchange — India's peninsular location allowed traders from Arabia, East Africa, and Southeast Asia to visit, enriching Indian culture. (3) Maritime trade — India developed as a major maritime trading civilization, spreading ideas to neighboring regions. (4) Monsoon winds helped ancient sailors navigate to and from India."
      },
      {
        question: "Describe India's physical size and its importance.",
        marks: 5,
        answer: "India has an area of about 3.28 million sq km, making it the 7th largest country in the world. North-to-south extent: 3,214 km. East-to-west extent: 2,933 km. Coastline: 7,516.6 km (including island territories). Importance: (1) Large area supports diverse ecosystems, resources, and agricultural zones. (2) Long coastline enables maritime trade and fishing. (3) Shares boundaries with 7 countries — strategic for trade and diplomacy. (4) Continental shelf provides mineral and petroleum resources. India's size enables it to be a regional power and a major economy."
      },
      {
        question: "Explain India's location and its role in establishing cultural and trade relations with neighboring countries.",
        marks: 5,
        answer: "India is located in South Asia, surrounded by the Indian Ocean, Arabian Sea, and Bay of Bengal. It shares land boundaries with Pakistan, Afghanistan, China, Nepal, Bhutan, Bangladesh, and Myanmar. Cultural Relations: (1) Buddhism spread from India to Sri Lanka, Southeast Asia, Tibet, and China. (2) Sanskrit and Indian scripts influenced languages of Cambodia, Thailand, and Indonesia. (3) Indian spices, textiles, and art spread westward to Arabia and Europe. Trade Relations: (1) Ancient Silk Route — India traded with China and Central Asia. (2) Indian Ocean Trade — India was the center of maritime trade between East and West. (3) Spice trade — Indian spices drove European exploration and colonization. (4) Modern trade — India's location makes it strategic for Indian Ocean trade routes connecting Asia, Africa, and Europe. India's location has made it a 'crossroads of civilizations' throughout history."
      }
    ]
  },
  {
    chapterId: "ss-8",
    subjectId: "social-science",
    chapterNumber: 8,
    chapterTitle: "Physical Features of India",
    questions: [
      {
        question: "What are the Western and Eastern Ghats? State one difference.",
        marks: 2,
        answer: "The Western and Eastern Ghats are hill ranges on either side of the Deccan Plateau. Western Ghats are continuous, higher (avg 900-1600m), and receive heavy rainfall; Eastern Ghats are discontinuous, lower (avg 600m), and are cut by rivers flowing into the Bay of Bengal."
      },
      {
        question: "Why is the Northern Plain of India very fertile?",
        marks: 2,
        answer: "The Northern Plain is formed by alluvial deposits brought by rivers Indus, Ganga, and Brahmaputra over millions of years. These deposits are very fine and rich in minerals, making the soil extremely fertile. It is the most densely populated and agriculturally productive region of India."
      },
      {
        question: "Describe the major divisions of the Himalayas.",
        marks: 3,
        answer: "The Himalayas are divided into three parallel ranges: (1) Himadri (Greater Himalayas) — Northernmost, highest, continuous range; average height 6,000m; contains Mt. Everest (8,849m). (2) Himachal (Lesser Himalayas) — Middle range; average height 3,700-4,500m; famous ranges: Pir Panjal, Dhaula Dhar, Mahabharat. (3) Shivalik (Outer Himalayas) — Southernmost, lowest range (900-1,100m); composed of unconsolidated sediments."
      },
      {
        question: "How were the Himalayas formed? Describe their importance.",
        marks: 5,
        answer: "Formation: The Himalayas were formed by the collision of the Indian Plate and the Eurasian Plate. The Tethys Sea existed between them; as the plates collided, the sedimentary rocks of this sea were folded and uplifted to form the Himalayas. This process began about 50 million years ago. Importance: (1) Water source — Major rivers like Ganga, Indus, Brahmaputra originate here. (2) Climate — Block cold Central Asian winds; force monsoon clouds to rise and rain. (3) Forests and biodiversity — Rich in flora and fauna. (4) Agriculture — Valleys like Kashmir and Kullu support fruit and crops. (5) Defense barrier — Natural protection for India's northern border. (6) Tourism — Attracts millions of tourists and pilgrims."
      },
      {
        question: "Describe the physiographic divisions of India and the significance of each.",
        marks: 5,
        answer: "India has 6 major physiographic divisions: (1) Himalayan Mountains — Young fold mountains; source of rivers; natural defense; rich biodiversity. (2) Northern Plains — Formed by Indo-Gangetic-Brahmaputra alluvium; most fertile area; densely populated; India's food bowl. (3) Peninsular Plateau — Oldest land mass; rich in minerals (coal, iron, manganese); Deccan Trap basalt; covered with black soil. (4) Indian Desert (Thar) — Western India; very low rainfall; supports camels; has underground water (bawdis). (5) Coastal Plains — Eastern and Western coasts; fishing, trade, and agriculture; rich in beaches and mangroves. (6) Islands — Andaman & Nicobar (Bay of Bengal) and Lakshadweep (Arabian Sea); coral reefs; biodiversity; strategic importance. Together these regions make India a land of great diversity with varied resources and landscapes."
      }
    ]
  },
  {
    chapterId: "ss-9",
    subjectId: "social-science",
    chapterNumber: 9,
    chapterTitle: "Drainage",
    questions: [
      {
        question: "What is a watershed? What is its importance?",
        marks: 2,
        answer: "A watershed (river basin) is the area drained by a river and its tributaries. It is bounded by high grounds (ridges/mountains) that divide one basin from another. Its importance: it determines the catchment area of rainfall, controls river flow, affects agriculture, and helps in water management planning."
      },
      {
        question: "Differentiate between Himalayan and Peninsular rivers.",
        marks: 2,
        answer: "Himalayan rivers (Ganga, Indus) are perennial (flow throughout the year), carry heavy silt, have large basins, and are fed by glaciers and monsoon rain. Peninsular rivers (Mahanadi, Krishna) are seasonal (depend on monsoon), have rocky beds, flow east to the Bay of Bengal or west to the Arabian Sea."
      },
      {
        question: "Why is the Ganga considered the most important river of India?",
        marks: 3,
        answer: "(1) Largest river basin in India, supporting agriculture for millions. (2) Origin to mouth: From Gangotri glacier (Uttarakhand) to Bay of Bengal — 2,525 km. (3) Sacred importance — Hindus consider it a holy river; many ancient cities (Varanasi, Allahabad) are on its banks. (4) Agriculture — River plains are the most fertile in India. (5) Ganga Action Plan — Government programs to clean the river. (6) Major tributaries: Yamuna, Son, Ghaghra, Gandak, Kosi join it."
      },
      {
        question: "What is the significance of rivers in the economic life of India?",
        marks: 5,
        answer: "(1) Irrigation — Rivers irrigate vast areas; the Indo-Gangetic plain is India's granary because of rivers. (2) Drinking water — Rivers are the primary source of fresh water for cities and villages. (3) Hydroelectric power — Dams on rivers generate electricity (Bhakra-Nangal, Hirakud). (4) Navigation — Rivers serve as inland waterways for transport and trade. (5) Fishing — Riverine fisheries support millions of people. (6) Tourism and religion — Pilgrimage centers and tourist spots are along rivers. (7) Industries — Many industries are located near rivers for water supply. However, increasing pollution is threatening river ecosystems and water quality."
      },
      {
        question: "Compare the drainage systems of North India (Himalayan rivers) and South India (Peninsular rivers).",
        marks: 5,
        answer: "Himalayan Rivers: Origin — Himalayan glaciers and high-altitude lakes. Nature — Perennial (flow throughout year). Course — Long courses through plains, slow-flowing. Basins — Very large basins (Ganga: 8,61,404 sq km). Sediment — Carry huge amounts of silt, creating fertile plains. Tidal forests — Form large deltas (Sundarbans). Examples — Indus, Ganga, Brahmaputra. Peninsular Rivers: Origin — Western Ghats or central highlands. Nature — Seasonal (depend on monsoon). Course — Shorter, faster-flowing over rocky terrain. Basins — Smaller basins. Sediment — Less sediment due to rocky terrain. Drainage pattern — Most flow east (Bay of Bengal); some west (Arabian Sea). Examples — Mahanadi, Godavari, Krishna, Kaveri, Narmada, Tapi. Both river systems are critical for India's water supply, agriculture, and economy. Their proper management is essential for sustainable development."
      }
    ]
  },
  {
    chapterId: "ss-10",
    subjectId: "social-science",
    chapterNumber: 10,
    chapterTitle: "Climate",
    questions: [
      {
        question: "What is monsoon? When does it arrive in India?",
        marks: 2,
        answer: "Monsoon refers to the seasonal reversal of winds that brings heavy rainfall to South Asia. The Southwest Monsoon arrives in Kerala around June 1st and advances northward, covering the entire country by mid-July. It withdraws from the northwest by September-October, returning as the Northeast Monsoon."
      },
      {
        question: "What is the 'burst of monsoon'? Why is it important?",
        marks: 2,
        answer: "The 'burst of monsoon' is the sudden onset of monsoon rains with thunder and lightning after a period of dry heat. It is important because it signals the arrival of the main rainy season, which is crucial for Indian agriculture (kharif crops), replenishment of rivers and groundwater, and relief from extreme summer heat."
      },
      {
        question: "Explain the factors that influence the climate of India.",
        marks: 3,
        answer: "(1) Latitude — Tropic of Cancer divides India; north has continental climate, south tropical. (2) Altitude — Himalayas block cold Arctic winds; higher areas are cooler (lapse rate). (3) Pressure and winds — Southwest monsoon winds bring rain from the Indian Ocean. (4) Distance from sea — Coastal areas have moderate climate; interior is extreme. (5) Ocean currents — Warm currents in the Bay of Bengal and Arabian Sea increase moisture. (6) Relief features — Western Ghats cause orographic rainfall on western side."
      },
      {
        question: "Describe the Indian monsoon and its importance for India.",
        marks: 5,
        answer: "The Indian Monsoon is caused by differential heating of land and sea. Summer: Land heats faster, creating low pressure that draws in moisture-laden winds from the Indian Ocean (SW Monsoon). Winter: Land cools faster, creating high pressure that sends winds towards the sea (NE Monsoon). Importance: (1) About 80% of India's annual rainfall comes from the SW Monsoon. (2) Kharif crops (rice, cotton, jowar) depend entirely on monsoon rains. (3) Rivers are recharged, maintaining year-round flow. (4) Groundwater is replenished for drinking and irrigation. (5) It shapes India's culture — festivals, agriculture calendar, and lifestyle revolve around monsoon. A good monsoon means a good harvest and economic prosperity."
      },
      {
        question: "What are the different seasons in India? Describe the characteristics of each.",
        marks: 5,
        answer: "India has four main seasons: (1) Winter (December-February) — Temperature drops in north India; cool and dry; Northeast Monsoon brings rain to Tamil Nadu; snowfall in Himalayas; pleasant weather in south India. (2) Hot Weather Season/Summer (March-May) — Very high temperatures in northwest India (upto 50°C in Rajasthan); 'Loo' (hot dry wind) blows; dust storms; mango showers in Kerala and Karnataka. (3) Advancing Monsoon/Rainy Season (June-September) — SW Monsoon arrives; heavy rainfall; flooding in many areas; kharif crop sowing; temperatures moderate. (4) Retreating Monsoon (October-November) — SW Monsoon withdraws from northwest; NE Monsoon brings rain to Coromandel coast (Tamil Nadu, AP); cyclones in Bay of Bengal. India's diverse climate supports great agricultural and ecological diversity."
      }
    ]
  },
  {
    chapterId: "ss-11",
    subjectId: "social-science",
    chapterNumber: 11,
    chapterTitle: "Natural Vegetation and Wildlife",
    questions: [
      {
        question: "What is a biosphere reserve? Name any two in India.",
        marks: 2,
        answer: "A biosphere reserve is a protected area where plants, animals, and ecosystems are conserved in their natural habitat. It includes core, buffer, and transition zones. Two examples in India: Nilgiri Biosphere Reserve (Tamil Nadu, Kerala, Karnataka) and Sundarbans Biosphere Reserve (West Bengal)."
      },
      {
        question: "What is the difference between flora and fauna?",
        marks: 2,
        answer: "Flora refers to all plant species (trees, shrubs, grasses) in a region. Fauna refers to all animal species (mammals, birds, reptiles, fish) in a region. India has about 47,000 plant species (flora) and over 89,000 animal species (fauna), making it one of the world's most biodiverse countries."
      },
      {
        question: "Describe the types of natural vegetation found in India.",
        marks: 3,
        answer: "(1) Tropical Rainforests — Found in Western Ghats, northeast; heavy rainfall (>200cm); dense, evergreen trees like rosewood, ebony, mahogany. (2) Tropical Deciduous (Monsoon) Forests — Most widespread; moderate rainfall (70-200cm); trees shed leaves in dry season; teak, sal, shisham. (3) Thorn Forests — Found in Rajasthan, Gujarat, Madhya Pradesh; scanty rainfall (<70cm); thorny plants, cacti, khejri. (4) Montane Forests — Found in Himalayas; altitude determines type — deciduous at lower altitudes, coniferous (chir, pine, deodar) at higher levels. (5) Mangrove Forests — Found in coastal deltas (Sundarbans); salt-tolerant trees; protect coasts from storms."
      },
      {
        question: "What are the threats to India's wildlife? What steps have been taken to protect it?",
        marks: 5,
        answer: "Threats: (1) Habitat destruction — Deforestation for agriculture, mining, and urbanization. (2) Poaching — Illegal hunting for ivory, skin, and traditional medicine. (3) Human-wildlife conflict — As forests shrink, animals enter villages. (4) Pollution — Water and air pollution affect aquatic and forest species. (5) Invasive species — Non-native plants and animals displace native ones. Conservation Steps: (1) Wildlife Protection Act, 1972 — Bans hunting of endangered species. (2) Project Tiger (1973) — Increased tiger population from 1,827 to over 3,000. (3) Project Elephant (1992) — Protects elephant corridors. (4) National Parks and Sanctuaries — Over 500 protected areas covering 5% of India's land. (5) Biosphere Reserves — 18 biosphere reserves in India. (6) CITES — India is a signatory to international wildlife trade treaty."
      },
      {
        question: "Explain the relationship between climate and natural vegetation in India.",
        marks: 5,
        answer: "Climate is the most important factor determining natural vegetation. Temperature and Rainfall are the two key climatic elements: (1) Areas with heavy rainfall (>200cm) like Western Ghats and Northeast India support tropical evergreen rainforests — dense, multi-layered with tall trees as they receive sunlight, warmth, and moisture year-round. (2) Areas with moderate rainfall (100-200cm) like Central India support tropical deciduous forests — trees shed leaves in summer to conserve water. (3) Areas with low rainfall (70-100cm) like Deccan Plateau support dry deciduous forests with widely-spaced trees. (4) Very low rainfall areas (<70cm) like Rajasthan support thorn forests adapted to drought — small leaves, thorns, deep roots. (5) Cold mountain climates of Himalayas support altitude-based vegetation — from deciduous at foothills to alpine meadows near snowline. Thus, India's diverse climate creates diverse vegetation zones, supporting extraordinary biodiversity."
      }
    ]
  },
  {
    chapterId: "ss-12",
    subjectId: "social-science",
    chapterNumber: 12,
    chapterTitle: "Population",
    questions: [
      {
        question: "What is the difference between Census and Sample Survey?",
        marks: 2,
        answer: "Census is a complete count of the entire population conducted every 10 years by the government (India conducts it since 1881). Sample Survey collects data from a selected representative group to estimate characteristics of the larger population. Census gives more accurate data; sample surveys are quicker and cheaper."
      },
      {
        question: "What is the sex ratio? What is India's sex ratio?",
        marks: 2,
        answer: "Sex ratio is the number of females per 1,000 males in a population. According to the 2011 Census, India's sex ratio was 943 females per 1,000 males. A low sex ratio indicates gender inequality, female foeticide, and social discrimination against women."
      },
      {
        question: "What are the three main factors that affect the size and distribution of population?",
        marks: 3,
        answer: "(1) Geographical factors — Areas with fertile soil, moderate climate, flat terrain, and water availability (like Indo-Gangetic Plain) are densely populated. Areas like deserts, high mountains, and swamps are sparsely populated. (2) Social and cultural factors — Areas with urban amenities, industrial development, and better services attract population. (3) Historical factors — Areas with long history of human settlements (like river valleys) have denser populations."
      },
      {
        question: "Explain the population distribution in India. Why is it uneven?",
        marks: 5,
        answer: "India's population (1.21 billion in 2011) is unevenly distributed. Densely populated areas: Northern plains (UP, Bihar, West Bengal) — fertile soil, flat land, water. Northeast coastal regions — trade and industry. Sparsely populated areas: Rajasthan, Himachal Pradesh, Uttarakhand, Northeast hill states — desert, mountains, forests, difficult terrain. Reasons for uneven distribution: (1) Physical features — Plains are densely settled, mountains and deserts are not. (2) Climate — Extreme climates are avoided. (3) Agricultural potential — Fertile areas attract more people. (4) Industrialization — Cities and industrial areas attract migrants. (5) History — Ancient cities on rivers have grown into large urban centers."
      },
      {
        question: "Describe the population growth trends in India. What are its causes and consequences?",
        marks: 5,
        answer: "Population Growth Trends: India's population grew slowly before 1921 (death rate was high). After 1921 (called the 'Great Divide'), population grew rapidly. India's population reached 1.21 billion in 2011. Annual growth rate is about 1.64%. Causes of high growth: (1) Decline in death rates due to better healthcare. (2) High birth rates due to illiteracy, poverty, early marriage, and son preference. (3) Improved nutrition and disease control. Consequences: (1) Pressure on resources — food, water, land, energy. (2) Unemployment and poverty. (3) Stress on schools, hospitals, and transport. (4) Environmental degradation. (5) Urbanization and slum growth. Solutions: Population education, women's empowerment, family planning programs, and improving female literacy are key to managing India's population growth."
      }
    ]
  },
  {
    chapterId: "ss-13",
    subjectId: "social-science",
    chapterNumber: 13,
    chapterTitle: "Democracy in the Contemporary World",
    questions: [
      {
        question: "What is the difference between a democratic and a non-democratic government?",
        marks: 2,
        answer: "In a democratic government, leaders are elected by the people, there are free and fair elections, citizens have fundamental rights, and there is an independent judiciary. In a non-democratic government, leaders are not elected, elections are not free, rights are restricted, and power is concentrated in one person or party."
      },
      {
        question: "Give two examples of democratic and non-democratic countries.",
        marks: 2,
        answer: "Democratic countries: India, USA, UK, South Africa. In these countries, leaders are elected through free elections and citizens enjoy fundamental rights. Non-democratic countries: China (one-party rule), Saudi Arabia (monarchy), North Korea (dictatorship). In these countries, leaders hold power without people's consent and political opposition is suppressed."
      },
      {
        question: "What are the challenges to democracy in the contemporary world?",
        marks: 3,
        answer: "(1) Money power — Rich candidates and parties have unfair advantage in elections. (2) Muscle power — Criminal elements intimidate voters. (3) Caste and religion — Voters are mobilized along caste/religious lines instead of issues. (4) Media manipulation — Paid news and fake news distort public opinion. (5) Low voter awareness — Many voters are illiterate or unaware of their rights. (6) Corruption — Elected representatives may misuse power. (7) Inequality — Economic inequality can lead to political inequality."
      },
      {
        question: "How has democracy spread across the world in the 20th century?",
        marks: 5,
        answer: "Democracy spread globally through several waves: (1) After WWI — Many European monarchies fell and new democracies emerged (Germany, Austria). (2) Decolonization (1940s-60s) — Asian and African countries gained independence and adopted democratic constitutions (India, 1950). (3) End of dictatorships — Military regimes in Latin America and Asia transitioned to democracy (Argentina, Philippines, South Korea). (4) Collapse of USSR (1991) — Eastern European countries (Poland, Czech Republic) became democracies. (5) Arab Spring (2011) — Uprisings in Tunisia, Egypt sought democratic change. However, the spread has been uneven — some countries have reversed to authoritarianism. The number of democracies increased from about 20 in 1945 to over 100 today."
      },
      {
        question: "Explain the role of international organizations in promoting democracy.",
        marks: 5,
        answer: "International organizations play a key role in promoting democracy: (1) United Nations — Promotes human rights, democratic governance, and free elections. UN Democracy Fund supports democratic projects worldwide. (2) Commonwealth — Suspends member countries with military coups (Fiji, Pakistan) to pressure for democratic restoration. (3) European Union — Requires democratic governance as a condition for membership. (4) International Election Observers — Monitor elections in developing countries to ensure fairness. (5) NGOs — Organizations like Amnesty International and Human Rights Watch expose violations and advocate for democratic rights. (6) Sanctions — International community can impose sanctions on authoritarian regimes to pressure for democratic reforms. Despite these efforts, promoting democracy remains challenging due to sovereignty concerns and varying cultural contexts."
      }
    ]
  },
  {
    chapterId: "ss-14",
    subjectId: "social-science",
    chapterNumber: 14,
    chapterTitle: "What is Democracy? Why Democracy?",
    questions: [
      {
        question: "What is democracy? Give its basic features.",
        marks: 2,
        answer: "Democracy is a form of government where rulers are elected by the people. Basic features: (1) Rule of the majority. (2) Free and fair elections. (3) Fundamental rights and freedoms for citizens. (4) Independent judiciary. (5) Rule of law — everyone is equal before the law."
      },
      {
        question: "What is the difference between democracy and dictatorship?",
        marks: 2,
        answer: "In democracy, rulers are elected by the people, there is freedom of expression, and multiple parties compete. In dictatorship, one person/party rules without elections, political opposition is suppressed, and citizens have no rights. Democracy is accountable to citizens; dictatorship is not."
      },
      {
        question: "What are the arguments in favor of democracy?",
        marks: 3,
        answer: "(1) Accountability — Democratic governments are answerable to citizens through elections. (2) Better decisions — Discussion and debate lead to better policies. (3) Peaceful change — Power transfers without violence through elections. (4) Respects human dignity — Treats all citizens as equal. (5) Corrects mistakes — A bad government can be voted out. (6) Considers all groups — Minorities and weaker sections have representation."
      },
      {
        question: "How does a democratic government differ from non-democratic governments? Give examples.",
        marks: 5,
        answer: "Democratic Government: Leaders elected by people; free elections; citizens have rights; multiple parties; independent judiciary; government accountable to parliament. Example — India, USA, South Africa. Non-Democratic Government: Leaders not elected; no free elections; rights restricted; single party; judiciary controlled; government not accountable. Example — China (one-party), Saudi Arabia (monarchy), Myanmar under military rule. Key difference: In democracy, the PEOPLE have the power and lend it to elected leaders. In non-democracy, the leaders hold power without people's consent. Democracy promotes dignity, freedom, and equality; non-democracy promotes obedience and control."
      },
      {
        question: "Is democracy better than other forms of government? Justify your answer.",
        marks: 5,
        answer: "Yes, democracy is generally considered superior to other forms of government for several reasons: (1) Equality and dignity — Democracy treats all citizens as equal regardless of caste, religion, gender, or class. (2) Freedom — Citizens enjoy fundamental rights like freedom of speech, religion, and assembly. (3) Peaceful power transfer — Unlike dictatorship or monarchy, democratic transitions are peaceful. (4) Error correction — Elections allow citizens to remove bad governments. (5) Economic benefits — Research shows democracies tend to have better economic development records and fewer famines. (6) Popular participation — Democracy encourages civic engagement. However, democracy has limitations: it can be slow in decision-making; politicians may be corrupt; money and muscle power can distort elections; majorities can oppress minorities. Despite these shortcomings, democracy remains the best available system. As Winston Churchill said, 'Democracy is the worst form of government, except for all others.'"
      }
    ]
  },
  {
    chapterId: "ss-15",
    subjectId: "social-science",
    chapterNumber: 15,
    chapterTitle: "Constitutional Design",
    questions: [
      {
        question: "What is a Constitution? Why do nations need one?",
        marks: 2,
        answer: "A Constitution is the supreme law of a country that defines the fundamental principles of the state, the structure of government, the rights of citizens, and the limits of government power. Nations need constitutions to establish rule of law, prevent misuse of power, protect rights, and ensure stability."
      },
      {
        question: "Who was B.R. Ambedkar? What was his role in the Indian Constitution?",
        marks: 2,
        answer: "Dr. B.R. Ambedkar was a great jurist, economist, and social reformer. He was the Chairman of the Drafting Committee of the Indian Constitution and is called the 'Father of the Indian Constitution.' He fought for the rights of Dalits and ensured that the Constitution guaranteed equality for all citizens."
      },
      {
        question: "What were the ideals that inspired the makers of the Indian Constitution?",
        marks: 3,
        answer: "(1) French Revolution ideals — Liberty, Equality, Fraternity. (2) Indian independence movement — Nehru's 'Tryst with Destiny' speech emphasized democratic values. (3) International experience — USA's Bill of Rights, Irish Constitution, British Parliament. (4) Anti-colonialism — The Constitution rejected all forms of discrimination practiced under British rule. (5) Social justice — Ambedkar ensured provisions for Dalits, tribals, and minorities."
      },
      {
        question: "Describe the process by which the Indian Constitution was framed.",
        marks: 5,
        answer: "The Constituent Assembly was formed in December 1946 under the Cabinet Mission Plan. Key facts: Total members: 299 (after partition). President: Dr. Rajendra Prasad. Drafting Committee Chair: Dr. B.R. Ambedkar. Discussions: 11 sessions over nearly 3 years. Time taken: 2 years, 11 months, 18 days. Total sessions: 165 days of detailed debate. It drew from world constitutions (USA, Ireland, UK, France, Canada, Australia). The Constitution was adopted on November 26, 1949 and came into force on January 26, 1950 (Republic Day). The preamble was based on the Objectives Resolution moved by Nehru in December 1946."
      },
      {
        question: "Explain the key features of the Indian Constitution.",
        marks: 5,
        answer: "The Indian Constitution has these key features: (1) Longest written constitution — 395 Articles, 22 Parts, 8 Schedules (originally); now extensively amended. (2) Federal with Unitary bias — Power divided between Centre and States but Centre is stronger. (3) Parliamentary system — President is constitutional head; PM leads the Cabinet. (4) Fundamental Rights — 6 fundamental rights guarantee freedom, equality, and protection from exploitation. (5) Directive Principles — Non-justiciable guidelines for the government to ensure social and economic justice. (6) Fundamental Duties — 11 duties of citizens. (7) Secularism — State has no official religion; all religions treated equally. (8) Universal Adult Franchise — Every citizen above 18 can vote. (9) Independent Judiciary — Supreme Court and High Courts protect rights. (10) Amendment procedure — Can be amended to adapt to changing needs. These features make India a Sovereign, Socialist, Secular, Democratic Republic."
      }
    ]
  },
  {
    chapterId: "ss-16",
    subjectId: "social-science",
    chapterNumber: 16,
    chapterTitle: "Electoral Politics",
    questions: [
      {
        question: "What is universal adult franchise? What is its significance?",
        marks: 2,
        answer: "Universal Adult Franchise means every citizen above the age of 18 has the right to vote, regardless of caste, religion, gender, or wealth. Its significance: It makes democracy truly representative; gives equal political power to all citizens; ensures governments are accountable to the entire population."
      },
      {
        question: "What is the role of the Election Commission of India?",
        marks: 2,
        answer: "The Election Commission of India (ECI) is a constitutional body that: (1) conducts free and fair elections to Parliament and State Legislatures, (2) enforces the Model Code of Conduct during elections, (3) recognizes political parties and allots election symbols, and (4) resolves disputes related to elections. It is independent of the government."
      },
      {
        question: "What are the features of elections in a democracy?",
        marks: 3,
        answer: "(1) Universal suffrage — Every adult citizen can vote. (2) Free and fair — Voters vote without fear; results reflect their choices. (3) Regular elections — Elections held at fixed intervals (5 years in India). (4) Multiple parties — Various parties compete; voters have genuine choice. (5) Independent Election Commission — Ensures impartiality. (6) Secret ballot — Voters cast votes privately, protecting them from pressure. (7) Rule-based — Election law prevents corruption and misuse of power."
      },
      {
        question: "Explain the electoral system of India.",
        marks: 5,
        answer: "India follows the 'First Past the Post' (FPTP) electoral system. Process: (1) India is divided into 543 Lok Sabha constituencies. (2) Each constituency elects one MP. (3) The candidate with the most votes wins (even if less than 50%). (4) Voters choose a candidate; the party with the majority of seats forms the government. Advantages: Simple to understand; produces stable governments; strong local representation. Disadvantages: Parties can win with less than 50% votes; small parties can be underrepresented. India's elections are the world's largest democratic exercise — over 90 crore voters, 10 lakh polling stations."
      },
      {
        question: "What are the challenges to free and fair elections in India? How can they be overcome?",
        marks: 5,
        answer: "Challenges: (1) Money power — Candidates spend crores; rich candidates have unfair advantage. (2) Muscle power — Criminals and parties with criminal links intimidate voters. (3) Voter awareness — Many voters are illiterate or unaware of their rights. (4) Paid news — Media can be bought to favor candidates. (5) Caste and religion — Voters are mobilized along caste/religious lines instead of issues. (6) Election violence — Especially in some states. (7) Electronic Voting Machine (EVM) controversies. Solutions: (1) Stricter campaign finance limits and transparency. (2) Criminalisation of politics — Bar candidates with serious criminal charges. (3) Voter education programs (SVEEP by ECI). (4) Stronger press freedom and fake news regulation. (5) Faster courts for election disputes. (6) Political party reforms for internal democracy. Despite challenges, India's elections are generally considered free and fair — a remarkable achievement for such a large and diverse democracy."
      }
    ]
  },
  {
    chapterId: "ss-17",
    subjectId: "social-science",
    chapterNumber: 17,
    chapterTitle: "Working of Institutions",
    questions: [
      {
        question: "What is the difference between the President and the Prime Minister of India?",
        marks: 2,
        answer: "The President is the constitutional head of state, elected by an electoral college. The Prime Minister is the real head of government, leader of the majority party in Lok Sabha. The President acts on the advice of the Prime Minister and Council of Ministers. All major executive powers are exercised by the PM."
      },
      {
        question: "What is a 'Cabinet'? How is it different from the Council of Ministers?",
        marks: 2,
        answer: "Cabinet is a smaller, more powerful body of senior ministers who take major policy decisions and meet regularly. The Council of Ministers is the full body of ministers (Cabinet Ministers + Ministers of State + Deputy Ministers). The Cabinet is the inner circle; the Council of Ministers is the constitutional body."
      },
      {
        question: "Explain the three organs of the Indian government.",
        marks: 3,
        answer: "(1) Legislature (Parliament) — Consists of Lok Sabha and Rajya Sabha; makes laws and controls government finances. (2) Executive — President, PM, and Council of Ministers; implements laws and runs the government. (3) Judiciary — Supreme Court, High Courts, and lower courts; interprets laws and protects rights. They are based on the principle of 'Separation of Powers' — each organ has distinct functions to prevent abuse of power."
      },
      {
        question: "Describe the structure and powers of the Indian Parliament.",
        marks: 5,
        answer: "Indian Parliament has two houses: Lok Sabha (Lower House): 543 elected + 2 nominated members; term 5 years; directly elected; can pass money bills; PM and Cabinet are responsible to it. Rajya Sabha (Upper House): 245 members; 12 nominated by President; rest elected by State Assemblies; permanent house (1/3 retire every 2 years). Powers: (1) Legislative power — Makes all central laws. (2) Financial power — Approves the annual budget. (3) Control over executive — Questions, censure motions, no-confidence motions. (4) Constitutional amendments — Can amend the Constitution. (5) Electoral powers — Elects President, Vice President, and Speaker."
      },
      {
        question: "How does the Indian judiciary maintain its independence? Why is judicial independence important?",
        marks: 5,
        answer: "Independence of Judiciary means courts function without interference from the government. How it is maintained: (1) Appointment — Supreme Court judges are appointed by the President in consultation with the Chief Justice; not by government ministers. (2) Security of tenure — Judges cannot be removed easily; only through impeachment by Parliament. (3) Fixed salaries — Judges' salaries are charged from Consolidated Fund of India (not subject to Parliamentary vote). (4) Contempt powers — Courts can punish those who interfere with judicial proceedings. (5) Collegium system — Judges recommend their own appointments, reducing executive control. Importance: (1) Protects fundamental rights of citizens. (2) Checks unconstitutional actions of the government. (3) Ensures rule of law — no one is above the law. (4) Provides justice to the weak against the powerful. (5) Settles disputes between states and the Centre. Judicial independence is the cornerstone of Indian democracy."
      }
    ]
  },
  {
    chapterId: "ss-18",
    subjectId: "social-science",
    chapterNumber: 18,
    chapterTitle: "Democratic Rights",
    questions: [
      {
        question: "What are Fundamental Rights? Name the six Fundamental Rights.",
        marks: 2,
        answer: "Fundamental Rights are basic rights guaranteed by the Indian Constitution that cannot be taken away by any ordinary law. The six Fundamental Rights are: (1) Right to Equality, (2) Right to Freedom, (3) Right against Exploitation, (4) Right to Freedom of Religion, (5) Cultural and Educational Rights, (6) Right to Constitutional Remedies."
      },
      {
        question: "What is a 'writ'? Name any two writs issued by the Supreme Court.",
        marks: 2,
        answer: "A writ is a legal order issued by the Supreme Court or High Court to protect fundamental rights. Two important writs: (1) Habeas Corpus — Orders the release of a person illegally detained. (2) Mandamus — Orders a public official or government body to perform a legal duty they have failed to do."
      },
      {
        question: "Why is the Right to Constitutional Remedies called the 'Heart and Soul' of the Indian Constitution?",
        marks: 3,
        answer: "Dr. Ambedkar called Article 32 (Right to Constitutional Remedies) the 'Heart and Soul' because: (1) Without enforcement, rights are merely paper rights — this article gives citizens the power to enforce their rights. (2) Citizens can directly approach the Supreme Court if any fundamental right is violated. (3) The Supreme Court can issue writs (Habeas Corpus, Mandamus, etc.) to restore rights. (4) It makes all other fundamental rights real and meaningful. (5) It is a guarantee that the state cannot arbitrarily violate citizens' rights."
      },
      {
        question: "Explain the 'Right to Freedom' (Article 19-22) and its importance.",
        marks: 5,
        answer: "The Right to Freedom includes: Article 19 — Six freedoms: (1) Freedom of speech and expression; (2) To assemble peacefully; (3) To form associations; (4) To move freely throughout India; (5) To reside anywhere; (6) To practice any profession. Article 20 — Protection against arbitrary conviction; cannot be punished for the same offense twice. Article 21 — Right to life and personal liberty; no person shall be deprived of life except by law. Article 21A — Right to free and compulsory education (6-14 years) — added by 86th Amendment. Article 22 — Protection against arbitrary arrest and detention. Importance: These rights form the foundation of individual liberty, protect citizens from the state's arbitrary actions, and are essential for human dignity and democracy."
      },
      {
        question: "Describe any three fundamental rights and explain how they protect citizens in their daily lives.",
        marks: 5,
        answer: "(1) Right to Equality (Articles 14-18): (a) All citizens are equal before law — a poor person can sue the government. (b) Prohibition of discrimination on basis of religion, race, caste, sex, place of birth — prevents caste discrimination in public places. (c) Equality of opportunity in government employment — ensures fair selection in government jobs. Daily impact: Dalits can enter temples; women can apply for any government job; no one is 'above the law.' (2) Right to Freedom (Article 19-22): Freedom of speech allows citizens to criticize the government. Freedom of movement allows anyone to live anywhere in India. Right to life (Article 21) has been widely interpreted by courts to include right to livelihood, education, health, and environment. Daily impact: Journalists can report freely; courts have protected the homeless under Article 21. (3) Right against Exploitation (Articles 23-24): Prohibits forced labor, bonded labor, and trafficking of persons. Prohibits employment of children below 14 in factories or hazardous work. Daily impact: Protects bonded laborers, child laborers, and trafficking victims — courts have used these articles to free millions of bonded laborers."
      }
    ]
  },
  {
    chapterId: "ss-19",
    subjectId: "social-science",
    chapterNumber: 19,
    chapterTitle: "The Story of Village Palampur",
    questions: [
      {
        question: "What is the role of 'human capital' in production?",
        marks: 2,
        answer: "Human capital refers to the skills, education, and health of the workforce. It is important because educated and skilled workers are more productive, can operate modern machinery, and innovate. Investment in human capital through education and healthcare increases the productive capacity of an economy."
      },
      {
        question: "What is the main non-farm activity in Palampur? Describe it.",
        marks: 2,
        answer: "The main non-farm activities in Palampur are: (1) Dairy — Families sell milk to traders who come from nearby towns daily. (2) Small-scale manufacturing — Spinning, weaving, and making cloth. (3) Transport — Bullock cart, tonga, and truck operators. (4) Shopkeeping — Small shops selling necessities. These provide employment to landless laborers and small farmers."
      },
      {
        question: "How is land distributed in village Palampur? What are its effects?",
        marks: 3,
        answer: "In Palampur, land is unequally distributed: 240 families own all the cultivated land. 150 upper-caste families own 2/3 of the total land — large plots of 3+ hectares. Medium farmers (about 240 families) own 1-2 hectares each. Small farmers (about 480 families) own less than 2 hectares. Landless families (about 150) are mostly Dalit. Effects: (1) Small farmers produce mainly for subsistence. (2) Landless laborers must work on large farmers' fields for low wages. (3) Inequality in incomes and opportunities. (4) Large farmers can invest in modern inputs and earn more."
      },
      {
        question: "Explain how farming is organized in Palampur.",
        marks: 5,
        answer: "Farming in Palampur involves: (1) Land — 3/4 of working people depend on farming; 200 hectares of cultivated land with irrigation via tubewells (75% coverage). (2) Multiple Cropping — Growing 2-3 crops a year: winter crop (wheat), summer crop (jowar/bajra) and sugarcane. (3) Modern Farming Methods — Began with HYV (High Yielding Variety) seeds in the 1960s (Green Revolution). Use of fertilizers, pesticides, and irrigation. (4) Capital — Rich farmers own all major equipment; poor farmers borrow at high interest. (5) Labor — Small/marginal farmers work their own land; big farmers hire laborers at ₹35-40/day. (6) Market surplus — Large farmers sell surplus in the market; small farmers produce mainly for consumption."
      },
      {
        question: "What are the different factors of production? Explain with reference to Palampur.",
        marks: 5,
        answer: "Factors of Production are: (1) Land — The most critical resource in Palampur; 200 hectares cultivated; unequally distributed among families. Landlords rent out land to small farmers. (2) Labor — Abundant in Palampur; large number of landless laborers work on others' fields. Wages are low due to abundant supply (₹35-40/day). (3) Physical Capital — Two types: (a) Fixed capital — tools, tractors, pump sets, buildings (b) Working capital — seeds, fertilizers, pesticides, raw materials. Rich farmers own the capital; poor farmers borrow. (4) Human Capital — Knowledge, skills, and education of workers. Educated workers can understand modern farming techniques and manage resources better. (5) Technology — HYV seeds and irrigation have transformed production; farmers now grow 3 crops instead of 1. In Palampur, unequal distribution of land and capital creates inequality. Large farmers earn profits and invest more; small and landless farmers remain poor and dependent."
      }
    ]
  },
  {
    chapterId: "ss-20",
    subjectId: "social-science",
    chapterNumber: 20,
    chapterTitle: "People as Resource",
    questions: [
      {
        question: "What is meant by 'human resource development'?",
        marks: 2,
        answer: "Human resource development means improving the productive capacity of people through education, training, health, and skill development. It is the process of turning people into an economic asset by giving them knowledge, skills, and good health. A healthy, educated, and skilled population contributes more to economic growth."
      },
      {
        question: "What is the difference between economic and non-economic activities?",
        marks: 2,
        answer: "Economic activities are those that involve the production of goods and services in exchange for payment — they contribute to national income (farming, manufacturing, banking). Non-economic activities are done voluntarily without any financial motive — like household work, caring for family, charity, and social work."
      },
      {
        question: "How does education contribute to human resource development?",
        marks: 3,
        answer: "(1) Increases productivity — Educated workers are more skilled and produce more. (2) Enables better jobs — Education opens higher-paying employment opportunities. (3) Reduces poverty — Education is the key pathway out of poverty. (4) Improves health — Educated people make better health decisions. (5) Social benefits — Education promotes social equality, reduces crime, and strengthens democracy. India's investment in education (IITs, IIMs, schools) has created a large knowledge workforce that drives economic growth."
      },
      {
        question: "Explain the role of health in human capital formation.",
        marks: 5,
        answer: "Health is one of the most important components of human capital because: (1) A healthy person can work longer hours and more productively. (2) Illness causes absenteeism and reduces productivity. (3) Good nutrition in childhood improves cognitive development and learning. (4) Healthy workers live longer, contributing more years to the economy. (5) India's improved life expectancy (from 32 years at independence to 69 years today) has increased workforce contribution. India's shortcomings: India has low doctor-to-patient ratio; public health expenditure is low; many people still lack access to basic healthcare. Investment in health (like AIIMS, NRHM, Swachh Bharat) directly improves human capital quality."
      },
      {
        question: "Is the population of India an asset or a liability? Justify your answer.",
        marks: 5,
        answer: "Population as an Asset: (1) India has a young population — average age ~28 years; large workforce for decades ahead. (2) Large consumer market — drives economic growth through domestic demand. (3) Remittances — Indian diaspora sends billions of dollars home. (4) Skilled workforce — IIT/IIM graduates drive India's IT and management sectors globally. (5) India's 'demographic dividend' — proportion of working-age people is high, creating growth opportunity. Population as a Liability: (1) Pressure on resources — food, water, land, energy. (2) Unemployment — jobs cannot grow as fast as population. (3) Poor quality human capital — many lack education and skills. (4) Poverty — large poor population requires huge social spending. Conclusion: Population is an asset ONLY if people are educated, skilled, and healthy. Without investment in human capital, large population becomes a burden. India must convert its demographic dividend into economic growth through education, healthcare, and skill development."
      }
    ]
  },
  {
    chapterId: "ss-21",
    subjectId: "social-science",
    chapterNumber: 21,
    chapterTitle: "Poverty as a Challenge",
    questions: [
      {
        question: "What is the poverty line? How is it measured in India?",
        marks: 2,
        answer: "The poverty line is the minimum level of income/consumption needed to meet basic needs. In India, it is measured by the calorie requirement method: urban areas — 2,100 calories/day; rural areas — 2,400 calories/day. Those who cannot afford this minimum consumption are classified as 'Below Poverty Line (BPL).' The Tendulkar Committee (2009) used a monthly expenditure basis."
      },
      {
        question: "Name any two major poverty alleviation programs of the Indian government.",
        marks: 2,
        answer: "(1) MGNREGS (Mahatma Gandhi National Rural Employment Guarantee Scheme) — Guarantees 100 days of paid work per year to rural households. (2) PM Jan Dhan Yojana — Provides financial inclusion through bank accounts. Others: PM Awas Yojana (housing), Mid-Day Meal Scheme (school nutrition), PDS (subsidized food)."
      },
      {
        question: "What are the major causes of poverty in India?",
        marks: 3,
        answer: "(1) Historical factors — Colonial rule extracted resources and destroyed Indian industry. (2) Low agricultural productivity — Small landholdings, lack of irrigation, and outdated farming. (3) Unequal distribution of income and assets — Wealth is concentrated among few. (4) Unemployment — Lack of jobs keeps incomes low. (5) Illiteracy — Poor education reduces earning capacity. (6) High population growth — Creates pressure on resources. (7) Social discrimination — Caste system excluded Dalits and tribals from economic opportunities."
      },
      {
        question: "How is poverty measured in India? What are its limitations?",
        marks: 5,
        answer: "India measures poverty through: (1) Poverty Line — Based on minimum calorie intake (2,100 kcal urban, 2,400 kcal rural). Monthly expenditure limit set accordingly. (2) Census data — Used to identify BPL households. (3) NSS surveys — National Sample Survey collects household consumption data. Limitations: (1) The calorie-based method ignores non-food essentials (healthcare, education, clothing). (2) Different committees (Tendulkar, Rangarajan) give different poverty estimates — creates confusion. (3) BPL lists are often inaccurate — genuine poor may be excluded, non-poor included. (4) Poverty is multi-dimensional (social, educational, health poverty) but measured only by income/consumption. (5) Urban poverty is underestimated due to high informal sector wages that mask real deprivation."
      },
      {
        question: "Describe the major poverty alleviation programs of the Indian government and evaluate their effectiveness.",
        marks: 5,
        answer: "Major Programs: (1) MGNREGS (2005) — 100 days guaranteed wage employment; has reduced rural unemployment and created rural assets (roads, ponds). Employed 5-7 crore households annually. (2) PMGSY (Pradhan Mantri Gram Sadak Yojana) — All-weather roads to villages; improves market access for poor farmers. (3) PM Awas Yojana — Subsidized housing for poor; crores of pucca houses built. (4) Mid-Day Meal Scheme — Hot meals for 11 crore school children; improved enrollment and nutrition. (5) National Food Security Act (2013) — Subsidized food grains to 67% of India's population. (6) Jan Dhan Yojana — 50+ crore bank accounts opened for financial inclusion. Evaluation: Poverty has declined significantly — from ~45% (1994) to ~22% (2011-12). However, absolute numbers remain high (27 crore poor). Challenges: corruption in implementation, exclusion errors, inadequate job creation. More needs to be done in health, education, and skill development to achieve the goal of poverty-free India."
      }
    ]
  },
  {
    chapterId: "ss-22",
    subjectId: "social-science",
    chapterNumber: 22,
    chapterTitle: "Food Security in India",
    questions: [
      {
        question: "What is food security? What are its dimensions?",
        marks: 2,
        answer: "Food security means availability, accessibility, and affordability of food to all people at all times. Three dimensions: (1) Availability — Enough food is produced in the country. (2) Accessibility — Food reaches every person, including remote areas. (3) Affordability — Every person has enough income to buy food they need."
      },
      {
        question: "What is the Public Distribution System (PDS)? How does it help the poor?",
        marks: 2,
        answer: "The Public Distribution System (PDS) is a government scheme that distributes essential food grains (wheat, rice, sugar) and kerosene at subsidized prices through Fair Price Shops (Ration Shops). It helps the poor by making food affordable, maintaining food security during famines and natural disasters, and providing a safety net for the vulnerable."
      },
      {
        question: "What is buffer stock? Why does the government maintain it?",
        marks: 3,
        answer: "Buffer stock is the stock of food grains (wheat and rice) that the government maintains through the Food Corporation of India (FCI). Reasons for maintaining buffer stock: (1) To distribute food grains in regions with food shortages. (2) To stabilize prices during periods of high demand. (3) As a safety reserve during droughts, floods, or emergencies. (4) To implement PDS — ensure availability of food grains throughout the year. Currently India maintains 50-70 million tons of food grains as buffer stock."
      },
      {
        question: "Explain the causes of food insecurity in India.",
        marks: 5,
        answer: "(1) Poverty — The poorest people cannot afford adequate food even when it is available. (2) Natural calamities — Droughts, floods, and cyclones destroy crops causing food shortages. (3) Unequal distribution — Food production concentrated in certain regions while others remain food insecure. (4) Seasonal fluctuations — Agricultural laborers face food insecurity during lean seasons. (5) Social vulnerability — Dalits, tribals, single women, pregnant women, and children are particularly food insecure. (6) Wars and conflicts — Displacement and economic disruption cause food insecurity. (7) Price rise — Inflation makes food unaffordable for the poor. States like Orissa, MP, Bihar, and Northeast India have high food insecurity."
      },
      {
        question: "Critically evaluate the food security policy of India. What are its successes and failures?",
        marks: 5,
        answer: "Successes: (1) Green Revolution — HYV seeds increased wheat and rice production dramatically from the 1960s; India moved from food-deficit to food-surplus. (2) Buffer stock — FCI maintains large buffer stocks ensuring national food security. (3) PDS network — World's largest food distribution network with 5 lakh Fair Price Shops. (4) Mid-Day Meal Scheme — Reduced school hunger and improved nutrition among 11 crore children. (5) TPDS (Targeted PDS) — Separates APL and BPL families; better targeting of subsidies. Failures: (1) PDS leakages — Large amounts of subsidized grain are diverted to open market (estimated 40-50% diversion). (2) Exclusion errors — Many genuinely poor families lack ration cards. (3) Storage problems — India faces huge post-harvest losses; improper storage wastes millions of tons. (4) Rising foodgrain prices — Despite PDS, inflation hurts the poor. (5) Malnutrition — India ranks 107 in the Global Hunger Index (2022); 35% of children are underweight. Way forward: Improving PDS delivery through Direct Benefit Transfer, digital ration cards, reducing wastage, and focusing on nutrition security alongside food security."
      }
    ]
  }
];

export const allQuestions: ChapterQuestions[] = [
  ...mathsQuestions,
  ...scienceQuestions,
  ...ssQuestions,
];

export function getQuestionsByChapterId(chapterId: string): ChapterQuestions | undefined {
  return allQuestions.find((q) => q.chapterId === chapterId);
}

export function getQuestionsBySubjectId(subjectId: string): ChapterQuestions[] {
  return allQuestions.filter((q) => q.subjectId === subjectId);
}
