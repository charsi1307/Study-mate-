const mathsQuestions = {

  "Number Systems": [
    {
      q: "Is zero a rational number? Give reason.",
      marks: 2,
      answer: "Yes, zero is a rational number because it can be written as 0/1, 0/2, 0/3, etc. — in the form p/q where p = 0 and q ≠ 0."
    },
    {
      q: "Find two rational numbers between 1/3 and 1/2.",
      marks: 2,
      answer: "Two rational numbers between 1/3 and 1/2 are 5/12 and 7/18. (Method: Convert to same denominator — 4/12 and 6/12, so 5/12 is between them.)"
    },
    {
      q: "Represent √3 on the number line.",
      marks: 3,
      answer: "Step 1: Draw a number line and mark point O (0) and A (1).\nStep 2: At A, draw a perpendicular AB = 1 unit.\nStep 3: Join OB. By Pythagoras theorem, OB = √(1² + 1²) = √2.\nStep 4: At B, draw BC = 1 unit perpendicular.\nStep 5: OC = √(√2² + 1²) = √3.\nStep 6: With O as center and OC as radius, draw an arc cutting the number line at point P. P represents √3."
    },
    {
      q: "Simplify: (√5 + √2)² and identify if the result is rational or irrational.",
      marks: 4,
      answer: "(√5 + √2)² = (√5)² + 2×√5×√2 + (√2)²\n= 5 + 2√10 + 2\n= 7 + 2√10\nSince √10 is irrational, 2√10 is irrational, so 7 + 2√10 is irrational."
    },
    {
      q: "Rationalize the denominator of 1/(√7 − √6) and simplify.",
      marks: 5,
      answer: "Multiply numerator and denominator by (√7 + √6):\n1/(√7 − √6) × (√7 + √6)/(√7 + √6)\n= (√7 + √6) / ((√7)² − (√6)²)\n= (√7 + √6) / (7 − 6)\n= (√7 + √6) / 1\n= √7 + √6"
    }
  ],

  "Polynomials": [
    {
      q: "Find the zero of the polynomial p(x) = 2x + 5.",
      marks: 2,
      answer: "Set p(x) = 0:\n2x + 5 = 0\n2x = −5\nx = −5/2\nThe zero of p(x) = 2x + 5 is x = −5/2."
    },
    {
      q: "Check whether x = 2 is a zero of polynomial p(x) = x³ − 2x² + x − 2.",
      marks: 2,
      answer: "p(2) = (2)³ − 2(2)² + 2 − 2\n= 8 − 8 + 2 − 2\n= 0\nSince p(2) = 0, x = 2 is a zero of the polynomial."
    },
    {
      q: "Using Factor Theorem, show that (x − 1) is a factor of x³ − 3x² + 3x − 1.",
      marks: 3,
      answer: "Let p(x) = x³ − 3x² + 3x − 1\nBy Factor Theorem, (x − 1) is a factor if p(1) = 0.\np(1) = (1)³ − 3(1)² + 3(1) − 1\n= 1 − 3 + 3 − 1\n= 0\nSince p(1) = 0, (x − 1) is a factor of the polynomial."
    },
    {
      q: "Factorise: x³ − 23x² + 142x − 120 given that x = 1 is one of its zeros.",
      marks: 4,
      answer: "Since x = 1 is a zero, (x − 1) is a factor.\nDivide x³ − 23x² + 142x − 120 by (x − 1):\nQuotient = x² − 22x + 120\nNow factorise x² − 22x + 120:\nx² − 22x + 120 = x² − 10x − 12x + 120\n= x(x − 10) − 12(x − 10)\n= (x − 10)(x − 12)\nSo: x³ − 23x² + 142x − 120 = (x − 1)(x − 10)(x − 12)"
    },
    {
      q: "Expand using suitable identity: (2x + 3y + 4z)²",
      marks: 5,
      answer: "Using identity (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca\nHere a = 2x, b = 3y, c = 4z\n= (2x)² + (3y)² + (4z)² + 2(2x)(3y) + 2(3y)(4z) + 2(4z)(2x)\n= 4x² + 9y² + 16z² + 12xy + 24yz + 16zx"
    }
  ],

  "Coordinate Geometry": [
    {
      q: "In which quadrant does the point (−3, 4) lie?",
      marks: 2,
      answer: "The point (−3, 4) has negative x-coordinate and positive y-coordinate.\nTherefore, it lies in the Second Quadrant (Quadrant II)."
    },
    {
      q: "Write the coordinates of a point which lies on x-axis at a distance of 5 units from origin.",
      marks: 2,
      answer: "A point on the x-axis has y-coordinate = 0.\nAt distance 5 from origin: the point is (5, 0) or (−5, 0)."
    },
    {
      q: "Plot the points A(2, 3), B(−3, 1), and C(0, −2) on a Cartesian plane and name the quadrants.",
      marks: 3,
      answer: "A(2, 3) — both positive → Quadrant I\nB(−3, 1) — x negative, y positive → Quadrant II\nC(0, −2) — lies on negative y-axis (not in any quadrant)\n\nTo plot:\n- Draw x-axis (horizontal) and y-axis (vertical) intersecting at origin O.\n- A: move 2 right, 3 up\n- B: move 3 left, 1 up\n- C: on y-axis, 2 units below origin"
    },
    {
      q: "The points A(1, 2), B(5, 2), C(5, 6), D(1, 6) are vertices of a quadrilateral. Find the type of quadrilateral and its area.",
      marks: 4,
      answer: "AB: distance = 5 − 1 = 4 units (horizontal)\nBC: distance = 6 − 2 = 4 units (vertical)\nCD: distance = 5 − 1 = 4 units (horizontal)\nDA: distance = 6 − 2 = 4 units (vertical)\nAll sides equal and all angles 90° → Square\nArea = side × side = 4 × 4 = 16 square units"
    },
    {
      q: "What is the distance of point P(a, b) from origin? If P(3, 4), find the distance from origin.",
      marks: 5,
      answer: "Distance of P(a, b) from origin O(0, 0):\nUsing distance formula: d = √(a² + b²)\n\nFor P(3, 4):\nd = √(3² + 4²)\n= √(9 + 16)\n= √25\n= 5 units\n\nSo point P(3, 4) is 5 units away from the origin."
    }
  ],

  "Linear Equations in Two Variables": [
    {
      q: "Write two solutions of the equation 2x + y = 7.",
      marks: 2,
      answer: "Put x = 0: 2(0) + y = 7 → y = 7 → Solution: (0, 7)\nPut x = 1: 2(1) + y = 7 → y = 5 → Solution: (1, 5)\nTwo solutions: (0, 7) and (1, 5)"
    },
    {
      q: "Express y in terms of x for the equation 3x + 2y = 6.",
      marks: 2,
      answer: "3x + 2y = 6\n2y = 6 − 3x\ny = (6 − 3x) / 2\ny = 3 − 3x/2"
    },
    {
      q: "Draw the graph of x + y = 5 and find the point where it meets both axes.",
      marks: 3,
      answer: "For x-intercept: put y = 0 → x = 5 → Point (5, 0)\nFor y-intercept: put x = 0 → y = 5 → Point (0, 5)\nOne more point: x = 2 → y = 3 → Point (2, 3)\n\nPlot (5, 0), (0, 5), (2, 3) on graph and join them.\nThe line meets x-axis at (5, 0) and y-axis at (0, 5)."
    },
    {
      q: "The cost of a notebook is twice the cost of a pen. Write a linear equation in two variables and draw its graph.",
      marks: 4,
      answer: "Let cost of pen = x, cost of notebook = y\nAccording to condition: y = 2x\nOr: 2x − y = 0\n\nSolutions:\nx = 0 → y = 0 → (0, 0)\nx = 1 → y = 2 → (1, 2)\nx = 2 → y = 4 → (2, 4)\n\nPlot these points and draw a straight line passing through origin.\nThe graph of y = 2x is a straight line through (0,0) with slope 2."
    },
    {
      q: "The taxi fare in a city is as follows: For the first km, the fare is ₹8 and for subsequent distance, it is ₹5/km. Write a linear equation for this and draw graph. Find fare for 4 km.",
      marks: 5,
      answer: "Let total distance = x km, total fare = ₹y\nFare = ₹8 (first km) + ₹5 × (x − 1) for remaining\ny = 8 + 5(x − 1)\ny = 8 + 5x − 5\ny = 5x + 3\n\nSolutions:\nx = 1 → y = 8 → (1, 8)\nx = 2 → y = 13 → (2, 13)\nx = 3 → y = 18 → (3, 18)\n\nFor x = 4: y = 5(4) + 3 = 20 + 3 = ₹23\nFare for 4 km = ₹23\n\nPlot points and join to get straight line graph."
    }
  ],

  "Introduction to Euclid's Geometry": [
    {
      q: "State Euclid's first postulate.",
      marks: 2,
      answer: "Euclid's First Postulate: A straight line may be drawn from any one point to any other point.\nThis means between any two points, exactly one straight line can be drawn."
    },
    {
      q: "What is the difference between an axiom and a postulate?",
      marks: 2,
      answer: "Axiom: A general statement accepted as true without proof, applicable to all branches of mathematics. Example: 'The whole is greater than the part.'\nPostulate: A statement accepted as true specifically in geometry without proof. Example: 'A circle can be drawn with any centre and radius.'\nBoth are self-evident truths but postulates are geometry-specific."
    },
    {
      q: "If A, B, C are three points on a line and B is between A and C, prove that AB + BC = AC.",
      marks: 3,
      answer: "Given: Points A, B, C on a line with B between A and C.\nTo prove: AB + BC = AC\n\nProof:\nFrom the figure, AC is the whole line segment and AB, BC are its parts.\nBy Euclid's Axiom 4: 'The whole is equal to the sum of its parts.'\nTherefore, AB + BC = AC\nHence proved."
    },
    {
      q: "State and explain any four of Euclid's axioms with examples.",
      marks: 4,
      answer: "1. Things equal to the same thing are equal to each other.\n   Example: If AB = CD and CD = EF, then AB = EF.\n\n2. If equals are added to equals, wholes are equal.\n   Example: If a = b, then a + c = b + c.\n\n3. If equals are subtracted from equals, remainders are equal.\n   Example: If a = b, then a − c = b − c.\n\n4. The whole is greater than the part.\n   Example: If AC = AB + BC, then AC > AB and AC > BC."
    },
    {
      q: "Prove that an equilateral triangle can be constructed on any given line segment. (Euclid's Proposition 1)",
      marks: 5,
      answer: "Given: Line segment AB.\nTo construct: Equilateral triangle on AB.\n\nConstruction:\n1. Draw circle with centre A and radius AB.\n2. Draw circle with centre B and radius BA.\n3. Let the two circles intersect at point C.\n4. Join CA and CB.\n\nProof:\nAB = AC (radii of same circle with centre A)\nAB = BC (radii of same circle with centre B)\nSince AB = AC and AB = BC,\nBy Euclid's Axiom 1: AC = BC\nTherefore AB = BC = CA\nHence triangle ABC is equilateral. ✓"
    }
  ],

  "Lines and Angles": [
    {
      q: "If two lines intersect each other, prove that vertically opposite angles are equal.",
      marks: 2,
      answer: "Let lines AB and CD intersect at O.\n∠AOC + ∠AOD = 180° (linear pair) ...(1)\n∠BOD + ∠AOD = 180° (linear pair) ...(2)\nFrom (1) and (2): ∠AOC = ∠BOD\nThus vertically opposite angles are equal."
    },
    {
      q: "In the figure, if ∠AOB = 35°, find ∠BOC if AOC is a straight line.",
      marks: 2,
      answer: "AOC is a straight line, so ∠AOB + ∠BOC = 180° (angles on a straight line)\n35° + ∠BOC = 180°\n∠BOC = 180° − 35°\n∠BOC = 145°"
    },
    {
      q: "If a transversal intersects two parallel lines, prove that alternate interior angles are equal.",
      marks: 3,
      answer: "Given: Lines l ∥ m, transversal t intersects them at A and B.\nTo prove: ∠3 = ∠6 (alternate interior angles)\n\nProof:\n∠1 = ∠3 (vertically opposite angles at A)\n∠1 = ∠6 (corresponding angles, l ∥ m)\nTherefore ∠3 = ∠6\nAlternate interior angles are equal. ✓"
    },
    {
      q: "In a triangle, if one angle is 90° and another is 45°, find the third angle. Also state the theorem used.",
      marks: 4,
      answer: "Let the three angles be ∠A = 90°, ∠B = 45°, ∠C = ?\n\nBy Angle Sum Property of Triangle:\n∠A + ∠B + ∠C = 180°\n90° + 45° + ∠C = 180°\n135° + ∠C = 180°\n∠C = 45°\n\nTheorem used: The sum of all angles of a triangle is 180°.\n\nThis is an isosceles right triangle since ∠B = ∠C = 45°."
    },
    {
      q: "Prove that the sum of angles of a triangle is 180°.",
      marks: 5,
      answer: "Given: Triangle ABC.\nTo prove: ∠A + ∠B + ∠C = 180°\n\nConstruction: Draw line XY through A parallel to BC.\n\nProof:\nXY ∥ BC (by construction)\n∠XAB = ∠ABC (alternate interior angles, XY ∥ BC) ...(1)\n∠YAC = ∠ACB (alternate interior angles, XY ∥ BC) ...(2)\n\nNow, XAY is a straight line:\n∠XAB + ∠BAC + ∠YAC = 180° ...(3)\n\nSubstituting (1) and (2) in (3):\n∠ABC + ∠BAC + ∠ACB = 180°\n∠A + ∠B + ∠C = 180° ✓\nHence proved."
    }
  ],

  "Triangles": [
    {
      q: "State SAS congruence rule.",
      marks: 2,
      answer: "SAS (Side-Angle-Side) Congruence Rule: Two triangles are congruent if two sides and the included angle of one triangle are equal to the corresponding two sides and included angle of the other triangle.\nExample: If AB = PQ, ∠A = ∠P, AC = PR, then △ABC ≅ △PQR."
    },
    {
      q: "In △ABC, AB = AC. The bisector of ∠A meets BC at D. Show that BD = DC.",
      marks: 2,
      answer: "In △ABD and △ACD:\nAB = AC (given)\n∠BAD = ∠CAD (AD bisects ∠A)\nAD = AD (common)\nBy SAS: △ABD ≅ △ACD\nTherefore BD = DC (CPCT) ✓"
    },
    {
      q: "Prove that angles opposite to equal sides of an isosceles triangle are equal.",
      marks: 3,
      answer: "Given: △ABC where AB = AC.\nTo prove: ∠B = ∠C\n\nConstruction: Draw AD bisecting ∠A, meeting BC at D.\n\nIn △ABD and △ACD:\nAB = AC (given)\n∠BAD = ∠CAD (AD bisects ∠A)\nAD = AD (common)\nBy SAS: △ABD ≅ △ACD\nTherefore ∠ABD = ∠ACD (CPCT)\nSo ∠B = ∠C ✓"
    },
    {
      q: "In a △ABC, E is the midpoint of BC. AE is produced to F such that EF = AE. Show that ABFC is a parallelogram.",
      marks: 4,
      answer: "In △AEB and △FEC:\nAE = FE (given)\nBE = CE (E is midpoint of BC)\n∠AEB = ∠FEC (vertically opposite)\nBy SAS: △AEB ≅ △FEC\nTherefore AB = FC (CPCT) ...(1)\n∠ABE = ∠FCE (CPCT) → AB ∥ FC ...(2)\n\nFrom (1) and (2): AB = FC and AB ∥ FC\nTherefore ABFC is a parallelogram. ✓"
    },
    {
      q: "Prove that the sum of any two sides of a triangle is greater than the third side.",
      marks: 5,
      answer: "Given: Triangle ABC.\nTo prove: AB + AC > BC\n\nConstruction: Produce BA to D such that AD = AC. Join CD.\n\nProof:\nIn △ACD:\nAD = AC (construction)\nSo ∠ADC = ∠ACD (angles opposite equal sides)\n\nNow ∠BCD > ∠ACD (∠BCD = ∠BCA + ∠ACD)\nSo ∠BCD > ∠ADC = ∠BDC\n\nIn △BCD:\n∠BCD > ∠BDC\nTherefore BD > BC (side opposite greater angle is greater)\n\nBut BD = BA + AD = BA + AC = AB + AC\nTherefore AB + AC > BC ✓"
    }
  ],

  "Quadrilaterals": [
    {
      q: "If the diagonals of a parallelogram are equal, what type of parallelogram is it?",
      marks: 2,
      answer: "If the diagonals of a parallelogram are equal, it is a Rectangle.\nIn a rectangle, diagonals are equal in length and bisect each other.\nExample: In rectangle ABCD, AC = BD."
    },
    {
      q: "In a parallelogram ABCD, if ∠A = 70°, find all other angles.",
      marks: 2,
      answer: "In parallelogram ABCD:\n∠A = 70° (given)\n∠C = ∠A = 70° (opposite angles are equal)\n∠A + ∠B = 180° (co-interior angles)\n∠B = 180° − 70° = 110°\n∠D = ∠B = 110° (opposite angles equal)\nSo ∠A = 70°, ∠B = 110°, ∠C = 70°, ∠D = 110°"
    },
    {
      q: "Prove that the diagonals of a parallelogram bisect each other.",
      marks: 3,
      answer: "Given: Parallelogram ABCD, diagonals AC and BD intersect at O.\nTo prove: OA = OC and OB = OD\n\nIn △AOB and △COD:\nAB = CD (opposite sides of parallelogram)\n∠OAB = ∠OCD (alternate interior angles, AB ∥ CD)\n∠OBA = ∠ODC (alternate interior angles)\nBy ASA: △AOB ≅ △COD\nTherefore OA = OC and OB = OD (CPCT) ✓"
    },
    {
      q: "State and prove the Midpoint Theorem.",
      marks: 4,
      answer: "Midpoint Theorem: The line segment joining the midpoints of two sides of a triangle is parallel to the third side and is half of it.\n\nGiven: △ABC, E and F are midpoints of AB and AC.\nTo prove: EF ∥ BC and EF = ½BC\n\nProof:\nProduce EF to D such that FD = EF. Join CD.\nIn △AEF and △CDF:\nAF = CF (F is midpoint)\nEF = DF (construction)\n∠AFE = ∠CFD (vertically opposite)\nBy SAS: △AEF ≅ △CDF\nSo AE = CD and AE ∥ CD → EB = CD and EB ∥ CD\nTherefore EBCD is a parallelogram.\nSo EF ∥ BC and ED = BC → EF = ½BC ✓"
    },
    {
      q: "ABCD is a rhombus. Show that diagonal AC bisects ∠A as well as ∠C and diagonal BD bisects ∠B and ∠D.",
      marks: 5,
      answer: "Given: ABCD is a rhombus (AB = BC = CD = DA).\nTo prove: AC bisects ∠A and ∠C; BD bisects ∠B and ∠D.\n\nIn △ABC:\nAB = BC (sides of rhombus)\nSo ∠BAC = ∠BCA (angles opposite equal sides) ...(1)\n\nAB ∥ DC (rhombus), AC is transversal:\n∠BAC = ∠DCA (alternate interior angles) ...(2)\n\nFrom (1) and (2): ∠BCA = ∠DCA\nSo AC bisects ∠C.\n\nSimilarly AB ∥ DC → ∠BAC = ∠DCA\nAD ∥ BC → ∠DAC = ∠BCA = ∠BAC\nSo AC bisects ∠A.\n\nSimilarly, we can prove BD bisects ∠B and ∠D. ✓"
    }
  ],

  "Circles": [
    {
      q: "State the theorem: Equal chords of a circle subtend equal angles at the centre.",
      marks: 2,
      answer: "Theorem: Equal chords of a circle subtend equal angles at the centre.\n\nIf AB and CD are two equal chords of a circle with centre O, then:\n∠AOB = ∠COD\n\nConverse is also true: If two chords subtend equal angles at the centre, they are equal."
    },
    {
      q: "A chord of a circle is equal to its radius. Find the angle subtended by the chord at a point on the major arc.",
      marks: 2,
      answer: "Let chord AB = radius OA = OB.\nSo △OAB is equilateral.\n∠AOB = 60°\n\nAngle at centre = 2 × angle at circumference (major arc)\nAngle at major arc = ∠AOB / 2 = 60° / 2 = 30°\n\nThe chord subtends an angle of 30° at any point on the major arc."
    },
    {
      q: "Prove that the angle subtended by an arc at the centre is double the angle subtended by it at any point on the remaining part of the circle.",
      marks: 3,
      answer: "Given: Arc PQ of circle with centre O. R is a point on remaining arc.\nTo prove: ∠POQ = 2∠PRQ\n\nConstruction: Join RO and extend to point A.\n\nIn △OPR: OP = OR (radii)\n∠ORP = ∠OPR (isosceles)\n∠POR = 180° − 2∠ORP ...(exterior angle)\n∠POA = 2∠ORP ...(1)\n\nSimilarly in △OQR:\n∠QOA = 2∠ORQ ...(2)\n\nAdding (1) and (2):\n∠POQ = 2∠PRQ ✓"
    },
    {
      q: "Prove that angles in the same segment of a circle are equal.",
      marks: 4,
      answer: "Given: Circle with centre O, chord AB. C and D are points on same arc.\nTo prove: ∠ACB = ∠ADB\n\nProof:\nBy theorem: Angle at centre = 2 × angle at circumference\n∠AOB = 2∠ACB ...(1)\n∠AOB = 2∠ADB ...(2)\n\nFrom (1) and (2):\n2∠ACB = 2∠ADB\n∠ACB = ∠ADB\n\nAngles in same segment are equal. ✓"
    },
    {
      q: "ABCD is a cyclic quadrilateral. If ∠A = 100°, find ∠C. Prove that opposite angles of a cyclic quadrilateral are supplementary.",
      marks: 5,
      answer: "Given: Cyclic quadrilateral ABCD, ∠A = 100°.\n\nTheorem Proof:\nLet arc BCD subtend ∠BAD at A and ∠BOD at centre O.\n∠BOD = 2∠BAD ...(i)\n\nReflex ∠BOD = 2∠BCD ...(ii) (arc BAD)\n\n∠BOD + reflex ∠BOD = 360°\nFrom (i) and (ii): 2∠BAD + 2∠BCD = 360°\n∠BAD + ∠BCD = 180°\n∠A + ∠C = 180° ✓\n\nSo opposite angles are supplementary.\n\nFor given question:\n∠A + ∠C = 180°\n100° + ∠C = 180°\n∠C = 80°"
    }
  ],

  "Heron's Formula": [
    {
      q: "Find the area of a triangle with sides 5 cm, 6 cm, and 7 cm using Heron's Formula.",
      marks: 2,
      answer: "s = (5 + 6 + 7)/2 = 18/2 = 9 cm\n\nArea = √[s(s−a)(s−b)(s−c)]\n= √[9 × (9−5) × (9−6) × (9−7)]\n= √[9 × 4 × 3 × 2]\n= √216\n= 6√6 cm²\n≈ 14.7 cm²"
    },
    {
      q: "The sides of a triangle are in ratio 3:5:7 and its perimeter is 300 cm. Find its area.",
      marks: 2,
      answer: "Sides: 3x + 5x + 7x = 300 → x = 20\nSides: a = 60, b = 100, c = 140 cm\ns = 300/2 = 150 cm\n\nArea = √[150 × 90 × 50 × 10]\n= √[6750000]\n= 1500√3 cm²\n≈ 2598 cm²"
    },
    {
      q: "A triangular park has sides 120m, 80m, and 50m. A gardener has to put a fence all around it and also plant grass inside. Find the area for grass planting.",
      marks: 3,
      answer: "a = 120m, b = 80m, c = 50m\ns = (120 + 80 + 50)/2 = 250/2 = 125m\n\nArea = √[s(s−a)(s−b)(s−c)]\n= √[125 × 5 × 45 × 75]\n= √[125 × 5 × 45 × 75]\n= √[2109375]\n= 375√15 m²\n≈ 1452 m²\n\nThis is the area for planting grass."
    },
    {
      q: "A rhombus-shaped field has diagonals 14m and 48m. Find its area using Heron's Formula on one triangle.",
      marks: 4,
      answer: "Diagonals of rhombus bisect each other at 90°.\nHalf diagonals: 7m and 24m\n\nSide of rhombus = √(7² + 24²) = √(49 + 576) = √625 = 25m\n\nFor one triangle (half of rhombus) with sides 25, 25, 48:\ns = (25 + 25 + 48)/2 = 49\n\nArea of triangle = √[49 × 24 × 24 × 1]\n= √[49 × 576]\n= 7 × 24 = 168 m²\n\nTotal area of rhombus = 2 × 168 = 336 m²\n(Verify: ½ × d1 × d2 = ½ × 14 × 48 = 336 m² ✓)"
    },
    {
      q: "A field is in the shape of a trapezium whose parallel sides are 25m and 10m. The non-parallel sides are 14m and 13m. Find the area.",
      marks: 5,
      answer: "Let ABCD be trapezium with AB = 25m, CD = 10m, BC = 14m, AD = 13m.\n\nDraw CE ∥ AD and CF ⊥ AB.\nAE = CD = 10m, EB = 25 − 10 = 15m\n\nIn △BCE: BC = 14m, CE = 13m, BE = 15m\ns = (14 + 13 + 15)/2 = 21m\n\nArea of △BCE = √[21 × 7 × 8 × 6]\n= √7056 = 84 m²\n\nAlso Area = ½ × base × height = ½ × 15 × h = 84\nh = 168/15 = 11.2m\n\nArea of trapezium = ½ × (25 + 10) × 11.2\n= ½ × 35 × 11.2\n= 196 m²"
    }
  ],

  "Surface Areas and Volumes": [
    {
      q: "Find the total surface area of a cube whose edge is 5 cm.",
      marks: 2,
      answer: "Total Surface Area of cube = 6a²\nHere a = 5 cm\nTSA = 6 × (5)²\n= 6 × 25\n= 150 cm²"
    },
    {
      q: "The radius of a sphere is 7 cm. Find its surface area. (π = 22/7)",
      marks: 2,
      answer: "Surface Area of sphere = 4πr²\n= 4 × (22/7) × 7 × 7\n= 4 × 22 × 7\n= 616 cm²"
    },
    {
      q: "A cylindrical pillar has radius 0.5m and height 3.5m. Find the curved surface area and cost of painting at ₹12.50 per m².",
      marks: 3,
      answer: "CSA of cylinder = 2πrh\n= 2 × (22/7) × 0.5 × 3.5\n= 2 × (22/7) × 1.75\n= 2 × 5.5\n= 11 m²\n\nCost of painting = 11 × 12.50\n= ₹137.50"
    },
    {
      q: "A cone has slant height 13 cm and base radius 5 cm. Find its total surface area and volume. (π = 3.14)",
      marks: 4,
      answer: "l = 13 cm, r = 5 cm\nh = √(l² − r²) = √(169 − 25) = √144 = 12 cm\n\nTSA of cone = πr(l + r)\n= 3.14 × 5 × (13 + 5)\n= 3.14 × 5 × 18\n= 282.6 cm²\n\nVolume of cone = (1/3)πr²h\n= (1/3) × 3.14 × 25 × 12\n= (1/3) × 942\n= 314 cm³"
    },
    {
      q: "A hemispherical bowl has inner radius 9 cm. Find the volume of water it can hold. Also find the TSA of a solid hemisphere of same radius. (π = 22/7)",
      marks: 5,
      answer: "r = 9 cm\n\nVolume of hemisphere = (2/3)πr³\n= (2/3) × (22/7) × 9³\n= (2/3) × (22/7) × 729\n= (2 × 22 × 729) / (3 × 7)\n= 32076 / 21\n= 1527.43 cm³ ≈ 1527.4 cm³\n\nTSA of solid hemisphere = 3πr²\n= 3 × (22/7) × 81\n= 3 × (22 × 81) / 7\n= 5346/7\n= 763.71 cm² ≈ 763.7 cm²"
    }
  ],

  "Statistics": [
    {
      q: "Find the mean of: 5, 10, 15, 20, 25.",
      marks: 2,
      answer: "Mean = Sum of observations / Number of observations\n= (5 + 10 + 15 + 20 + 25) / 5\n= 75 / 5\n= 15\n\nThe mean is 15."
    },
    {
      q: "Find the median of: 3, 1, 5, 6, 3, 4, 5.",
      marks: 2,
      answer: "Arrange in ascending order: 1, 3, 3, 4, 5, 5, 6\nNumber of observations (n) = 7 (odd)\nMedian = [(n+1)/2]th term = [8/2]th = 4th term\nMedian = 4"
    },
    {
      q: "The following marks were scored by students: 72, 65, 89, 54, 72, 91, 65, 72. Find mean, median and mode.",
      marks: 3,
      answer: "Data: 72, 65, 89, 54, 72, 91, 65, 72\n\nMean = (72+65+89+54+72+91+65+72)/8 = 580/8 = 72.5\n\nArranged: 54, 65, 65, 72, 72, 72, 89, 91 (n=8, even)\nMedian = (4th + 5th)/2 = (72 + 72)/2 = 72\n\nMode = 72 (appears 3 times, most frequent)"
    },
    {
      q: "Draw a histogram for the following data:\nMarks: 0-20, 20-40, 40-60, 60-80, 80-100\nStudents: 5, 10, 15, 8, 6",
      marks: 4,
      answer: "Steps to draw histogram:\n1. Draw x-axis for marks (0 to 100) and y-axis for number of students.\n2. Mark class intervals on x-axis: 0-20, 20-40, 40-60, 60-80, 80-100.\n3. Draw bars of heights equal to frequency (no gap between bars):\n   - 0-20: height 5\n   - 20-40: height 10\n   - 40-60: height 15 (tallest bar)\n   - 60-80: height 8\n   - 80-100: height 6\n4. Label both axes properly.\n5. Give a title: 'Marks Distribution of Students'\n\nNote: All bars are of equal width with no gaps (continuous data)."
    },
    {
      q: "The mean of 5 numbers is 18. If one number is excluded, the mean becomes 16. Find the excluded number.",
      marks: 5,
      answer: "Mean of 5 numbers = 18\nSum of 5 numbers = 18 × 5 = 90\n\nMean of remaining 4 numbers = 16\nSum of 4 numbers = 16 × 4 = 64\n\nExcluded number = Sum of 5 − Sum of 4\n= 90 − 64\n= 26\n\nThe excluded number is 26.\n\nVerification: (26 + sum of 4 numbers) / 5 = (26 + 64)/5 = 90/5 = 18 ✓"
    }
  ]

};
