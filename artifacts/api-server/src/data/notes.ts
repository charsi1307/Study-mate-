export interface ChapterNotes {
  chapterId: string;
  subjectId: string;
  chapterNumber: number;
  chapterTitle: string;
  definitions: string[];
  formulas: string[];
  keyPoints: string[];
  summary: string;
}

export const allNotes: ChapterNotes[] = [
  // ==================== MATHEMATICS ====================
  {
    chapterId: "maths-1", subjectId: "maths", chapterNumber: 1, chapterTitle: "Number Systems",
    definitions: [
      "Natural Numbers: Counting numbers starting from 1 (1, 2, 3, ...)",
      "Whole Numbers: Natural numbers including 0 (0, 1, 2, 3, ...)",
      "Integers: Whole numbers and their negatives (... -3, -2, -1, 0, 1, 2, 3, ...)",
      "Rational Numbers: Numbers expressible as p/q where p, q are integers and q ≠ 0",
      "Irrational Numbers: Numbers that cannot be expressed as p/q, e.g., √2, √3, π",
      "Real Numbers: Union of rational and irrational numbers"
    ],
    formulas: [
      "Laws of Exponents: a^m × a^n = a^(m+n); (a^m)^n = a^(mn); a^m / a^n = a^(m-n); a^0 = 1",
      "Rationalization: 1/(a+√b) × (a-√b)/(a-√b) = (a-√b)/(a²-b)",
      "Decimal Expansion: Terminating (denominator has only 2 or 5 as prime factors) or Non-terminating Repeating"
    ],
    keyPoints: [
      "Every rational number has a decimal expansion that is either terminating or non-terminating recurring",
      "Every irrational number has a non-terminating non-recurring decimal expansion",
      "The sum or difference of a rational and an irrational number is irrational",
      "The product or quotient of a non-zero rational number and an irrational number is irrational",
      "Real numbers can be represented on the number line using the process of successive magnification",
      "There are infinitely many rational and irrational numbers between any two real numbers"
    ],
    summary: "This chapter introduces the number system expanding from natural numbers to real numbers. It covers rational and irrational numbers, their decimal representations, representation on the number line, and operations on real numbers using laws of exponents."
  },
  {
    chapterId: "maths-2", subjectId: "maths", chapterNumber: 2, chapterTitle: "Polynomials",
    definitions: [
      "Polynomial: An algebraic expression with non-negative integer exponents, e.g., p(x) = a₀ + a₁x + a₂x² + ... + aₙxⁿ",
      "Degree of Polynomial: Highest power of the variable in the polynomial",
      "Linear Polynomial: Degree 1 (ax + b, a ≠ 0)",
      "Quadratic Polynomial: Degree 2 (ax² + bx + c, a ≠ 0)",
      "Cubic Polynomial: Degree 3 (ax³ + bx² + cx + d, a ≠ 0)",
      "Zero of a Polynomial: Value of x for which p(x) = 0",
      "Monomial: Polynomial with one term; Binomial: Two terms; Trinomial: Three terms"
    ],
    formulas: [
      "Zeroes of quadratic ax² + bx + c: x = (-b ± √(b² - 4ac)) / 2a",
      "Sum of zeroes = -b/a; Product of zeroes = c/a",
      "For cubic ax³ + bx² + cx + d: α+β+γ = -b/a; αβ+βγ+γα = c/a; αβγ = -d/a",
      "Remainder Theorem: When p(x) is divided by (x-a), remainder = p(a)",
      "Factor Theorem: (x-a) is a factor of p(x) iff p(a) = 0",
      "Algebraic Identities: (a+b)² = a² + 2ab + b²; (a-b)² = a² - 2ab + b²; a²-b² = (a+b)(a-b); (x+a)(x+b) = x²+(a+b)x+ab"
    ],
    keyPoints: [
      "A polynomial of degree n has at most n zeroes",
      "The graph of a linear polynomial is a straight line",
      "The graph of a quadratic polynomial is a parabola",
      "A cubic polynomial can have at most 3 zeroes (where the graph cuts the x-axis)",
      "The shape of the parabola depends on the sign of the leading coefficient",
      "Factorization can be done by splitting the middle term, using identities, or by taking common factors"
    ],
    summary: "This chapter covers polynomials, their types based on degree, finding zeroes, relationship between zeroes and coefficients, division algorithm, remainder theorem, factor theorem, and algebraic identities for factorization."
  },
  {
    chapterId: "maths-3", subjectId: "maths", chapterNumber: 3, chapterTitle: "Coordinate Geometry",
    definitions: [
      "Coordinate Axes: Two perpendicular lines (x-axis horizontal, y-axis vertical) intersecting at the Origin (0,0)",
      "Quadrants: Four regions formed by the coordinate axes, numbered I to IV anticlockwise",
      "Abscissa: x-coordinate of a point; Ordinate: y-coordinate of a point",
      "Cartesian Plane: The plane containing the coordinate axes"
    ],
    formulas: [
      "Distance between points A(x₁, y₁) and B(x₂, y₂): d = √((x₂-x₁)² + (y₂-y₁)²)",
      "Distance from origin O(0,0) to P(x,y): OP = √(x² + y²)",
      "Section Formula (internal division): P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))",
      "Midpoint Formula: M = ((x₁+x₂)/2, (y₁+y₂)/2)",
      "Area of triangle with vertices A(x₁,y₁), B(x₂,y₂), C(x₃,y₃): Area = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|"
    ],
    keyPoints: [
      "In Quadrant I: x > 0, y > 0; II: x < 0, y > 0; III: x < 0, y < 0; IV: x > 0, y < 0",
      "Points on x-axis have y = 0; points on y-axis have x = 0",
      "The section formula can be used to find the centroid of a triangle",
      "Three points are collinear if the area of the triangle formed by them is zero",
      "The midpoint of the hypotenuse of a right-angled triangle is equidistant from all three vertices"
    ],
    summary: "This chapter introduces the Cartesian coordinate system, the distance formula, section formula, midpoint formula, and area of a triangle formula. These tools help locate points and calculate distances and areas on a plane."
  },
  {
    chapterId: "maths-4", subjectId: "maths", chapterNumber: 4, chapterTitle: "Linear Equations in Two Variables",
    definitions: [
      "Linear Equation in Two Variables: An equation of the form ax + by + c = 0 where a, b, c are real numbers and a, b are not both zero",
      "Solution: A pair of values (x, y) that satisfies the equation",
      "Simultaneous Linear Equations: Two or more linear equations in the same two variables"
    ],
    formulas: [
      "General form: ax + by + c = 0",
      "Slope-intercept form: y = mx + c (m = slope, c = y-intercept)",
      "For pair a₁x+b₁y+c₁=0 and a₂x+b₂y+c₂=0:",
      "  If a₁/a₂ ≠ b₁/b₂: Unique solution (consistent)",
      "  If a₁/a₂ = b₁/b₂ = c₁/c₂: Infinitely many solutions (dependent/consistent)",
      "  If a₁/a₂ = b₁/b₂ ≠ c₁/c₂: No solution (inconsistent)"
    ],
    keyPoints: [
      "A linear equation in two variables has infinitely many solutions",
      "The graph of a linear equation in two variables is always a straight line",
      "Every point on the line is a solution of the equation",
      "Graphical method: Plot both lines and find intersection point",
      "Algebraic methods: Substitution, Elimination, and Cross-multiplication",
      "If lines intersect at a point, the pair is consistent with a unique solution",
      "If lines are parallel, the pair is inconsistent with no solution",
      "If lines coincide, the pair is dependent with infinitely many solutions"
    ],
    summary: "This chapter covers linear equations in two variables, their graphical representation, and methods to solve pairs of linear equations: graphical, substitution, elimination, and cross-multiplication. It also discusses conditions for consistency of a pair of linear equations."
  },
  {
    chapterId: "maths-5", subjectId: "maths", chapterNumber: 5, chapterTitle: "Introduction to Euclid's Geometry",
    definitions: [
      "Axioms: Self-evident truths that need no proof",
      "Postulates: Assumptions specific to geometry",
      "Theorem: A mathematical statement that requires proof",
      "Point: A location with no dimension; Line: Extends infinitely in both directions",
      "Plane: A flat surface extending infinitely in all directions"
    ],
    formulas: [],
    keyPoints: [
      "Euclid's Division Lemma: For positive integers a and b, a = bq + r, 0 ≤ r < b",
      "Euclid's five postulates including the parallel postulate",
      "Axiom 1: Things equal to the same thing are equal to each other",
      "Axiom 2: If equals are added to equals, the wholes are equal",
      "Axiom 3: If equals are subtracted from equals, the remainders are equal",
      "Axiom 4: Things that coincide with one another are equal",
      "Axiom 5: The whole is greater than the part",
      "Euclid's Algorithm for finding HCF of two numbers",
      "The Fundamental Theorem of Arithmetic: Every composite number can be expressed as a product of primes uniquely (order apart)"
    ],
    summary: "This chapter introduces Euclid's axioms and postulates, the division lemma, Euclid's algorithm for finding HCF, and the fundamental theorem of arithmetic. These form the foundation of number theory and geometry."
  },
  {
    chapterId: "maths-6", subjectId: "maths", chapterNumber: 6, chapterTitle: "Lines and Angles",
    definitions: [
      "Acute Angle: Less than 90°; Right Angle: Exactly 90°; Obtuse Angle: Between 90° and 180°",
      "Straight Angle: Exactly 180°; Reflex Angle: Between 180° and 360°",
      "Complementary Angles: Sum = 90°; Supplementary Angles: Sum = 180°",
      "Adjacent Angles: Share a common vertex and arm, other arms on opposite sides",
      "Linear Pair: Adjacent angles whose non-common arms are opposite rays; sum = 180°",
      "Vertically Opposite Angles: Formed by two intersecting lines; always equal",
      "Transversal: A line intersecting two or more lines at distinct points"
    ],
    formulas: [
      "Sum of angles around a point = 360°",
      "Sum of interior angles on the same side of transversal = 180° (parallel lines)",
      "Vertically opposite angles are equal",
      "Alternate interior angles are equal (parallel lines)",
      "Corresponding angles are equal (parallel lines)",
      "Sum of angles in a triangle = 180°",
      "Exterior angle = sum of two opposite interior angles"
    ],
    keyPoints: [
      "If a transversal intersects two parallel lines, each pair of corresponding angles is equal",
      "If a transversal intersects two lines such that a pair of alternate interior angles is equal, the lines are parallel",
      "If a transversal intersects two lines such that a pair of interior angles on the same side is supplementary, the lines are parallel",
      "Lines parallel to the same line are parallel to each other",
      "The sum of the three angles of a triangle is 180 degrees",
      "An exterior angle of a triangle equals the sum of its two interior opposite angles"
    ],
    summary: "This chapter covers types of angles, pairs of angles (complementary, supplementary, adjacent, linear pair, vertically opposite), angles formed by a transversal intersecting parallel lines, and angle sum properties of triangles."
  },
  {
    chapterId: "maths-7", subjectId: "maths", chapterNumber: 7, chapterTitle: "Triangles",
    definitions: [
      "Congruent Triangles: Two triangles are congruent if all corresponding sides and angles are equal",
      "SSS Congruence: Three sides equal",
      "SAS Congruence: Two sides and included angle equal",
      "ASA Congruence: Two angles and included side equal",
      "AAS Congruence: Two angles and non-included side equal",
      "RHS Congruence: Right angle, hypotenuse, and one side equal"
    ],
    formulas: [
      "In any triangle, the side opposite the greater angle is longer",
      "Sum of any two sides > third side (Triangle Inequality)",
      "Difference of any two sides < third side"
    ],
    keyPoints: [
      "Two triangles are congruent if their corresponding parts are equal (CPCT: Corresponding Parts of Congruent Triangles)",
      "SSS, SAS, ASA, AAS, and RHS are the five congruence criteria",
      "There is no SSA or AAA congruence criterion for triangles (AAA gives similarity, not congruence)",
      "Angles opposite equal sides are equal; sides opposite equal angles are equal",
      "In a triangle, the angle opposite the longer side is larger",
      "The perpendicular from a vertex to the opposite side (altitude) is the shortest distance",
      "The sum of any two sides of a triangle is greater than the third side"
    ],
    summary: "This chapter discusses congruence of triangles, the five congruence criteria (SSS, SAS, ASA, AAS, RHS), inequalities in a triangle, and properties relating sides and angles of triangles."
  },
  {
    chapterId: "maths-8", subjectId: "maths", chapterNumber: 8, chapterTitle: "Quadrilaterals",
    definitions: [
      "Quadrilateral: A closed figure with four sides",
      "Parallelogram: Opposite sides parallel and equal",
      "Rectangle: Parallelogram with all angles 90°",
      "Square: Rectangle with all sides equal",
      "Rhombus: Parallelogram with all sides equal",
      "Trapezium: One pair of opposite sides parallel",
      "Kite: Two pairs of adjacent sides equal"
    ],
    formulas: [
      "Sum of interior angles of quadrilateral = 360°",
      "Area of parallelogram = base × height",
      "Area of rectangle = length × breadth",
      "Area of square = side²",
      "Area of rhombus = ½ × d₁ × d₂ (product of diagonals)",
      "Area of trapezium = ½ × (sum of parallel sides) × height"
    ],
    keyPoints: [
      "A diagonal of a parallelogram divides it into two congruent triangles",
      "In a parallelogram, opposite sides are equal and opposite angles are equal",
      "The diagonals of a parallelogram bisect each other",
      "A quadrilateral is a parallelogram if opposite sides are equal, or opposite angles are equal, or diagonals bisect each other, or one pair of opposite sides is equal and parallel",
      "The diagonals of a rectangle are equal and bisect each other",
      "The diagonals of a rhombus bisect each other at right angles",
      "The diagonals of a square are equal and bisect each other at right angles",
      "The line segment joining the midpoints of two sides of a triangle is parallel to the third side and half of it (Midpoint Theorem)"
    ],
    summary: "This chapter covers types of quadrilaterals, properties of parallelograms, rectangles, squares, and rhombuses, conditions for a quadrilateral to be a parallelogram, and the midpoint theorem."
  },
  {
    chapterId: "maths-9", subjectId: "maths", chapterNumber: 9, chapterTitle: "Areas of Parallelograms and Triangles",
    definitions: [
      "Figures on the Same Base and Between Same Parallels: Figures sharing a common base with vertices on a line parallel to the base",
      "Congruent figures have equal areas, but figures with equal areas need not be congruent"
    ],
    formulas: [
      "Area of parallelogram = base × corresponding altitude",
      "Parallelograms on the same base and between same parallels have equal areas",
      "Area of triangle = ½ × base × height",
      "A diagonal of a parallelogram divides it into two triangles of equal area",
      "Triangles on the same base and between same parallels have equal areas",
      "Area of a triangle formed by joining midpoints = ¼ of original triangle's area"
    ],
    keyPoints: [
      "Parallelograms on the same base and between the same parallels have equal areas",
      "The area of a parallelogram is the product of its base and the corresponding altitude",
      "A diagonal of a parallelogram divides it into two triangles of equal area",
      "Triangles on the same base and between the same parallels are equal in area",
      "The area of a triangle is half the product of its base and the corresponding altitude",
      "A median of a triangle divides it into two triangles of equal area",
      "If a parallelogram and a triangle are on the same base and between the same parallels, the area of the triangle is half that of the parallelogram"
    ],
    summary: "This chapter establishes relationships between areas of parallelograms and triangles on the same base and between the same parallels. It proves that parallelograms on the same base have equal areas and a triangle's area is half that of a parallelogram on the same base."
  },
  {
    chapterId: "maths-10", subjectId: "maths", chapterNumber: 10, chapterTitle: "Circles",
    definitions: [
      "Circle: Set of all points equidistant from a fixed point (centre)",
      "Radius: Distance from centre to any point on the circle",
      "Diameter: Longest chord passing through the centre; d = 2r",
      "Chord: Line segment joining two points on the circle",
      "Secant: Line intersecting the circle at two points",
      "Tangent: Line touching the circle at exactly one point",
      "Arc: A portion of the circumference",
      "Sector: Region bounded by two radii and an arc",
      "Segment: Region bounded by a chord and an arc",
      "Cyclic Quadrilateral: Quadrilateral with all vertices on a circle"
    ],
    formulas: [
      "Circumference = 2πr = πd",
      "Area of circle = πr²",
      "Length of arc = (θ/360) × 2πr",
      "Area of sector = (θ/360) × πr²"
    ],
    keyPoints: [
      "Equal chords subtend equal angles at the centre",
      "The perpendicular from the centre to a chord bisects the chord",
      "There is one and only one circle passing through three non-collinear points",
      "Equal chords are equidistant from the centre",
      "The angle subtended by an arc at the centre is double the angle subtended at any point on the remaining part of the circle",
      "Angles in the same segment are equal",
      "The angle in a semicircle is a right angle",
      "The sum of either pair of opposite angles of a cyclic quadrilateral is 180°",
      "If the sum of a pair of opposite angles of a quadrilateral is 180°, it is cyclic",
      "The tangent at any point of a circle is perpendicular to the radius through the point of contact"
    ],
    summary: "This chapter covers properties of circles including chords, arcs, angles subtended by arcs, cyclic quadrilaterals, and tangent properties. Key theorems relate central angles, inscribed angles, and properties of chords and tangents."
  },
  {
    chapterId: "maths-11", subjectId: "maths", chapterNumber: 11, chapterTitle: "Constructions",
    definitions: [
      "Bisection: Dividing into two equal parts",
      "Perpendicular Bisector: A line perpendicular to a segment and passing through its midpoint"
    ],
    formulas: [],
    keyPoints: [
      "To bisect a given angle using compass and ruler",
      "To draw the perpendicular bisector of a line segment",
      "To construct an angle of 60° at the initial point of a given ray",
      "To construct a triangle given its base, a base angle and sum of other two sides",
      "To construct a triangle given its base, a base angle and the difference of the other two sides",
      "To construct a triangle given its perimeter and its two base angles",
      "The construction requires only an unmarked ruler and a compass"
    ],
    summary: "This chapter teaches basic geometric constructions using ruler and compass: bisecting angles, drawing perpendicular bisectors, constructing angles of specific measures, and constructing triangles given various parameters."
  },
  {
    chapterId: "maths-12", subjectId: "maths", chapterNumber: 12, chapterTitle: "Heron's Formula",
    definitions: [
      "Semi-perimeter: s = (a+b+c)/2 where a, b, c are sides of a triangle"
    ],
    formulas: [
      "Heron's Formula: Area = √[s(s-a)(s-b)(s-c)]",
      "Area of quadrilateral = √(s(s-a)(s-b)(s-c)(s-d)) (Brahmagupta's formula for cyclic quadrilateral)",
      "Area of equilateral triangle = (√3/4) × side²",
      "Area of isosceles triangle = (b/4)√(4a²-b²) where a = equal sides, b = base"
    ],
    keyPoints: [
      "Heron's formula is useful when the height of the triangle is not known",
      "The formula works for all types of triangles: scalene, isosceles, and equilateral",
      "For an equilateral triangle, Heron's formula simplifies to (√3/4)a²",
      "Heron's formula can be extended to find the area of quadrilaterals by dividing them into triangles",
      "The semi-perimeter must be calculated first before applying the formula"
    ],
    summary: "This chapter introduces Heron's formula for calculating the area of a triangle when all three sides are known. It also covers applications to find areas of quadrilaterals and special triangles like equilateral and isosceles triangles."
  },
  {
    chapterId: "maths-13", subjectId: "maths", chapterNumber: 13, chapterTitle: "Surface Areas and Volumes",
    definitions: [
      "Cuboid: A rectangular box with six rectangular faces",
      "Cube: A cuboid with all edges equal",
      "Cylinder: Solid with circular bases and curved lateral surface",
      "Cone: Solid with circular base and vertex",
      "Sphere: Set of all points equidistant from a centre in space",
      "Hemisphere: Half of a sphere"
    ],
    formulas: [
      "Cuboid: TSA = 2(lb+bh+hl); LSA = 2h(l+b); Volume = l × b × h",
      "Cube: TSA = 6a²; LSA = 4a²; Volume = a³",
      "Cylinder: TSA = 2πr(r+h); CSA = 2πrh; Volume = πr²h",
      "Cone: TSA = πr(l+r); CSA = πrl; Volume = (1/3)πr²h; l = √(r²+h²)",
      "Sphere: TSA = 4πr²; Volume = (4/3)πr³",
      "Hemisphere: CSA = 2πr²; TSA = 3πr²; Volume = (2/3)πr³"
    ],
    keyPoints: [
      "The volume of a cube with diagonal d is d³/(3√3)",
      "A cylinder, cone, and sphere having the same radius and height: Volume ratio is 3:1:2",
      "When a cone is melted and recast into a sphere, volume remains the same",
      "The CSA of a hemisphere is half the surface area of a sphere",
      "The slant height of a cone is related to radius and height by Pythagoras theorem: l² = r² + h²",
      "For a hollow cylinder, subtract the inner surface/volume from the outer"
    ],
    summary: "This chapter covers surface areas and volumes of cuboids, cubes, cylinders, cones, spheres, and hemispheres. It includes total surface area, curved surface area, and volume formulas for each shape, along with their applications."
  },
  {
    chapterId: "maths-14", subjectId: "maths", chapterNumber: 14, chapterTitle: "Statistics",
    definitions: [
      "Data: Facts or figures collected with a definite purpose",
      "Primary Data: Collected by the investigator personally",
      "Secondary Data: Collected by someone else and used by another",
      "Raw Data: Ungrouped data in original form",
      "Grouped Data: Data organized in class intervals",
      "Frequency: Number of times a value occurs",
      "Class Interval: Range of values grouped together",
      "Class Mark: Midpoint of a class interval"
    ],
    formulas: [
      "Mean of raw data = Sum of all observations / Number of observations",
      "Mean of ungrouped data (with frequencies) = Σ(fᵢxᵢ) / Σfᵢ",
      "Mean of grouped data (Direct Method) = Σ(fᵢxᵢ) / Σfᵢ where xᵢ = class mark",
      "Assumed Mean Method: Mean = a + Σ(fᵢdᵢ)/Σfᵢ where dᵢ = xᵢ - a",
      "Step Deviation Method: Mean = a + h × Σ(fᵢuᵢ)/Σfᵢ where uᵢ = (xᵢ-a)/h",
      "Mode = l + [(f₁-f₀)/(2f₁-f₀-f₂)] × h (for grouped data)",
      "Median = l + [(n/2-cf)/f] × h (for grouped data)"
    ],
    keyPoints: [
      "Bar graphs, histograms, and frequency polygons are used to represent data visually",
      "A histogram has no gaps between bars (unlike bar graphs)",
      "A frequency polygon is created by joining midpoints of histogram tops",
      "The mean is affected by extreme values; the median is not",
      "The mode is the value that appears most frequently",
      "The median divides data into two equal halves",
      "In a symmetrical distribution, mean = median = mode",
      "The cumulative frequency table helps find the median"
    ],
    summary: "This chapter introduces data collection, presentation, and analysis. It covers graphical representations (bar graphs, histograms, frequency polygons) and measures of central tendency: mean, median, and mode for both ungrouped and grouped data."
  },
  {
    chapterId: "maths-15", subjectId: "maths", chapterNumber: 15, chapterTitle: "Probability",
    definitions: [
      "Experiment: An action with well-defined outcomes",
      "Trial: A single performance of an experiment",
      "Event: A collection of outcomes of an experiment",
      "Favourable Outcomes: Outcomes that satisfy the event",
      "Sample Space: Set of all possible outcomes"
    ],
    formulas: [
      "Probability of an event E: P(E) = Number of favourable outcomes / Total number of outcomes",
      "P(E) + P(not E) = 1",
      "0 ≤ P(E) ≤ 1",
      "P(certain event) = 1; P(impossible event) = 0"
    ],
    keyPoints: [
      "Probability is an experimental (empirical) approach in Class 9",
      "The sum of probabilities of all outcomes in an experiment is 1",
      "Probability of an event lies between 0 and 1 inclusive",
      "An event with probability 0 is impossible; with probability 1 is certain",
      "As the number of trials increases, the experimental probability approaches the theoretical probability",
      "The probability of an event and its complement always sum to 1"
    ],
    summary: "This chapter introduces probability through an experimental approach. It defines events, favourable outcomes, sample space, and the formula for calculating probability. The chapter emphasizes that probability values always lie between 0 and 1."
  },

  // ==================== SCIENCE ====================
  {
    chapterId: "science-1", subjectId: "science", chapterNumber: 1, chapterTitle: "Matter in Our Surroundings",
    definitions: [
      "Matter: Anything that occupies space and has mass",
      "Solid State: Definite shape and volume, particles closely packed",
      "Liquid State: Definite volume but no definite shape, particles loosely packed",
      "Gaseous State: Neither definite shape nor volume, particles far apart",
      "Melting Point: Temperature at which solid changes to liquid",
      "Boiling Point: Temperature at which liquid changes to gas",
      "Sublimation: Direct conversion of solid to gas without passing through liquid state"
    ],
    formulas: [
      "Effect of temperature: Increase in temperature increases kinetic energy of particles",
      "Effect of pressure: Increase in pressure decreases volume (for gases)"
    ],
    keyPoints: [
      "The three states of matter are interconvertible by changing temperature and pressure",
      "Diffusion is fastest in gases, slowest in solids",
      "Evaporation causes cooling because high-energy particles escape",
      "The rate of evaporation increases with surface area, temperature, wind speed, and decreases with humidity",
      "Latent heat of fusion: Heat required to convert 1 kg solid to liquid at its melting point",
      "Latent heat of vaporization: Heat required to convert 1 kg liquid to gas at its boiling point",
      "Plasma and Bose-Einstein condensate are states of matter beyond the three common states"
    ],
    summary: "This chapter introduces the three states of matter, their properties, how they interconvert, and factors affecting these changes. It covers diffusion, evaporation, latent heat, and the kinetic theory of matter."
  },
  {
    chapterId: "science-2", subjectId: "science", chapterNumber: 2, chapterTitle: "Is Matter Around Us Pure?",
    definitions: [
      "Pure Substance: Single type of particle with definite properties",
      "Mixture: Combination of two or more substances without chemical reaction",
      "Homogeneous Mixture: Uniform composition throughout (solution)",
      "Heterogeneous Mixture: Non-uniform composition (suspension, colloid)",
      "Solution: Homogeneous mixture of solute and solvent",
      "Suspension: Heterogeneous mixture where particles settle down",
      "Colloid: Heterogeneous mixture with particles that don't settle (Tyndall effect)"
    ],
    formulas: [
      "Concentration of solution = (Mass of solute / Mass of solution) × 100",
      "Concentration in g/L = Mass of solute (g) / Volume of solution (L)"
    ],
    keyPoints: [
      "Elements and compounds are pure substances; mixtures are impure",
      "Solutions can be dilute or concentrated; saturated or unsaturated",
      "Tyndall effect is shown by colloids but not by true solutions",
      "Centrifugation separates mixtures based on density differences",
      "Chromatography separates components based on differential movement",
      "Distillation separates miscible liquids based on boiling point differences",
      "Fractional distillation separates petroleum into its components",
      "Crystallization purifies solids by forming crystals from a saturated solution"
    ],
    summary: "This chapter explains pure substances vs mixtures, types of mixtures (solutions, suspensions, colloids), and separation techniques like filtration, evaporation, distillation, chromatography, and crystallization."
  },
  {
    chapterId: "science-3", subjectId: "science", chapterNumber: 3, chapterTitle: "Atoms and Molecules",
    definitions: [
      "Atom: Smallest unit of an element that can exist independently",
      "Molecule: Group of two or more atoms chemically bonded together",
      "Atomic Mass Unit (u): 1/12th the mass of a carbon-12 atom",
      "Molecular Mass: Sum of atomic masses of all atoms in a molecule",
      "Formula Unit Mass: Sum of atomic masses in a formula unit of an ionic compound",
      "Mole: Amount of substance containing 6.022 × 10²³ particles (Avogadro's number)"
    ],
    formulas: [
      "Law of Conservation of Mass: Mass of reactants = Mass of products",
      "Law of Constant Proportions: A chemical compound always contains the same elements in fixed proportion by mass",
      "Number of moles = Given mass / Molar mass",
      "Number of particles = Number of moles × Avogadro's number (6.022 × 10²³)"
    ],
    keyPoints: [
      "Dalton's atomic theory proposed atoms as indivisible particles (later proved incomplete)",
      "The mass of one atom is too small to measure; hence atomic mass is relative",
      "The mole concept connects the microscopic world of atoms to measurable quantities",
      "1 mole of any substance contains 6.022 × 10²³ particles (Avogadro's constant)",
      "Molar mass of a substance in grams is numerically equal to its atomic/molecular mass in u",
      "Percentage composition of an element = (Mass of element in compound / Total mass) × 100"
    ],
    summary: "This chapter covers laws of chemical combination, Dalton's atomic theory, atoms, molecules, atomic and molecular masses, the mole concept, and Avogadro's number. It establishes quantitative relationships in chemical reactions."
  },
  {
    chapterId: "science-4", subjectId: "science", chapterNumber: 4, chapterTitle: "Structure of the Atom",
    definitions: [
      "Canal Rays: Positively charged radiations discovered by Goldstein",
      "Proton: Positively charged particle in the nucleus (discovered by Rutherford)",
      "Neutron: Neutral particle in the nucleus (discovered by Chadwick)",
      "Electron: Negatively charged particle revolving around the nucleus (discovered by J.J. Thomson)",
      "Nucleus: Dense central part of the atom containing protons and neutrons",
      "Valence Shell: Outermost shell of an atom",
      "Valence Electrons: Electrons in the valence shell",
      "Atomic Number (Z): Number of protons in the nucleus",
      "Mass Number (A): Sum of protons and neutrons in the nucleus"
    ],
    formulas: [
      "Number of protons = Atomic number (Z)",
      "Number of electrons = Number of protons (in neutral atom)",
      "Number of neutrons = Mass number (A) - Atomic number (Z)",
      "Maximum electrons in a shell = 2n² (where n = shell number)",
      "Valency = 8 - valence electrons (for elements with valence electrons > 4)",
      "Valency = valence electrons (for elements with valence electrons ≤ 4)"
    ],
    keyPoints: [
      "J.J. Thomson proposed the plum pudding model (electrons embedded in positive sphere)",
      "Rutherford's gold foil experiment led to the nuclear model of the atom",
      "Rutherford's model couldn't explain atomic stability and line spectra",
      "Bohr's model proposed electrons revolve in fixed circular orbits (shells) with specific energy",
      "The maximum number of electrons in orbits is 2, 8, 18, 32 (K, L, M, N shells)",
      "Valency determines an element's combining capacity with other elements",
      "Isotopes are atoms of the same element with different mass numbers (same Z, different A)",
      "Isobars are atoms of different elements with the same mass number (different Z, same A)"
    ],
    summary: "This chapter covers the discovery of subatomic particles, Thomson's, Rutherford's, and Bohr's atomic models, electron distribution in shells, valency, atomic number, mass number, and the concepts of isotopes and isobars."
  },
  {
    chapterId: "science-5", subjectId: "science", chapterNumber: 5, chapterTitle: "The Fundamental Unit of Life",
    definitions: [
      "Cell: Basic structural and functional unit of all living organisms",
      "Prokaryotic Cell: Cell without a membrane-bound nucleus (e.g., bacteria)",
      "Eukaryotic Cell: Cell with a membrane-bound nucleus (e.g., plant, animal cells)",
      "Plasma Membrane: Outer selectively permeable membrane of the cell",
      "Cell Wall: Rigid outer layer in plant cells providing support",
      "Nucleus: Control centre of the cell containing genetic material (chromosomes)",
      "Mitochondria: Powerhouse of the cell; site of cellular respiration",
      "Chloroplast: Contains chlorophyll; site of photosynthesis in plant cells",
      "Ribosomes: Protein synthesis sites",
      "Golgi Apparatus: Packaging and transport of proteins",
      "Endoplasmic Reticulum (ER): Transport network; rough ER has ribosomes, smooth ER synthesizes lipids",
      "Lysosomes: Contain digestive enzymes; called 'suicide bags'"
    ],
    formulas: [],
    keyPoints: [
      "Robert Hooke discovered cells in cork (1665)",
      "Leeuwenhoek first observed living cells (bacteria, protozoa)",
      "Schleiden and Schwann proposed the cell theory",
      "The cell membrane is selectively permeable (controls what enters and exits)",
      "Osmosis is the movement of water across a semi-permeable membrane",
      "Plasmolysis occurs when a cell loses water and shrinks away from the cell wall",
      "Plant cells have cell wall, chloroplasts, and large vacuoles; animal cells don't",
      "Chromosomes carry genes which are the hereditary units",
      "Vacuoles in plant cells are large; in animal cells, they are small and temporary",
      "The nucleus contains nucleolus and chromatin network"
    ],
    summary: "This chapter introduces the cell as the basic unit of life. It describes cell structure, types of cells, cell organelles and their functions, the cell membrane and transport mechanisms, and differences between plant and animal cells."
  },
  {
    chapterId: "science-6", subjectId: "science", chapterNumber: 6, chapterTitle: "Tissues",
    definitions: [
      "Tissue: A group of similar cells performing a specific function",
      "Meristematic Tissue: Actively dividing tissue in plants (apical, lateral, intercalary)",
      "Permanent Tissue: Mature tissue that has lost the ability to divide (simple and complex)",
      "Parenchyma: Simple permanent tissue with thin walls; for photosynthesis and storage",
      "Collenchyma: Provides flexibility and mechanical support",
      "Sclerenchyma: Dead tissue with thick lignified walls; provides strength",
      "Xylem: Complex tissue for water and mineral transport (dead tissue)",
      "Phloem: Complex tissue for food transport (living tissue)"
    ],
    formulas: [],
    keyPoints: [
      "Plants have two main types of tissues: meristematic (growing) and permanent (mature)",
      "Meristematic tissue is found at growing tips (roots, shoots) and cambium",
      "Parenchyma cells are living with thin cell walls; collenchyma provides elasticity",
      "Sclerenchyma cells are dead with thick walls containing lignin",
      "Xylem is made of tracheids and vessels; phloem of sieve tubes and companion cells",
      "Animal tissues: epithelial, connective, muscular, and nervous tissue",
      "Epithelial tissue covers body surfaces and lines cavities",
      "Connective tissue includes blood, bone, cartilage, tendons, and ligaments",
      "Muscular tissue: striated (skeletal), smooth (involuntary), and cardiac (heart)",
      "Nervous tissue consists of neurons and glial cells for communication"
    ],
    summary: "This chapter explains plant and animal tissues, their types, structure, and functions. It covers meristematic and permanent tissues in plants, and epithelial, connective, muscular, and nervous tissues in animals."
  },
  {
    chapterId: "science-7", subjectId: "science", chapterNumber: 7, chapterTitle: "Diversity in Living Organisms",
    definitions: [
      "Biodiversity: Variety of living organisms on Earth",
      "Classification: Grouping organisms based on similarities and differences",
      "Taxonomy: Science of naming, defining, and classifying organisms",
      "Binomial Nomenclature: Two-part scientific naming system (Genus + species) by Linnaeus",
      "Phylum/ Division: Major taxonomic rank below kingdom"
    ],
    formulas: [],
    keyPoints: [
      "Five kingdom classification by Whittaker: Monera, Protista, Fungi, Plantae, Animalia",
      "Monera: Prokaryotic, unicellular (bacteria, blue-green algae)",
      "Protista: Eukaryotic, unicellular (amoeba, paramecium, euglena)",
      "Fungi: Heterotrophic, cell wall of chitin (yeast, mushroom, bread mold)",
      "Plantae: Eukaryotic, autotrophic, cell wall of cellulose",
      "Animalia: Eukaryotic, heterotrophic, no cell wall",
      "Vertebrates have a backbone; invertebrates don't",
      "Classes of vertebrates: Pisces, Amphibia, Reptilia, Aves, Mammalia",
      "The hierarchy of classification: Species → Genus → Family → Order → Class → Phylum → Kingdom"
    ],
    summary: "This chapter covers the basis of classification, the five-kingdom classification system by Whittaker, major groups of organisms, and the hierarchy of classification. It emphasizes biodiversity and the importance of classification for understanding relationships between organisms."
  },
  {
    chapterId: "science-8", subjectId: "science", chapterNumber: 8, chapterTitle: "Motion",
    definitions: [
      "Distance: Total path length travelled by an object (scalar)",
      "Displacement: Shortest distance between initial and final position with direction (vector)",
      "Speed: Distance travelled per unit time; scalar quantity",
      "Velocity: Displacement per unit time; vector quantity",
      "Acceleration: Rate of change of velocity with time",
      "Uniform Motion: Equal distances in equal time intervals",
      "Non-uniform Motion: Unequal distances in equal time intervals",
      "Circular Motion: Motion along a circular path"
    ],
    formulas: [
      "Speed = Distance / Time",
      "Velocity = Displacement / Time",
      "Average speed = Total distance / Total time",
      "Average velocity = Total displacement / Total time",
      "Acceleration = (Final velocity - Initial velocity) / Time; a = (v-u)/t",
      "For uniform acceleration:",
      "  v = u + at",
      "  s = ut + ½at²",
      "  v² = u² + 2as",
      "  s = (u+v)t/2"
    ],
    keyPoints: [
      "Distance is always positive; displacement can be positive, negative, or zero",
      "Speed is always positive; velocity can be positive, negative, or zero",
      "For a body moving with uniform velocity, acceleration is zero",
      "The slope of a distance-time graph gives speed",
      "The slope of a velocity-time graph gives acceleration",
      "The area under a velocity-time graph gives displacement",
      "For an object starting from rest (u=0): v = at, s = ½at², v² = 2as",
      "In circular motion, speed may be constant but velocity changes due to changing direction",
      "Retardation (deceleration) is negative acceleration"
    ],
    summary: "This chapter introduces the concepts of distance, displacement, speed, velocity, and acceleration. It covers types of motion, equations of motion for uniformly accelerated bodies, and graphical representations of motion."
  },
  {
    chapterId: "science-9", subjectId: "science", chapterNumber: 9, chapterTitle: "Force and Laws of Motion",
    definitions: [
      "Force: Push or pull that can change the state of motion or shape of an object",
      "Inertia: Resistance of a body to change its state of rest or uniform motion",
      "Momentum: Product of mass and velocity (p = mv); vector quantity",
      "Impulse: Product of force and time for which it acts; equals change in momentum"
    ],
    formulas: [
      "Newton's First Law: A body remains in its state unless acted upon by an external force",
      "Newton's Second Law: F = ma (Force = mass × acceleration)",
      "Newton's Third Law: Every action has an equal and opposite reaction",
      "Momentum (p) = mass (m) × velocity (v)",
      "Force = Rate of change of momentum = (mv - mu)/t",
      "Law of Conservation of Momentum: Total momentum before collision = Total momentum after collision",
      "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂"
    ],
    keyPoints: [
      "Inertia depends on mass; greater mass means greater inertia",
      "There are three types of inertia: inertia of rest, inertia of motion, and inertia of direction",
      "Momentum is conserved in an isolated system (no external force)",
      "Action and reaction forces act on different bodies, so they don't cancel each other",
      "Examples of Newton's third law: walking, swimming, rocket propulsion, recoil of gun",
      "Friction is a force that opposes relative motion between surfaces in contact",
      "The SI unit of force is Newton (N); 1 N = 1 kg·m/s²",
      "The CGS unit of force is dyne; 1 N = 10⁵ dyne"
    ],
    summary: "This chapter covers Newton's three laws of motion, the concept of inertia, momentum, conservation of momentum, and applications of these laws. It also discusses friction and its effects on motion."
  },
  {
    chapterId: "science-10", subjectId: "science", chapterNumber: 10, chapterTitle: "Gravitation",
    definitions: [
      "Gravitation: Force of attraction between any two objects with mass",
      "Gravity: Force of attraction by Earth on objects near its surface",
      "Acceleration due to Gravity (g): Acceleration produced by Earth's gravity; g = 9.8 m/s²",
      "Free Fall: Motion under gravity with no other forces acting",
      "Mass: Quantity of matter in a body; scalar; constant everywhere",
      "Weight: Force with which Earth attracts a body; vector; varies with location"
    ],
    formulas: [
      "Universal Law of Gravitation: F = G(Mm)/r² where G = 6.67 × 10⁻¹¹ N·m²/kg²",
      "g = GM/R² (on Earth's surface)",
      "Weight = mass × g; W = mg",
      "For free fall: v = gt; h = ½gt²; v² = 2gh",
      "Density = Mass / Volume",
      "Relative density = Density of substance / Density of water"
    ],
    keyPoints: [
      "The value of g is maximum at poles and minimum at the equator",
      "g decreases with altitude and depth from Earth's surface",
      "Mass is constant everywhere; weight changes with location (g varies)",
      "The moon has about 1/6th Earth's gravity; weight on moon = weight on Earth / 6",
      "Thrust is the force acting perpendicular to a surface",
      "Pressure = Thrust / Area; unit is Pascal (Pa)",
      "Buoyant force equals the weight of fluid displaced (Archimedes' Principle)",
      "An object floats if its density is less than the fluid's density",
      "An object sinks if its density is greater than the fluid's density"
    ],
    summary: "This chapter covers the universal law of gravitation, acceleration due to gravity, free fall, mass vs weight, thrust and pressure, Archimedes' principle, buoyancy, and relative density."
  },
  {
    chapterId: "science-11", subjectId: "science", chapterNumber: 11, chapterTitle: "Work and Energy",
    definitions: [
      "Work: Done when a force causes displacement; W = F·s·cosθ",
      "Energy: Ability to do work; measured in joules",
      "Kinetic Energy: Energy due to motion; KE = ½mv²",
      "Potential Energy: Energy due to position or configuration; PE = mgh",
      "Mechanical Energy: Sum of kinetic and potential energy",
      "Power: Rate of doing work; P = W/t; unit is watt (W)"
    ],
    formulas: [
      "Work (W) = Force (F) × Displacement (s) × cosθ",
      "When force and displacement are in same direction: W = F × s",
      "Kinetic Energy = ½mv²",
      "Potential Energy (gravitational) = mgh",
      "Total Mechanical Energy = KE + PE",
      "Power = Work / Time; 1 watt = 1 joule/second",
      "1 kilowatt (kW) = 1000 W",
      "Commercial unit of energy: 1 kWh = 3.6 × 10⁶ J"
    ],
    keyPoints: [
      "Work is zero when there is no displacement, or force is perpendicular to displacement",
      "Positive work: force and displacement in same direction",
      "Negative work: force and displacement in opposite directions (e.g., friction)",
      "The law of conservation of energy: Energy cannot be created or destroyed, only transformed",
      "When an object falls freely, PE decreases and KE increases, but total energy is conserved",
      "At maximum height, velocity is zero so KE = 0 and PE is maximum",
      "At ground level, PE = 0 and KE is maximum",
      "1 horsepower (hp) = 746 watts"
    ],
    summary: "This chapter covers the concepts of work, energy, and power. It explains kinetic and potential energy, the work-energy theorem, the law of conservation of energy, and the commercial unit of energy (kilowatt-hour)."
  },
  {
    chapterId: "science-12", subjectId: "science", chapterNumber: 12, chapterTitle: "Sound",
    definitions: [
      "Sound: A form of energy that produces the sensation of hearing",
      "Vibration: To and fro motion of an object about its mean position",
      "Amplitude: Maximum displacement from mean position",
      "Frequency: Number of vibrations per second; measured in Hertz (Hz)",
      "Wavelength: Distance between two consecutive compressions or rarefactions",
      "Time Period: Time for one complete vibration; T = 1/f",
      "Pitch: Characteristic determined by frequency (higher frequency = higher pitch)",
      "Loudness: Characteristic determined by amplitude",
      "Quality (Timbre): Characteristic that distinguishes sounds of same pitch and loudness"
    ],
    formulas: [
      "Speed of wave = Wavelength × Frequency; v = λf",
      "Time period (T) = 1 / Frequency (f)",
      "Speed of sound in air at 20°C ≈ 343 m/s",
      "The speed of sound depends on the medium and temperature"
    ],
    keyPoints: [
      "Sound requires a medium to travel; it cannot travel through vacuum",
      "Sound travels fastest through solids, then liquids, then gases",
      "Sound is produced by vibrations and travels as longitudinal waves",
      "Compressions are regions of high pressure; rarefactions are regions of low pressure",
      "The human ear can hear sounds between 20 Hz and 20,000 Hz",
      "Infrasound: below 20 Hz; Ultrasound: above 20,000 Hz",
      "Echo is reflected sound heard after a delay of at least 0.1 seconds",
      "Sonar uses ultrasound to detect underwater objects",
      "Bats use ultrasound (echolocation) for navigation and hunting"
    ],
    summary: "This chapter covers the production and propagation of sound, characteristics of sound waves (amplitude, frequency, wavelength), the human ear's range, applications of ultrasound and infrasound, echo, reverberation, and the sonar technique."
  },
  {
    chapterId: "science-13", subjectId: "science", chapterNumber: 13, chapterTitle: "Why Do We Fall Ill?",
    definitions: [
      "Health: State of physical, mental, and social well-being",
      "Disease: Any condition that impairs normal functioning of the body",
      "Pathogen: Disease-causing microorganism (bacteria, virus, fungi, protozoa, worms)",
      "Infectious Disease: Can spread from person to person (communicable)",
      "Non-infectious Disease: Cannot spread; caused by internal factors or lifestyle",
      "Immunity: Ability of the body to resist infection",
      "Vaccination: Administration of vaccine to stimulate immunity"
    ],
    formulas: [],
    keyPoints: [
      "The signs and symptoms of a disease depend on the target organ or tissue",
      "Common infectious diseases: tuberculosis, malaria, typhoid, dengue, common cold",
      "Common non-infectious diseases: diabetes, hypertension, cancer, asthma",
      "The immune system includes white blood cells, antibodies, and lymph nodes",
      "Vaccines contain weakened or killed pathogens that stimulate antibody production",
      "Personal hygiene, clean water, sanitation, and balanced diet prevent diseases",
      "Vectors transmit diseases: mosquito (malaria, dengue), housefly (typhoid), rat flea (plague)",
      "Antibiotics are effective against bacteria but not viruses",
      "Pulse Polio Programme and National Health Mission are major health initiatives in India"
    ],
    summary: "This chapter discusses health and disease, types of diseases, their causes, the immune system, principles of treatment and prevention, and public health initiatives. It emphasizes hygiene, vaccination, and balanced nutrition for maintaining good health."
  },
  {
    chapterId: "science-14", subjectId: "science", chapterNumber: 14, chapterTitle: "Natural Resources",
    definitions: [
      "Natural Resources: Resources provided by nature that are useful to humans",
      "Renewable Resources: Can be replenished naturally (air, water, sunlight)",
      "Non-renewable Resources: Cannot be replenished quickly (fossil fuels, minerals)",
      "Biogeochemical Cycles: Natural pathways by which essential elements circulate",
      "Greenhouse Effect: Trapping of heat by greenhouse gases in the atmosphere"
    ],
    formulas: [],
    keyPoints: [
      "The three main biogeochemical cycles are: water cycle, nitrogen cycle, and carbon cycle",
      "Air is a mixture of gases: nitrogen (78%), oxygen (21%), carbon dioxide (0.03%), and others",
      "Oxygen is essential for respiration and combustion; nitrogen is needed for protein synthesis",
      "Carbon dioxide is used by plants for photosynthesis; excess CO₂ causes global warming",
      "Water covers about 71% of Earth's surface but only 2.5% is freshwater",
      "Soil consists of rock particles, humus, water, air, and living organisms",
      "Deforestation leads to soil erosion, loss of biodiversity, and climate change",
      "The ozone layer protects Earth from harmful UV radiation",
      "CFCs (chlorofluorocarbons) deplete the ozone layer",
      "The three R's for conservation: Reduce, Reuse, Recycle"
    ],
    summary: "This chapter covers natural resources, the atmosphere and its components, the role of air, water, and soil in sustaining life, biogeochemical cycles, the ozone layer, pollution, and conservation strategies."
  },
  {
    chapterId: "science-15", subjectId: "science", chapterNumber: 15, chapterTitle: "Improvement in Food Resources",
    definitions: [
      "Animal Husbandry: Scientific management of animal livestock",
      "Crop Variety Improvement: Developing high-yield, disease-resistant crop varieties",
      "Organic Farming: Farming without synthetic chemicals or fertilizers",
      "Manure: Natural fertilizer from decomposed organic matter",
      "Fertilizer: Chemical substance supplying nutrients to plants",
      "Irrigation: Artificial supply of water to crops"
    ],
    formulas: [],
    keyPoints: [
      "The major crops in India are cereals (wheat, rice), pulses, oilseeds, and sugarcane",
      "Crop improvement aims for higher yield, better quality, disease resistance, and wider adaptability",
      "Methods of crop improvement: hybridization, genetic modification, and mutation breeding",
      "Macronutrients needed by plants: nitrogen (N), phosphorus (P), potassium (K)",
      "Manures improve soil texture and water retention; fertilizers provide specific nutrients quickly",
      "Irrigation methods: canals, wells, tanks, drip irrigation, and sprinkler systems",
      "Mixed farming: Growing crops and raising animals together",
      "Intercropping: Growing two or more crops simultaneously on the same field",
      "Crop rotation: Growing different crops in succession on the same field to maintain soil fertility",
      "Animal husbandry includes cattle, poultry, fish (pisciculture), and beekeeping (apiculture)",
      "Fisheries provide employment and nutritional security; marine and inland fisheries"
    ],
    summary: "This chapter discusses methods to improve crop production and animal husbandry. It covers crop variety improvement, nutrient management, irrigation, farming practices, and various aspects of animal husbandry including cattle, poultry, fisheries, and beekeeping."
  },

  // ==================== SOCIAL SCIENCE ====================
  {
    chapterId: "ss-1", subjectId: "social-science", chapterNumber: 1, chapterTitle: "The French Revolution",
    definitions: [
      "Ancient Regime: The socio-political system in France before 1789",
      "Estate System: French society divided into three estates (clergy, nobility, commoners)",
      "Tithe: Tax paid to the Church (1/10th of agricultural produce)",
      "Taille: Tax paid directly to the state",
      "Subsistence Crisis: Extreme scarcity of food affecting survival"
    ],
    formulas: [],
    keyPoints: [
      "Causes: Social inequality, financial crisis, enlightenment ideas, role of middle class",
      "First Estate: Clergy (0.5% population, 10% land); Second Estate: Nobility (1.5% population, 25% land)",
      "Third Estate: 98% population, included peasants, artisans, workers, middle class",
      "The Estate General met in May 1789 at Versailles after 175 years",
      "The Third Estate broke away and formed the National Assembly on June 20, 1789 (Tennis Court Oath)",
      "Bastille was stormed on July 14, 1789 (now celebrated as Bastille Day)",
      "Declaration of Rights of Man and Citizen adopted in August 1789",
      "A constitutional monarchy was established; Louis XVI executed in 1793",
      "The Reign of Terror (1793-94) led by Robespierre resulted in mass executions",
      "Impact: End of absolute monarchy, rise of republicanism, inspiration for other revolutions",
      "Napoleon Bonaparte emerged as military leader and later became Emperor"
    ],
    summary: "The French Revolution (1789-1799) was a period of radical political and social change in France. It overthrew the monarchy, ended feudal privileges, and established republicanism. The revolution was driven by social inequality, Enlightenment ideas, and economic crisis. Its impacts extended far beyond France, inspiring democratic movements worldwide."
  },
  {
    chapterId: "ss-2", subjectId: "social-science", chapterNumber: 2, chapterTitle: "Socialism in Europe and the Russian Revolution",
    definitions: [
      "Socialism: An ideology advocating social ownership of means of production",
      "Capitalism: Economic system based on private ownership and profit motive",
      "Bolsheviks: Radical socialist faction led by Lenin",
      "Mensheviks: Moderate socialist faction",
      "Soviet: Council of workers, peasants, and soldiers"
    ],
    formulas: [],
    keyPoints: [
      "Socialist ideas emerged in Europe as a response to the inequalities of capitalism",
      "Key socialist thinkers: Robert Owen, Louis Blanc, Karl Marx, Friedrich Engels",
      "Marx and Engels wrote 'The Communist Manifesto' (1848)",
      "Russia under Tsar Nicholas II was an autocracy with widespread poverty",
      "The 1905 Revolution failed but led to the creation of the Duma (parliament)",
      "Russia entered World War I in 1914, causing immense hardship",
      "February Revolution (1917): Tsar abdicated, provisional government formed",
      "October Revolution (1917): Bolsheviks under Lenin seized power",
      "The Bolsheviks made peace with Germany (Treaty of Brest-Litovsk, 1918)",
      "Civil war followed (1918-1920): Reds (Bolsheviks) vs Whites (anti-Bolsheviks)",
      "USSR (Union of Soviet Socialist Republics) formed in 1922",
      "Impact: First socialist state, inspiration for communist movements globally, industrialization"
    ],
    summary: "This chapter traces the rise of socialist ideas in Europe and their realization through the Russian Revolution of 1917. The Bolsheviks under Lenin established the world's first socialist state, transforming Russia into the USSR and inspiring communist movements worldwide."
  },
  {
    chapterId: "ss-3", subjectId: "social-science", chapterNumber: 3, chapterTitle: "Nazism and the Rise of Hitler",
    definitions: [
      "Nazism: Political ideology of the Nazi Party led by Adolf Hitler",
      "Weimar Republic: Democratic government in Germany after WWI (1919-1933)",
      "Reichstag: German parliament",
      "Gestapo: Nazi secret police",
      "Concentration Camps: Detention centers for political opponents and minorities",
      "Holocaust: Systematic genocide of 6 million Jews by the Nazi regime"
    ],
    formulas: [],
    keyPoints: [
      "Germany was defeated in WWI and forced to sign the Treaty of Versailles (1919)",
      "The Treaty imposed harsh penalties: war guilt clause, reparations, territorial losses, military restrictions",
      "The Weimar Republic faced economic crises, hyperinflation, and political instability",
      "The Great Depression (1929) devastated Germany's economy",
      "Hitler promised to restore German pride and economic prosperity",
      "Nazi ideology: Racial superiority (Aryan race), anti-Semitism, Lebensraum (living space)",
      "Hitler became Chancellor in 1933 and established a dictatorship",
      "The Reichstag Fire (1933) led to suspension of civil liberties",
      "Nazism controlled all aspects of life: media, education, youth (Hitler Youth)",
      "The Nuremberg Laws (1935) stripped Jews of citizenship and rights",
      "Kristallnacht (1938): Widespread attacks on Jewish homes and businesses",
      "WWII began in 1939 with Germany's invasion of Poland; Nazi defeat in 1945"
    ],
    summary: "This chapter examines the rise of Nazism in Germany after WWI. Hitler exploited economic crises, national humiliation, and political instability to seize power, establishing a totalitarian regime that led to WWII and the Holocaust."
  },
  {
    chapterId: "ss-4", subjectId: "social-science", chapterNumber: 4, chapterTitle: "Forest Society and Colonialism",
    definitions: [
      "Deforestation: Large-scale clearing of forests for agriculture, railways, shipbuilding",
      "Forest Act: British laws to control and manage forests in India",
      "Reserved Forests: Areas where local people were denied access",
      "Village Forests: Areas where local people had limited rights",
      "Commercial Forestry: Forest management for profit (timber, plantation crops)"
    ],
    formulas: [],
    keyPoints: [
      "Rise of commercial forestry under British rule changed traditional forest use",
      "Before British rule, forests were managed by local communities",
      "The Forest Act of 1865 and 1878 restricted village access to forests",
      "Shifting cultivation (jhum) was banned; adivasis were displaced",
      "Railways and shipbuilding required large quantities of timber",
      "Tea and coffee plantations replaced forests in many areas",
      "The Bastar Rebellion (1910) was a tribal uprising against colonial forest policies",
      "The Java War (1825-30) in Indonesia was led by Prince Diponegoro against Dutch plantation policies",
      "Scientific forestry emphasized monoculture plantations over biodiversity",
      "Forest management under colonial rule prioritized revenue over sustainability",
      "Indigenous forest practices were more sustainable than colonial commercial forestry"
    ],
    summary: "This chapter explores how colonial rule transformed forest use in India and other colonies. Commercial forestry displaced traditional practices, restricted local access, and prioritized profit over sustainability, leading to tribal rebellions."
  },
  {
    chapterId: "ss-5", subjectId: "social-science", chapterNumber: 5, chapterTitle: "Pastoralists in the Modern World",
    definitions: [
      "Pastoralism: Way of life based on herding and raising livestock",
      "Transhumance: Seasonal movement of people with livestock between fixed summer and winter pastures",
      "Grazing Tax: Tax imposed on pastoralists for using grazing lands",
      "Criminal Tribes Act (1871): British law classifying nomadic communities as criminals",
      "Reserved Grazing Lands: Areas set aside for colonial use, excluding pastoralists"
    ],
    formulas: [],
    keyPoints: [
      "Pastoralists move with their herds in search of pasture and water",
      "Indian pastoralists: Gujjars, Bakarwals, Gaddis, Raikas, Banjaras, Dhangars",
      "Colonial rule restricted grazing lands and imposed grazing taxes",
      "The Criminal Tribes Act labeled nomadic communities as criminals",
      "African pastoralists (Maasai) lost grazing lands to colonial settlers",
      "Maasailand was divided between British Kenya and German Tanganyika",
      "National parks and game reserves restricted Maasai grazing areas",
      "Modern challenges: loss of pastures, privatization, agricultural expansion",
      "Despite challenges, pastoralists continue to adapt their traditional practices",
      "Pastoralism remains an important livelihood strategy in arid regions"
    ],
    summary: "This chapter examines how pastoral communities in India and Africa were affected by colonial policies and modernization. Restrictions on grazing lands, taxes, and displacement threatened pastoral livelihoods, yet pastoralists adapted and persisted."
  },
  {
    chapterId: "ss-6", subjectId: "social-science", chapterNumber: 6, chapterTitle: "Peasants and Farmers",
    definitions: [
      "Serfdom: Condition of peasants bound to the land and lord in feudal Europe",
      "Enclosure Movement: Fencing of common lands in England for private farming",
      "Dust Bowl: Region in the US Great Plains devastated by soil erosion in the 1930s",
      "Commercial Grain Farming: Large-scale farming for market sale",
      "Collectivization: Consolidation of individual farms into collective farms in USSR"
    ],
    formulas: [],
    keyPoints: [
      "The enclosure movement in England (16th-18th centuries) displaced peasant farmers",
      "Enclosed lands were used for commercial sheep rearing and grain farming",
      "Poor peasants became landless labourers or migrated to towns",
      "In the USA, westward expansion opened new lands for wheat farming",
      "The invention of mechanical reapers and tractors revolutionized agriculture",
      "The Great Depression (1930s) caused wheat prices to collapse",
      "The Dust Bowl resulted from over-farming and drought in the US plains",
      "In India, the British introduced commercial crops: indigo, cotton, sugarcane, tea",
      "The Indigo Revolt (1859-60) in Bengal protested forced indigo cultivation",
      "Champaran Satyagraha (1917): Gandhi's first successful peasant movement in India"
    ],
    summary: "This chapter compares peasant and farmer experiences across different regions and periods. It covers the enclosure movement in England, American commercial farming, the Dust Bowl, and colonial agricultural policies in India."
  },
  {
    chapterId: "ss-7", subjectId: "social-science", chapterNumber: 7, chapterTitle: "India – Size and Location",
    definitions: [
      "Indian Standard Time (IST): 82°30'E longitude; 5 hours 30 minutes ahead of GMT",
      "Tropic of Cancer: 23°30'N latitude passes through India",
      "Continent: Large landmass; India is part of Asia",
      "Peninsula: Land surrounded by water on three sides"
    ],
    formulas: [],
    keyPoints: [
      "India's area: 3.28 million sq km (2.4% of world's area); 7th largest country",
      "Land boundary: 15,200 km; Coastline: 7,516.6 km",
      "Latitudinal extent: 8°4'N to 37°6'N; Longitudinal extent: 68°7'E to 97°25'E",
      "The Tropic of Cancer divides India into tropical and subtropical zones",
      "India has 28 states and 8 Union Territories",
      "Neighbouring countries: Pakistan, Afghanistan, China, Nepal, Bhutan, Bangladesh, Myanmar, Sri Lanka, Maldives",
      "The Andaman and Nicobar Islands lie in the Bay of Bengal; Lakshadweep in the Arabian Sea",
      "The Himalayas in the north, the Indian Ocean in the south, the Arabian Sea in the west, and the Bay of Bengal in the east"
    ],
    summary: "This chapter describes India's geographical location, size, latitudinal and longitudinal extent, neighbouring countries, and the significance of the Tropic of Cancer passing through it."
  },
  {
    chapterId: "ss-8", subjectId: "social-science", chapterNumber: 8, chapterTitle: "Physical Features of India",
    definitions: [
      "Himalayas: Young fold mountains forming India's northern boundary",
      "Northern Plains: Fertile alluvial plains formed by Indus, Ganga, Brahmaputra rivers",
      "Peninsular Plateau: Ancient crystalline tableland south of the Narmada",
      "Coastal Plains: Narrow strips of land along the Arabian Sea and Bay of Bengal",
      "Islands: Andaman & Nicobar (volcanic origin), Lakshadweep (coral origin)"
    ],
    formulas: [],
    keyPoints: [
      "India has six major physical divisions: Himalayas, Northern Plains, Peninsular Plateau, Indian Desert, Coastal Plains, Islands",
      "The Himalayas consist of three parallel ranges: Great Himalayas (Himadri), Middle Himalayas (Himachal), Shiwaliks",
      "Highest peak: K2 (Godwin Austin) 8611m (in POK); Kanchenjunga 8598m (in India)",
      "The Northern Plains are divided into Bhabar, Terai, Bhangar, and Khadar regions",
      "The Peninsular Plateau includes the Malwa Plateau, Deccan Traps, and Western/Eastern Ghats",
      "The Western Ghats are higher than the Eastern Ghats; Anai Mudi is the highest peak (2695m)",
      "The Thar Desert lies in western Rajasthan; the Chotanagpur Plateau is mineral-rich",
      "The Western Coastal Plain is narrow; the Eastern Coastal Plain is wider",
      "The Andaman and Nicobar Islands have volcanic activity; Barren Island is active"
    ],
    summary: "This chapter describes the major physical features of India: the Himalayan mountains, the Northern Plains, the Peninsular Plateau, the Indian Desert, the coastal plains, and the islands. Each division has distinct geological, climatic, and economic characteristics."
  },
  {
    chapterId: "ss-9", subjectId: "social-science", chapterNumber: 9, chapterTitle: "Drainage",
    definitions: [
      "Drainage Basin: Area drained by a single river system",
      "Water Divide: Elevated boundary separating two drainage basins",
      "Perennial Rivers: Flow throughout the year (Himalayan rivers)",
      "Seasonal Rivers: Flow only during monsoon (Peninsular rivers)",
      "Tributary: Smaller river joining the main river",
      "Distributary: Branch of a river flowing away from the main stream"
    ],
    formulas: [],
    keyPoints: [
      "The Indian drainage system consists of Himalayan rivers and Peninsular rivers",
      "Major Himalayan rivers: Indus, Ganga, Brahmaputra (perennial, fed by glaciers)",
      "The Indus rises in Tibet, flows through Kashmir and Pakistan; tributaries: Jhelum, Chenab, Ravi, Beas, Sutlej",
      "The Ganga rises in Gangotri Glacier; tributaries: Yamuna, Ghaghara, Gandak, Kosi",
      "The Brahmaputra rises in Tibet (Tsangpo), enters India in Arunachal Pradesh",
      "Major Peninsular rivers: Godavari, Krishna, Kaveri, Mahanadi, Narmada, Tapi",
      "Narmada and Tapi flow westwards into the Arabian Sea; others flow eastwards",
      "Godavari is the longest Peninsular river; called 'Dakshina Ganga'",
      "Lakes: Wular (largest freshwater), Dal, Chilika (lagoon), Pulicat, Sambhar (salt water)",
      "Rivers are vital for irrigation, hydroelectric power, transport, and fisheries"
    ],
    summary: "This chapter covers India's river systems, divided into Himalayan and Peninsular rivers. It describes major rivers, their tributaries, lakes, and the importance of rivers for agriculture, industry, and daily life."
  },
  {
    chapterId: "ss-10", subjectId: "social-science", chapterNumber: 10, chapterTitle: "Climate",
    definitions: [
      "Climate: Average weather conditions over a long period",
      "Monsoon: Seasonal reversal of winds bringing rainfall",
      "Jet Stream: Fast-flowing air currents in the upper atmosphere",
      "Coriolis Force: Effect of Earth's rotation on wind direction",
      "Western Disturbances: Cyclonic storms from the Mediterranean affecting northwest India in winter",
      "EL Nino: Periodic warming of Pacific Ocean affecting global weather patterns"
    ],
    formulas: [],
    keyPoints: [
      "India has a monsoon-type climate due to its latitudinal location, Himalayan barrier, and distribution of land and water",
      "Seasons in India: Winter (Dec-Feb), Summer (Mar-May), Monsoon (June-Sept), Retreating Monsoon (Oct-Nov)",
      "The monsoon winds originate over the Indian Ocean and are divided into Arabian Sea branch and Bay of Bengal branch",
      "The Tamil Nadu coast receives winter rainfall from the retreating monsoon",
      "The northeast monsoon brings rain to Tamil Nadu, Karnataka, and Andhra Pradesh",
      "The southwest monsoon is the main rainy season for most of India",
      "Mawsynram and Cherrapunji receive the highest rainfall in India",
      "Western Rajasthan receives the least rainfall (desert climate)",
      "The Himalayas block cold winds from Central Asia and trap monsoon winds",
      "Climate influences agriculture, vegetation, clothing, food habits, and festivals in India"
    ],
    summary: "This chapter explains India's monsoon climate, factors affecting it, the mechanism of monsoons, and the distribution of rainfall across India. It also discusses the influence of climate on Indian life and economy."
  },
  {
    chapterId: "ss-11", subjectId: "social-science", chapterNumber: 11, chapterTitle: "Natural Vegetation and Wildlife",
    definitions: [
      "Natural Vegetation: Plant life growing without human intervention",
      "Flora: Plant species of a region; Fauna: Animal species of a region",
      "Tropical Rainforest: Dense forest with high rainfall throughout the year",
      "Deciduous Forest: Forest where trees shed leaves seasonally",
      "Thorn Forest: Scrubland with thorny bushes adapted to dry conditions",
      "Tundra: Cold-region vegetation with mosses and lichens"
    ],
    formulas: [],
    keyPoints: [
      "India has five types of natural vegetation: Tropical Rainforest, Tropical Deciduous, Tropical Thorn, Montane, and Mangrove",
      "Tropical Evergreen Forests: Western Ghats, Northeast; trees: ebony, mahogany, rosewood",
      "Tropical Deciduous Forests: Most widespread; teak, sal, bamboo; divided into moist and dry",
      "Thorn Forests: Rajasthan, Gujarat, Haryana; acacia, babool, cactus",
      "Montane Forests: Himalayan slopes; alpine vegetation above 3600m",
      "Mangrove Forests: Sundarbans (largest delta), Andaman coast",
      "Wildlife includes elephants, tigers, lions, rhinos, deer, crocodiles, peacocks",
      "India has 99 national parks, 515 wildlife sanctuaries, and 18 biosphere reserves",
      "Project Tiger (1973) and Project Elephant protect endangered species",
      "The Wildlife Protection Act (1972) banned hunting of endangered species",
      "Sacred groves are community-protected forest patches with religious significance"
    ],
    summary: "This chapter describes India's diverse natural vegetation types, their distribution, characteristics, and associated wildlife. It also covers conservation efforts including national parks, wildlife sanctuaries, and protection acts."
  },
  {
    chapterId: "ss-12", subjectId: "social-science", chapterNumber: 12, chapterTitle: "Population",
    definitions: [
      "Census: Official enumeration of population conducted every 10 years in India",
      "Population Density: Number of persons per unit area",
      "Growth Rate: Annual percentage increase in population",
      "Birth Rate: Number of live births per 1000 persons in a year",
      "Death Rate: Number of deaths per 1000 persons in a year",
      "Sex Ratio: Number of females per 1000 males",
      "Literacy Rate: Percentage of population aged 7+ that can read and write"
    ],
    formulas: [],
    keyPoints: [
      "India's population (2011 census): 121 crore; world's second most populous country",
      "Population density (2011): 382 persons per sq km; highest in Bihar, lowest in Arunachal Pradesh",
      "Population growth rate has declined but absolute increase remains high",
      "Youthful population: High proportion under 15 years; demographic dividend potential",
      "Sex ratio: 943 females per 1000 males (2011); lower in urban areas",
      "Literacy rate: 74.04% (2011); male 82.14%, female 65.46%",
      "Population distribution is uneven: concentrated in the Indo-Gangetic plains and coastal areas",
      "Migration affects population composition; rural-to-urban migration is significant",
      "Age composition: 29.5% below 15, 63.4% between 15-59, 7.1% above 60",
      "NPP 2000 aims to stabilize population by 2045 through education, healthcare, and awareness"
    ],
    summary: "This chapter analyzes India's population size, distribution, density, growth patterns, age composition, sex ratio, literacy, and migration. It discusses the National Population Policy and the concept of demographic dividend."
  },
  {
    chapterId: "ss-13", subjectId: "social-science", chapterNumber: 13, chapterTitle: "Democracy in the Contemporary World",
    definitions: [
      "Democracy: Government of the people, by the people, for the people",
      "Coup d'état: Sudden overthrow of a government by military or political group",
      "Martial Law: Military control of normal civilian functions",
      "One-Party System: Only one political party is allowed to function",
      "Multi-Party System: Multiple parties compete in elections"
    ],
    formulas: [],
    keyPoints: [
      "Democratic governments are accountable, responsive, and legitimate",
      "Chile: Salvador Allende elected (1970), overthrown by military coup (1973), Pinochet's dictatorship",
      "Poland: Lech Walesa led Solidarity movement against communist rule (1980s)",
      "Ghana: Kwame Nkrumah led independence (1957), later military coups disrupted democracy",
      "Myanmar (Burma): Aung San Suu Kyi led democracy movement; military junta suppressed it",
      "Pakistan: Alternation between civilian democracy and military rule",
      "International organizations promote democracy: UN, Commonwealth, EU",
      "Democracy requires free and fair elections, rule of law, protection of rights",
      "Democratic transitions are often difficult and face resistance from entrenched powers",
      "Economic development and democracy are interrelated but not automatically linked"
    ],
    summary: "This chapter examines the spread and challenges of democracy in the contemporary world through case studies of Chile, Poland, Ghana, and Myanmar. It discusses factors supporting and opposing democratic governance."
  },
  {
    chapterId: "ss-14", subjectId: "social-science", chapterNumber: 14, chapterTitle: "What is Democracy? Why Democracy?",
    definitions: [
      "Direct Democracy: People directly participate in decision-making (e.g., ancient Athens)",
      "Representative Democracy: People elect representatives to govern on their behalf",
      "Universal Adult Franchise: Right of all adults to vote",
      "Transparency: Government decisions and processes visible to citizens",
      "Legitimacy: Acceptance of government's authority by the people"
    ],
    formulas: [],
    keyPoints: [
      "Features of democracy: Free and fair elections, universal adult franchise, rule of law, fundamental rights, independent judiciary",
      "Merits: Accountability, representation, protection of rights, peaceful conflict resolution, dignity to citizens",
      "Demerits: Slow decision-making, corruption, electoral malpractices, political competition can be divisive",
      "Democracy is better than alternatives because it provides legitimacy, reduces violence, and improves quality of life",
      "Democracy enhances the dignity of citizens by recognizing their equal worth",
      "Democracies perform better at preventing famines and major economic disasters",
      "Economic growth and democracy: Democracies may not be fastest economically but provide more inclusive development",
      "Democracy requires active citizen participation beyond just voting",
      "Challenges: Deep social divisions, corruption, inequality, media manipulation"
    ],
    summary: "This chapter defines democracy, its features, merits, and demerits. It argues that despite its flaws, democracy is the best form of government because it ensures accountability, protects rights, and respects human dignity."
  },
  {
    chapterId: "ss-15", subjectId: "social-science", chapterNumber: 15, chapterTitle: "Constitutional Design",
    definitions: [
      "Constitution: Supreme law defining the structure, powers, and functions of government",
      "Preamble: Introduction stating the aims and objectives of the Constitution",
      "Sovereign: Independent authority; Socialist: Social and economic equality; Secular: No state religion",
      "Democratic: People elect representatives; Republic: Head of state is elected, not hereditary",
      "Constituent Assembly: Body that drafted the Indian Constitution (1946-1950)"
    ],
    formulas: [],
    keyPoints: [
      "The Indian Constitution was adopted on November 26, 1949 and came into effect on January 26, 1950",
      "Dr. B.R. Ambedkar was the Chairman of the Drafting Committee",
      "The Constituent Assembly had 389 members; final Constitution had 395 Articles and 8 Schedules",
      "Sources: British Constitution, US Constitution, Irish Constitution, French Constitution, Canadian Constitution",
      "Key features: Lengthiest written constitution, blend of rigidity and flexibility, federal structure with unitary bias, parliamentary form of government, synthesis of parliamentary sovereignty and judicial supremacy, independent and integrated judiciary, fundamental rights and directive principles",
      "The Preamble embodies the philosophy and ideals of the Constitution",
      "The 42nd Amendment (1976) added Socialist, Secular, and Integrity to the Preamble",
      "Basic Structure Doctrine: Parliament cannot amend the basic features of the Constitution (Kesavananda Bharati case, 1973)"
    ],
    summary: "This chapter explains the making of the Indian Constitution, its key features, sources, and the philosophy behind it. It highlights the role of the Constituent Assembly and the enduring principles enshrined in the Preamble."
  },
  {
    chapterId: "ss-16", subjectId: "social-science", chapterNumber: 16, chapterTitle: "Electoral Politics",
    definitions: [
      "Election: Process of choosing representatives by voting",
      "Constituency: Geographical area electing one representative",
      "Universal Adult Franchise: All citizens aged 18+ have the right to vote",
      "Political Party: Group of people with similar political views contesting elections",
      "Coalition Government: Government formed by alliance of multiple parties"
    ],
    formulas: [],
    keyPoints: [
      "Elections are essential for democracy to ensure representation and accountability",
      "Election Commission of India is an independent constitutional body overseeing elections",
      "India has first-past-the-post electoral system: candidate with most votes wins",
      "Reserved constituencies ensure representation for SCs and STs",
      "Voters' list is updated regularly; photo identity cards help prevent fraud",
      "Election campaigning includes rallies, media advertisements, manifestos",
      "Model Code of Conduct regulates campaign behavior",
      "Key challenges: Money power, criminalization of politics, caste and communal appeals, low voter turnout in some areas",
      "Elections in India are largely free and fair compared to many other democracies",
      "Independent Election Commission, universal suffrage, and peaceful transfers of power strengthen Indian democracy"
    ],
    summary: "This chapter explains why elections are necessary, how they are conducted in India, the role of the Election Commission, and the challenges facing the electoral process. It emphasizes the importance of free and fair elections for democracy."
  },
  {
    chapterId: "ss-17", subjectId: "social-science", chapterNumber: 17, chapterTitle: "Working of Institutions",
    definitions: [
      "Parliament: Supreme legislative body; consists of Lok Sabha and Rajya Sabha",
      "Executive: Government implementing laws; includes President, PM, and Council of Ministers",
      "Judiciary: Courts interpreting laws; Supreme Court at the apex",
      "Legislature: Body that makes laws",
      "Coalition: Alliance of political parties forming government"
    ],
    formulas: [],
    keyPoints: [
      "The Parliament consists of the President, Lok Sabha (House of the People), and Rajya Sabha (Council of States)",
      "Lok Sabha has 543 elected members; Rajya Sabha has 245 members (233 elected + 12 nominated)",
      "The Prime Minister is the leader of the majority party in Lok Sabha",
      "The Cabinet is the inner ring of the Council of Ministers; makes major decisions",
      "The President is the constitutional head; acts on the advice of the Council of Ministers",
      "The Supreme Court is the highest judicial authority with power of judicial review",
      "Independence of judiciary: Security of tenure, fixed salaries, separation from executive",
      "The Parliament can make laws on subjects in the Union List and Concurrent List",
      "Political executive (ministers) is answerable to the legislature; permanent executive (bureaucracy) provides continuity",
      "Institutional design ensures balance of power and prevents concentration of authority"
    ],
    summary: "This chapter describes the three main institutions of Indian democracy: Parliament, the Executive, and the Judiciary. It explains their composition, powers, functions, and the system of checks and balances."
  },
  {
    chapterId: "ss-18", subjectId: "social-science", chapterNumber: 18, chapterTitle: "Democratic Rights",
    definitions: [
      "Fundamental Rights: Constitutional rights guaranteed to all citizens (Part III of Constitution)",
      "Right to Equality: Equal treatment before law; no discrimination",
      "Right to Freedom: Speech, assembly, movement, residence, profession",
      "Right against Exploitation: Prohibition of forced labor and child labor",
      "Right to Freedom of Religion: Practice, profess, and propagate any religion",
      "Cultural and Educational Rights: Protection of minorities' interests",
      "Right to Constitutional Remedies: Approach courts for enforcement of rights"
    ],
    formulas: [],
    keyPoints: [
      "Fundamental Rights are justiciable; citizens can approach courts if violated",
      "The Supreme Court and High Courts can issue writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto",
      "Right to Equality includes abolition of untouchability (Article 17)",
      "Right to Freedom includes protection from arbitrary arrest (Article 22)",
      "Fundamental Duties were added by the 42nd Amendment (1976); there are 11 duties",
      "Rights are not absolute; reasonable restrictions apply in interest of public order, morality, and security",
      "The NHRC (National Human Rights Commission) and SHRCs protect human rights",
      "The expansion of rights includes the right to education (Article 21A, 2002), right to information (2005), and right to privacy (2017)",
      "Amnesty International and other NGOs work to protect rights globally"
    ],
    summary: "This chapter explains the six Fundamental Rights guaranteed by the Indian Constitution, their importance, limitations, and the mechanisms for their enforcement. It also discusses the expansion of rights in contemporary India."
  },
  {
    chapterId: "ss-19", subjectId: "social-science", chapterNumber: 19, chapterTitle: "The Story of Village Palampur",
    definitions: [
      "Farming: Production of food grains and other crops",
      "Multiple Cropping: Growing more than one crop on the same piece of land in a year",
      "Green Revolution: Dramatic increase in food grain production through modern technology",
      "HYV Seeds: High Yielding Variety seeds that produce more grain per plant",
      "Non-farm Activities: Occupations other than farming: dairy, transport, shopkeeping"
    ],
    formulas: [],
    keyPoints: [
      "Palampur is a fictional village illustrating economic activities in an Indian village",
      "Land is the most important factor of production in agriculture",
      "Modern farming methods include HYV seeds, chemical fertilizers, pesticides, irrigation, and machinery",
      "The Green Revolution significantly increased wheat and rice production in Punjab, Haryana, and UP",
      "Challenges of modern farming: Soil degradation, water depletion, inequality between landowners and landless",
      "Landless laborers and small farmers often face difficulties with modern techniques",
      "Non-farm activities are growing but still limited in rural areas",
      "Capital is needed for modern farming; small farmers often borrow at high interest rates",
      "Cooperatives and self-help groups help farmers access credit and markets",
      "Sustainable farming practices are needed to address environmental concerns"
    ],
    summary: "This chapter uses the fictional village of Palampur to explain production, farming practices, land distribution, use of modern technology, and non-farm activities in rural India. It highlights the Green Revolution and its impacts."
  },
  {
    chapterId: "ss-20", subjectId: "social-science", chapterNumber: 20, chapterTitle: "People as Resource",
    definitions: [
      "Human Resource: People as productive assets for economic development",
      "Human Capital: Stock of skills, knowledge, and experience possessed by population",
      "Education: Process of developing knowledge, skills, and attitudes",
      "Health: State of complete physical, mental, and social well-being",
      "Economic Activity: Activity resulting in production of goods and services",
      "Non-economic Activity: Activity not resulting in marketable goods/services"
    ],
    formulas: [],
    keyPoints: [
      "People are a nation's greatest resource when educated and healthy",
      "Investment in education and health creates human capital",
      "Education enhances productivity, creativity, and earning capacity",
      "Literacy rate in India has improved significantly but gender and regional gaps remain",
      "Primary healthcare, sanitation, and nutrition are essential for human development",
      "The Sarva Shiksha Abhiyan (SSA) ensures education for all children aged 6-14",
      "The Mid-Day Meal Scheme improves school attendance and nutrition",
      "Unemployment: A situation where people are willing to work but cannot find jobs",
      "Types of unemployment: seasonal, disguised, educated",
      "Quality of population depends on literacy, life expectancy, and skill formation"
    ],
    summary: "This chapter emphasizes that people are a nation's most valuable resource when educated and healthy. It discusses the importance of human capital formation through education, healthcare, and skill development for economic growth."
  },
  {
    chapterId: "ss-21", subjectId: "social-science", chapterNumber: 21, chapterTitle: "Poverty as a Challenge",
    definitions: [
      "Poverty: Inability to afford basic necessities of life (food, clothing, shelter)",
      "Poverty Line: Minimum income/expenditure required to meet basic needs",
      "BPL (Below Poverty Line): Families with income below the poverty line",
      "Absolute Poverty: Lack of minimum income for subsistence",
      "Relative Poverty: Inequality in income distribution within society",
      "Social Exclusion: Process whereby individuals or groups are denied full participation in society"
    ],
    formulas: [],
    keyPoints: [
      "Poverty in India declined from about 55% (1973) to about 22% (2011)",
      "Poverty is higher in rural areas than urban areas",
      "Causes: Unemployment, illiteracy, malnutrition, lack of healthcare, social discrimination, unequal distribution of resources",
      "Vulnerable groups: Scheduled Castes, Scheduled Tribes, women, elderly, children",
      "Anti-poverty measures: Economic growth, targeted poverty alleviation programs, social safety nets",
      "Major programs: MNREGA (guaranteed wage employment), PMRY (self-employment), SGSY (rural development), AAY (food security)",
      "The Pradhan Mantri Jan Dhan Yojana provides financial inclusion",
      "International poverty comparisons use $1.90/day (World Bank) as benchmark",
      "Challenges: Inequality rising despite poverty reduction, quality of jobs, regional disparities"
    ],
    summary: "This chapter discusses the nature, extent, and causes of poverty in India. It analyzes anti-poverty measures, poverty alleviation programs, and the challenges in eliminating poverty despite economic growth."
  },
  {
    chapterId: "ss-22", subjectId: "social-science", chapterNumber: 22, chapterTitle: "Food Security in India",
    definitions: [
      "Food Security: Availability, accessibility, and affordability of food to all people at all times",
      "Famine: Extreme scarcity of food causing widespread hunger and death",
      "Buffer Stock: Government-held stock of food grains for price stability",
      "Public Distribution System (PDS): Government-managed food distribution network",
      "Fair Price Shops: Ration shops selling subsidized food grains",
      "FCI (Food Corporation of India): Procures and distributes food grains"
    ],
    formulas: [],
    keyPoints: [
      "Food security has three dimensions: availability of food, accessibility, and affordability",
      "The Green Revolution made India self-sufficient in food grains",
      "The PDS distributes subsidized food through fair price shops using ration cards",
      "The FCI procures grains from farmers at minimum support prices (MSP)",
      "Buffer stocks help stabilize prices during shortages or high prices",
      "Challenges: Hunger despite surplus, inadequate storage, PDS leakages, poor quality grains",
      "The National Food Security Act (2013) guarantees 5 kg food grains/month per person at subsidized rates",
      "Mid-Day Meal Scheme provides cooked meals in schools to improve nutrition and attendance",
      "Integrated Child Development Services (ICDS) addresses child nutrition",
      "The COVID-19 pandemic highlighted vulnerabilities in India's food security system",
      "Sustainable agriculture and food diversification are needed for long-term food security"
    ],
    summary: "This chapter explains food security, its dimensions, and the mechanisms ensuring it in India. It covers the PDS, buffer stocks, FCI, food security legislation, and challenges in ensuring food for all."
  },

  // ==================== ENGLISH ====================
  {
    chapterId: "eng-1", subjectId: "english", chapterNumber: 1, chapterTitle: "The Fun They Had",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Isaac Asimov, a famous science fiction writer",
      "Set in the year 2157, depicting a futuristic world of mechanical teachers and telebooks",
      "Margie, an 11-year-old girl, finds an old book about schools from the past",
      "Tommy discovers the book in his attic; books were printed on paper in the past",
      "In the future, schools are in homes with mechanical teachers and individualized lessons",
      "Margie hates the mechanical teacher and its harsh grading",
      "The story contrasts future robotic education with past human-centered schooling",
      "Theme: Technology vs human interaction; the importance of human teachers and social learning",
      "The title is ironic: the fun is actually missing in the mechanical future",
      "Message: Human teachers and social schools provide emotional and social growth that machines cannot"
    ],
    summary: "'The Fun They Had' by Isaac Asimov is a science fiction story set in 2157 that contrasts robotic, individualized home schooling with the social, human-centered schools of the past. It questions whether technological advancement in education truly benefits children."
  },
  {
    chapterId: "eng-2", subjectId: "english", chapterNumber: 2, chapterTitle: "The Sound of Music",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Part I: Evelyn Glennie - A deaf percussionist from Scotland",
      "Evelyn lost her hearing gradually from age 8 due to nerve damage",
      "She could feel music through her body rather than hear it",
      "She learned to sense vibrations through her hands, feet, and skin",
      "Despite deafness, she became a world-famous solo percussionist",
      "Ron Forbes, her teacher, helped her develop body sensitivity to music",
      "She won numerous awards and performs internationally",
      "Part II: Bismillah Khan - The shehnai maestro of India",
      "Born in Dumraon, Bihar; trained under his uncle Ali Bux",
      "He popularized the shehnai, transforming it from a folk instrument to classical status",
      "He performed at the Red Fort on India's first Independence Day (1947)",
      "He received the Bharat Ratna (2001), Padma Vibhushan, Padma Bhushan, and Padma Shri",
      "Theme: Determination, passion, and dedication can overcome physical limitations",
      "Both stories emphasize that disabilities cannot stop true talent and dedication"
    ],
    summary: "'The Sound of Music' presents two inspiring stories: Evelyn Glennie, a deaf percussionist who feels music through vibrations, and Bismillah Khan, who elevated the shehnai to classical status. Both overcame challenges to achieve greatness in music."
  },
  {
    chapterId: "eng-3", subjectId: "english", chapterNumber: 3, chapterTitle: "The Little Girl",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Katherine Mansfield",
      "Kezia, a little girl, is afraid of her strict, disciplinarian father",
      "She views her father as a giant who dominates the household",
      "Her mother and grandmother are loving but cannot protect her from her father's strictness",
      "Kezia is punished for tearing her father's important speech while making a birthday pin-cushion",
      "One night, Kezia has a nightmare and her father comforts her",
      "She realizes her father is actually caring and protective beneath his strict exterior",
      "Theme: Parental love is often hidden behind strict discipline",
      "The story shows how children misunderstand parental behavior",
      "Kezia's perspective changes from fear to understanding and love for her father"
    ],
    summary: "'The Little Girl' by Katherine Mansfield explores a child's fear of a strict father and the eventual realization that his discipline masks deep love and care. Kezia's nightmare experience reveals her father's tender side."
  },
  {
    chapterId: "eng-4", subjectId: "english", chapterNumber: 4, chapterTitle: "A Truly Beautiful Mind",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Biography of Albert Einstein, the greatest physicist of the 20th century",
      "Born in Ulm, Germany in 1879; showed no early signs of genius",
      "His mother thought he was a freak; his headmaster considered him a disgrace",
      "He was interested in physics and mathematics, not rote learning",
      "He played the violin and loved sailing",
      "He left Germany for Switzerland to avoid military service",
      "He worked as a technical expert at a patent office in Bern",
      "In 1905, he published four landmark papers: Special Relativity, Photoelectric Effect, Brownian Motion, and Mass-Energy equivalence (E=mc²)",
      "He received the Nobel Prize for Physics in 1921 (for the Photoelectric Effect)",
      "He emigrated to the USA in 1933 due to the rise of Nazism",
      "He wrote to President Roosevelt warning about German atomic bomb development",
      "He advocated for peace, nuclear disarmament, and world government",
      "He died in 1955 in Princeton, New Jersey"
    ],
    summary: "'A Truly Beautiful Mind' is a biography of Albert Einstein, tracing his life from a seemingly ordinary child to the greatest physicist of the 20th century. It highlights his scientific breakthroughs, his pacifist ideals, and his contribution to modern physics."
  },
  {
    chapterId: "eng-5", subjectId: "english", chapterNumber: 5, chapterTitle: "The Snake and the Mirror",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Vaikom Muhammad Basheer, a Malayalam writer",
      "A humorous story about a homoeopathic doctor and his encounter with a snake",
      "The doctor lives in a small rented room with rats and little furniture",
      "He is vain about his appearance and dreams of marrying a wealthy, fat wife",
      "While admiring himself in the mirror, a snake falls from the roof onto his shoulder",
      "The snake is attracted to its own reflection in the mirror and ignores the doctor",
      "The doctor escapes while the snake is preoccupied with its reflection",
      "His wife is thin and does not have the qualities he desired",
      "Theme: Vanity and self-obsession; the unpredictability of life",
      "Humor: The doctor's vanity, his wish for a fat wife, the rat's antics, and the snake's fascination with its own reflection"
    ],
    summary: "'The Snake and the Mirror' by Vaikom Muhammad Basheer is a humorous story about a vain doctor whose encounter with a snake teaches him about the unpredictability of life. The snake's fascination with its mirror reflection provides comic relief."
  },
  {
    chapterId: "eng-6", subjectId: "english", chapterNumber: 6, chapterTitle: "My Childhood",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Autobiographical account by APJ Abdul Kalam",
      "Born in Rameswaram, Tamil Nadu; father Jainulabdeen was a boat owner",
      "His family was middle-class but emphasized education and values",
      "His three close friends: Ramanadha Sastry, Aravindan, Sivaprakasan (all from different religions)",
      "His science teacher Sivasubramania Iyer encouraged him despite social barriers",
      "He faced discrimination when a new teacher separated him from his Brahmin friend",
      "His father taught him self-discipline, honesty, and the value of hard work",
      "He became interested in science after watching a seagull fly",
      "He moved to Schwartz High School and then to Saint Joseph's College, Trichy",
      "He studied Aeronautical Engineering at MIT (Madras Institute of Technology)",
      "He became India's 'Missile Man' and later the President (2002-2007)",
      "Theme: Childhood influences, secular values, importance of teachers, and perseverance"
    ],
    summary: "'My Childhood' is APJ Abdul Kalam's autobiographical account of his early life in Rameswaram. It highlights the values instilled by his family, the role of supportive teachers, and the secular friendships that shaped India's 'Missile Man.'"
  },
  {
    chapterId: "eng-7", subjectId: "english", chapterNumber: 7, chapterTitle: "Packing",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Jerome K. Jerome, a British humorist",
      "The narrator (Jerome), George, and Harris plan a boating trip",
      "Jerome volunteers to supervise packing while the others do the actual work",
      "George and Harris prove to be terrible packers: break things, pack butter under boots",
      "Jerome tries to help but only creates more chaos",
      "They forget essential items and pack unnecessary things",
      "The dog Montmorency adds to the chaos by getting in the way",
      "Theme: The comedy of everyday tasks; the gap between intention and execution",
      "Humor: The irony of the narrator's supervision, Harris's clumsiness, George's forgetfulness, and the dog's interference",
      "The story shows how even simple tasks can become complicated with too many people involved"
    ],
    summary: "'Packing' by Jerome K. Jerome is a humorous account of three friends attempting to pack for a trip. Their incompetence, arguments, and the interference of a dog create a comic situation that highlights the absurdity of everyday tasks."
  },
  {
    chapterId: "eng-8", subjectId: "english", chapterNumber: 8, chapterTitle: "Reach for the Top",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Part I: Santosh Yadav - First woman to climb Mount Everest twice",
      "Born in Haryana in a society that favored sons; one of six siblings",
      "She rebelled against traditional expectations for girls",
      "She left home to join Maharani College, Jaipur",
      "She saved money to enroll in a mountaineering course at Uttarkashi",
      "She climbed Everest in 1992 and again in 1993",
      "She was awarded the Padma Shri",
      "Part II: Maria Sharapova - Russian tennis champion",
      "Born in Siberia, Russia; showed early talent in tennis",
      "Moved to Florida, USA at age 9 for intensive tennis training",
      "Her father worked odd jobs to support her training",
      "She won Wimbledon in 2004 at age 17; later won all Grand Slam titles",
      "She became the world's highest-paid female athlete",
      "Theme: Sacrifice, determination, mental toughness, and the cost of success",
      "Both women faced sacrifice, hardship, and discrimination but achieved extraordinary success"
    ],
    summary: "'Reach for the Top' presents two inspiring women: Santosh Yadav, the first woman to scale Everest twice, and Maria Sharapova, a tennis champion. Both overcame significant obstacles through determination and sacrifice."
  },
  {
    chapterId: "eng-9", subjectId: "english", chapterNumber: 9, chapterTitle: "The Road Not Taken",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Robert Frost, an American poet",
      "The speaker stands at a fork in the road in a yellow wood (autumn forest)",
      "He considers both paths but cannot travel both",
      "He chooses the less traveled road, though both were equally worn",
      "He says he will come back to try the other road but knows he won't",
      "Years later, he will say he took the road less traveled, which made all the difference",
      "Theme: Choices and decisions in life; the uncertainty of consequences",
      "The forked road symbolizes life's important decisions",
      "The poem reflects on how small decisions can significantly impact one's life",
      "Irony: Both roads were actually similar; the speaker will rationalize his choice later"
    ],
    summary: "'The Road Not Taken' by Robert Frost is a meditation on life's choices. The speaker's decision at a fork in the road symbolizes how the choices we make, even seemingly small ones, can profoundly shape our future."
  },
  {
    chapterId: "eng-10", subjectId: "english", chapterNumber: 10, chapterTitle: "Wind",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Subramania Bharati, a Tamil poet and freedom fighter",
      "The poem addresses the wind as a powerful force of nature",
      "The speaker asks the wind to blow gently, not violently",
      "The wind symbolizes the challenges and difficulties of life",
      "The poet advises people to build strong homes, firm bodies, and steadfast hearts",
      "Those who are weak are destroyed by the wind; the strong flourish",
      "Theme: Strength and resilience in the face of adversity",
      "The wind represents the powerful forces that test human character",
      "The message is to prepare oneself mentally and physically for life's challenges",
      "The poem reflects Bharati's nationalist spirit: only a strong nation can withstand challenges"
    ],
    summary: "'Wind' by Subramania Bharati personifies wind as the challenges of life. The poet urges building strength and resilience to withstand adversity, reflecting both personal and national themes of fortitude."
  },
  {
    chapterId: "eng-11", subjectId: "english", chapterNumber: 11, chapterTitle: "Rain on the Roof",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Coates Kinney, an American poet",
      "The poet lies in a cottage chamber bed listening to the rain on the roof",
      "The rain brings back memories of his mother and childhood",
      "Each raindrop on the roof echoes in his heart and revives memories",
      "He sees visions of his mother looking down at him as she used to when he was a child",
      "The rain becomes a medium connecting the present with the past",
      "Theme: Nostalgia, the power of nature to evoke memories, motherly love",
      "The patter of rain is personified as an echo of memory",
      "The poem creates a melancholic yet comforting atmosphere",
      "The tingle of raindrops evokes the 'tinkle' of old memories"
    ],
    summary: "'Rain on the Roof' by Coates Kinney captures the nostalgic memories triggered by the sound of rain. The poet's recollections of his mother's love demonstrate how sensory experiences can transport us to cherished moments from the past."
  },
  {
    chapterId: "eng-12", subjectId: "english", chapterNumber: 12, chapterTitle: "The Lake Isle of Innisfree",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by W.B. Yeats, an Irish poet and Nobel laureate",
      "The poet expresses his desire to escape to Innisfree, a small island in Ireland",
      "He dreams of building a small cabin of clay and wattles",
      "He wants to live alone, planting beans and keeping bees",
      "He longs for the peace that comes from nature: the sound of bees, the song of crickets",
      "He hears the lake water lapping with low sounds by the shore even in the city",
      "Theme: Escapism, longing for nature, the contrast between urban life and rural peace",
      "Innisfree symbolizes an idealized place of tranquility and natural beauty",
      "The poet is deeply rooted in nature even while living in an urban environment",
      "The poem reflects Celtic romanticism and the Irish literary revival"
    ],
    summary: "'The Lake Isle of Innisfree' by W.B. Yeats expresses a deep longing to escape urban life for the tranquility of a small Irish island. The poem celebrates the restorative power of nature and simple living."
  },
  {
    chapterId: "eng-13", subjectId: "english", chapterNumber: 13, chapterTitle: "A Legend of the Northland",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Phoebe Cary, an American poet",
      "A ballad based on a legend from Northland (northern countries)",
      "Saint Peter, hungry after fasting and preaching, asks a woman for a cake",
      "The woman is baking cakes but each one seems too large to give away",
      "She makes smaller and smaller cakes until one is too small even for herself",
      "Saint Peter is angered by her selfishness and curses her",
      "She is turned into a woodpecker and must bore into dry wood for food",
      "Theme: Greed and selfishness are punished; generosity is rewarded",
      "The poem uses a folk tale format with a moral lesson",
      "The woodpecker's red cap is a reminder of the fire she was baking by",
      "The poem teaches the value of charity and sharing with those in need"
    ],
    summary: "'A Legend of the Northland' by Phoebe Cary is a ballad about a selfish woman who is punished by Saint Peter and transformed into a woodpecker. The poem teaches the moral lesson that greed is punished while generosity is rewarded."
  },
  {
    chapterId: "eng-14", subjectId: "english", chapterNumber: 14, chapterTitle: "No Men Are Foreign",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by James Kirkup, a British poet",
      "The poem emphasizes the unity of all human beings regardless of nationality",
      "All people breathe the same air, walk on the same earth, and are fed by the same harvests",
      "War and hatred are instigated by those in power, not by common people",
      "The poet asks us to remember that no men are foreign and no countries strange",
      "Beneath different uniforms, all humans have the same body",
      "The earth is ours to enjoy, not to exploit for war",
      "Theme: Universal brotherhood, anti-war, human equality",
      "The poem challenges the divisions created by nationalism, religion, and politics",
      "The poet urges readers to reject hatred and embrace our common humanity",
      "The final message: We should not hate or despise any nation because all humans are fundamentally the same"
    ],
    summary: "'No Men Are Foreign' by James Kirkup is a powerful anti-war poem advocating universal brotherhood. It reminds readers that all humans share the same earth, air, and humanity, and calls for an end to hatred and war."
  },
  {
    chapterId: "eng-15", subjectId: "english", chapterNumber: 15, chapterTitle: "The Duck and the Kangaroo",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Edward Lear, a famous English nonsense poet",
      "A humorous poem about a duck who wants to travel the world",
      "The duck asks the kangaroo to give it a ride on its back",
      "The kangaroo is initially worried that the duck's wet feet might give it rheumatism",
      "The duck promises to wear woollen socks and smoke a cigar to stay dry",
      "The kangaroo agrees and they hop around the world happily",
      "Theme: Friendship, adventure, compromise, and the joy of exploration",
      "The poem is written in a ballad style with a regular rhyme scheme (AABB)",
      "Nonsense elements: A duck smoking a cigar, wearing socks, and riding a kangaroo",
      "The poem celebrates the spirit of friendship and willingness to accommodate each other"
    ],
    summary: "'The Duck and the Kangaroo' by Edward Lear is a delightful nonsense poem about a duck who persuades a kangaroo to take it around the world. The poem celebrates friendship, adventure, and the spirit of compromise."
  },
  {
    chapterId: "eng-16", subjectId: "english", chapterNumber: 16, chapterTitle: "On Killing a Tree",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Gieve Patel, an Indian poet and physician",
      "The poem describes how difficult it is to truly kill a tree",
      "A simple jab of a knife or simple hack won't do it",
      "The tree has grown slowly from the earth, feeding on its crust and absorbing sunlight, water, and air",
      "To kill a tree, one must pull out its roots from the earth's anchoring",
      "The roots are the source of the tree's strength and hidden life",
      "Once the roots are exposed and scorched in the sun, the tree is truly killed",
      "Theme: The resilience of nature; the violence of destruction; the hidden strength of living things",
      "The poem is a commentary on environmental destruction and human violence against nature",
      "Irony: The elaborate process to kill a tree shows how deeply nature resists destruction",
      "The poem uses graphic imagery: bleeding bark, uprooting, scorching, choking"
    ],
    summary: "'On Killing a Tree' by Gieve Patel describes the resilience of a tree and the violence required to destroy it. The poem serves as an environmental message about the deep-rooted strength of nature and the cruelty of destruction."
  },
  {
    chapterId: "eng-17", subjectId: "english", chapterNumber: 17, chapterTitle: "The Snake Trying",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by W.W.E. Ross, a Canadian poet",
      "The poem describes a snake trying to escape from a pursuing stick",
      "The snake is harmless and beautiful with green markings",
      "It tries to escape into the reeds in the water where it can hide",
      "The poet appeals to the pursuer to let the snake go",
      "The snake is described as graceful and innocent, not a threat",
      "Theme: Compassion for all creatures; the irrational fear of snakes",
      "The poem challenges the common impulse to kill snakes out of fear",
      "The poet emphasizes the snake's beauty and harmlessness",
      "The water and reeds represent safety and the natural habitat of the snake",
      "Message: Humans should respect and protect wildlife rather than harm it out of ignorance"
    ],
    summary: "'The Snake Trying' by W.W.E. Ross depicts a harmless snake fleeing human attack. The poem appeals for compassion toward all creatures and challenges the irrational fear that leads people to harm innocent animals."
  },
  {
    chapterId: "eng-18", subjectId: "english", chapterNumber: 18, chapterTitle: "A Slumber Did My Spirit Seal",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by William Wordsworth, a leading English Romantic poet",
      "The poem expresses grief over the death of a loved one (possibly Lucy)",
      "The speaker's spirit had been sealed in slumber, unaware of mortality",
      "Now the loved one is dead, rolled round in earth's diurnal course",
      "She is beyond the touch of human fears and cannot feel the earthly years",
      "She has become part of nature: with rocks, stones, and trees",
      "Theme: Death, loss, acceptance, and the fusion of the dead with nature",
      "The poem reflects the Romantic belief in the unity of all life",
      "The 'slumber' refers to both sleep and ignorance of death",
      "There is no supernatural afterlife; the dead become part of the natural world",
      "The poem conveys deep grief through simple, stark language"
    ],
    summary: "'A Slumber Did My Spirit Seal' by William Wordsworth reflects on death and the acceptance of loss. The poet finds solace in the idea that his loved one has become part of nature, beyond human suffering and time."
  },
  {
    chapterId: "eng-19", subjectId: "english", chapterNumber: 19, chapterTitle: "The Lost Child",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Mulk Raj Anand, an Indian English writer",
      "A child visits a spring fair with his parents",
      "He is fascinated by toys, sweets, flowers, and a roundabout",
      "He wants various things but his parents refuse, saying he already has similar items",
      "He gets separated from his parents in the crowd",
      "He searches frantically and cries for his mother and father",
      "A kind man finds him and tries to console him, offering him the very things he wanted",
      "But the child only wants his parents; all attractions lose their meaning",
      "Theme: A child's attachment to parents is stronger than any material desire",
      "The fair symbolizes the attractions of the world; the parents represent security and love",
      "The story shows how material things become meaningless without loved ones"
    ],
    summary: "'The Lost Child' by Mulk Raj Anand depicts a child's experience at a village fair. When separated from his parents, all the attractions he desired become meaningless, illustrating that parental love outweighs material desires."
  },
  {
    chapterId: "eng-20", subjectId: "english", chapterNumber: 20, chapterTitle: "The Adventures of Toto",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Ruskin Bond, a celebrated Indian author",
      "Grandfather buys Toto, a mischievous monkey, from a tonga-driver for five rupees",
      "Toto is kept in a closet but destroys everything inside",
      "He escapes and causes trouble in the house: tears clothes, breaks dishes, scares the cook",
      "He is taken to Saharanpur where grandfather goes for pension",
      "On the train, Toto creates chaos by throwing things and frightening passengers",
      "He is finally sent to the zoo because he is too destructive",
      "Theme: The consequences of bringing a wild animal into a domestic setting",
      "Toto represents the untamable nature of wild creatures",
      "Humor: Toto's antics, grandfather's indulgence, the family's frustration",
      "The story suggests that wild animals belong in their natural habitat"
    ],
    summary: "'The Adventures of Toto' by Ruskin Bond is a humorous story about a monkey named Toto whose mischievous behavior wreaks havoc in a household. The story ultimately suggests that wild animals belong in their natural environment."
  },
  {
    chapterId: "eng-21", subjectId: "english", chapterNumber: 21, chapterTitle: "Iswaran the Storyteller",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by R.K. Laxman (cartoonist and writer)",
      "Iswaran is a cook and companion to Mahendra, a junior supervisor at a construction site",
      "Iswaran has a remarkable talent for storytelling",
      "He tells vivid stories about ghosts, supernatural events, and wild animals",
      "He cooks delicious meals with minimal ingredients",
      "One day, Iswaran tells a story about a female ghost on a banyan tree",
      "Mahendra is frightened and cannot sleep that night",
      "He hears a moaning sound and sees a dark figure outside his window",
      "The next morning, he resigns and leaves the place",
      "Theme: The power of storytelling and imagination; the thin line between fiction and reality",
      "Humor: Iswaran's dramatic narration, Mahendra's credulity, the ambiguity of the ghost story"
    ],
    summary: "'Iswaran the Storyteller' by R.K. Laxman is a humorous story about a cook with an extraordinary gift for storytelling. His ghost stories so terrify his employer that the line between fiction and reality becomes blurred."
  },
  {
    chapterId: "eng-22", subjectId: "english", chapterNumber: 22, chapterTitle: "In the Kingdom of Fools",
    definitions: [],
    formulas: [],
    keyPoints: [
      "A Kannada folktale adapted for the NCERT textbook",
      "A guru and his disciple arrive in a kingdom where everyone is foolish",
      "In this kingdom, people sleep during the day and work at night",
      "Everything costs the same: one duddu (single coin), whether food or a gold necklace",
      "A thief breaks into a merchant's house and dies when a wall falls on him",
      "The king holds trials to find who is responsible for the thief's death",
      "The merchant blames the bricklayer, who blames the dancing girl, who blames the goldsmith, who blames the merchant",
      "The merchant is sentenced to death, but the wall belonged to his father who is dead",
      "The disciple is chosen as a substitute for execution because he is the right height",
      "The guru returns and uses his wit to save his disciple and teach the king a lesson",
      "Theme: Folly of irrational governance; wisdom triumphs over foolishness",
      "The story satirizes blind justice and arbitrary decision-making"
    ],
    summary: "'In the Kingdom of Fools' is a Kannada folktale about a kingdom where foolishness rules. Through a series of absurd trials, the story satirizes irrational governance and celebrates the triumph of wisdom over folly."
  },
  {
    chapterId: "eng-23", subjectId: "english", chapterNumber: 23, chapterTitle: "The Happy Prince",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Oscar Wilde, an Irish writer and playwright",
      "The Happy Prince is a golden statue that stands high above the city",
      "A swallow, preparing to migrate to Egypt, befriends the statue",
      "The Happy Prince asks the swallow to take his gold and jewels to help the poor",
      "The swallow delivers the sapphire eyes to a poor writer and a little match girl",
      "It strips the gold leaf and distributes it to the city's poor and hungry",
      "The swallow delays its migration because of compassion for the suffering people",
      "Eventually, the swallow dies from the cold, and the Prince's heart breaks",
      "The city councillors remove the statue because it is no longer beautiful",
      "Theme: Compassion, social inequality, true beauty, sacrifice",
      "Irony: The 'happy' prince is sad; the rich are indifferent; the worthless are valuable",
      "The story critiques the indifference of the wealthy toward the poor"
    ],
    summary: "'The Happy Prince' by Oscar Wilde is a touching tale about a golden statue and a swallow who sacrifice themselves to help the poor. The story critiques social inequality and celebrates compassion over materialism."
  },
  {
    chapterId: "eng-24", subjectId: "english", chapterNumber: 24, chapterTitle: "Weathering the Storm in Ersama",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Harsh Mander, a social activist and writer",
      "Set during the devastating 1999 Orissa (Odisha) super cyclone",
      "Prashant, a 19-year-old, visits his friend's village when the cyclone hits",
      "The storm destroys everything: houses, trees, crops, and lives",
      "Prashant survives by climbing onto a rooftop",
      "After the storm, he finds his family and organizes relief efforts",
      "He helps gather food, set up a shelter, and care for the orphaned",
      "He organizes a team of volunteers and gets government help",
      "He persuades widows to start self-help groups and orphaned children to resettle",
      "Theme: Courage, leadership, community spirit, resilience in disaster",
      "Prashant shows that youth can be powerful agents of change during crises",
      "The story highlights both the devastation of natural disasters and the strength of human spirit"
    ],
    summary: "'Weathering the Storm in Ersama' by Harsh Mander recounts Prashant's courageous leadership during the 1999 Odisha super cyclone. The story illustrates how individual initiative and community spirit can bring hope amid devastation."
  },
  {
    chapterId: "eng-25", subjectId: "english", chapterNumber: 25, chapterTitle: "The Last Leaf",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by O. Henry (William Sydney Porter), an American short story writer",
      "Set in Greenwich Village, New York; Johnsy and Sue are young artists sharing a flat",
      "Johnsy falls ill with pneumonia and loses hope of recovery",
      "She believes she will die when the last ivy leaf falls from the vine outside her window",
      "Despite Sue's encouragement, Johnsy watches the leaves fall as winter approaches",
      "Old Behrman, a failed painter living below, learns of Johnsy's belief",
      "The last leaf survives despite wind and rain; Johnsy regains hope and recovers",
      "Behrman dies of pneumonia; it is revealed he painted the last leaf on the wall during the storm",
      "Theme: Hope, sacrifice, friendship, the power of belief",
      "Irony: Behrman, who never painted a masterpiece, created his greatest work to save a life",
      "The story shows how hope can be as powerful as medicine in healing"
    ],
    summary: "'The Last Leaf' by O. Henry tells of Johnsy, who believes she will die when the last ivy leaf falls. Old Behrman sacrifices his life to paint a lasting leaf, giving Johnsy hope and saving her life."
  },
  {
    chapterId: "eng-26", subjectId: "english", chapterNumber: 26, chapterTitle: "A House Is Not a Home",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Zan Gaudioso, an American writer",
      "The narrator's house burns down on the first day of high school",
      "He loses his cat and all his belongings in the fire",
      "His mother escapes with only her purse and his father's photographs",
      "They stay with grandparents and later rent an apartment",
      "The narrator feels isolated at school and loses interest in everything",
      "His new schoolmates collect clothes, books, and furniture for his family",
      "A teacher notices his loneliness and involves him in school activities",
      "His cat returns after a month, having survived the fire",
      "Theme: Loss, recovery, community support, finding a new home",
      "The story shows that a home is made by love and relationships, not material things",
      "Community kindness helps the narrator rebuild his life after disaster"
    ],
    summary: "'A House Is Not a Home' by Zan Gaudioso recounts a teenager's experience after losing his house to fire. The kindness of schoolmates and the return of his cat help him realize that home is about people, not places."
  },
  {
    chapterId: "eng-27", subjectId: "english", chapterNumber: 27, chapterTitle: "The Accidental Tourist",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Bill Bryson, a popular American travel writer",
      "The author describes his comical mishaps while traveling",
      "He always manages to cause minor disasters: spilling drinks, tripping, losing things",
      "On a flight, he accidentally pulls off the airliner lavatory sink by leaning on it",
      "He gets his pen stuck in his mouth, his zipper caught, and his seatbelt tangled",
      "At hotels, he forgets his room number and ends up at the wrong door",
      "His travels are a series of awkward, embarrassing, but humorous incidents",
      "Theme: The comedy of human clumsiness; finding humor in everyday disasters",
      "The humor comes from the contrast between the author's intentions and the actual outcomes",
      "The story reminds us that travel is unpredictable and that we should laugh at our mistakes",
      "Bryson's self-deprecating humor makes the reader feel sympathetic rather than critical"
    ],
    summary: "'The Accidental Tourist' by Bill Bryson humorously recounts the author's travel mishaps, from pulling off airplane sinks to getting stuck in hotel rooms. The essay celebrates the comedy of everyday disasters."
  },
  {
    chapterId: "eng-28", subjectId: "english", chapterNumber: 28, chapterTitle: "The Beggar",
    definitions: [],
    formulas: [],
    keyPoints: [
      "Written by Anton Chekhov, a renowned Russian playwright and short story writer",
      "Lushkoff, a beggar, approaches an advocate for money, claiming to be a teacher",
      "The advocate sends him to his cook Olga to chop wood",
      "Lushkoff is weak and drunk but tries to earn the money",
      "Olga actually chops the wood for him out of pity",
      "The advocate continues giving him work regularly",
      "Two years later, Lushkoff returns as a notary, no longer a beggar",
      "He reveals that Olga's compassion, not the advocate's charity, changed his life",
      "Theme: The transformative power of work and dignity; compassion changes lives",
      "The story contrasts two approaches to helping: charity vs. giving work and dignity",
      "Olga's silent kindness had more impact than the advocate's obvious help",
      "The story shows that giving someone self-respect is more valuable than giving money"
    ],
    summary: "'The Beggar' by Anton Chekhov tells how a drunk beggar named Lushkoff is transformed by the dignity of work and the compassion of a cook named Olga. The story shows that giving work and respect changes lives more than charity."
  },
];

export function getNotesByChapterId(chapterId: string): ChapterNotes | undefined {
  return allNotes.find((n) => n.chapterId === chapterId);
}

export function getNotesBySubjectId(subjectId: string): ChapterNotes[] {
  return allNotes.filter((n) => n.subjectId === subjectId);
}
