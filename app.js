// Assuming this is the data set with all 50 students that isn't sorted.
const students = [
  {
    id: 1,
    first: "Jazmeen",
    last: "Wu",
    years: 1,
    major: "Biology",
  },
  {
    id: 2,
    first: "Hilda",
    last: "Wong",
    years: 1.5,
    major: "English",
  },
  {
    id: 3,
    first: "Makinde",
    last: "Braut",
    years: 3,
    major: "Comparative Literature",
  },
  {
    id: 4,
    first: "Michelle",
    last: "Lang",
    years: 2,
    major: "History",
  },
  {
    id: 5,
    first: "Pierre",
    last: "Sukhani",
    years: 2,
    major: "Physics",
  },
  {
    id: 6,
    first: "Bodu",
    last: "Wilkinson",
    years: 2,
    major: "General Education",
  },
  {
    id: 7,
    first: "Jazmeen",
    last: "Bonaparte",
    years: 3.5,
    major: "Computer Science",
  },
  {
    id: 8,
    first: "David",
    last: "Herbst",
    years: 0.5,
    major: "Math",
  },
  {
    id: 9,
    first: "John",
    last: "Gauss",
    years: 3.5,
    major: "Applied Math",
  },
  {
    id: 10,
    first: "Jamie",
    last: "Lang",
    years: 3,
    major: "Gender Studies",
  },
  {
    id: 11,
    first: "Chiang",
    last: "Dupont",
    years: 3,
    major: "Italian",
  },
  {
    id: 12,
    first: "Yancy",
    last: "Johnson",
    years: 1.5,
    major: "Russian",
  },
  {
    id: 13,
    first: "Elena",
    last: "Ramirez",
    years: 1,
    major: "Biology",
  },
  {
    id: 14,
    first: "Jose",
    last: "Herbst",
    years: 3,
    major: "English",
  },
  {
    id: 15,
    first: "Abdul",
    last: "Davidson",
    years: 1,
    major: "Comparative Literature",
  },
  {
    id: 16,
    first: "Jose",
    last: "Kim",
    years: 1,
    major: "History",
  },
  {
    id: 17,
    first: "Natasha",
    last: "Kim",
    years: 2,
    major: "Physics",
  },
  {
    id: 18,
    first: "Wing",
    last: "Wilkinson",
    years: 1,
    major: "General Education",
  },
  {
    id: 19,
    first: "Hilda",
    last: "Ramirez",
    years: 1,
    major: "Computer Science",
  },
  {
    id: 20,
    first: "Wing",
    last: "Sukhani",
    years: 1,
    major: "Math",
  }
  // ...and the other 30...
];

// We know that we want 9 cohorts
const numCohorts = 9;
// the min number of students per cohort is 4 per cohort
const minStudents = 4;
// the max number of students per cohort is 8 per cohort
const maxStudents = 8;

// Need to create a function that will create an 2d array of cohorts and its students.
// And divide them into the correct groups.
// inputs: students array, numCohorts, minStudents, maxStudents
// output: A 2d array of cohorts and its students.
const createCohorts = (arr, numCohorts, min, max) => {
  // ...the correct algorithm to create the cohort
  // create variable for the array sorted by major then by years
  const sortedArr = arr.sort(
    (a, b) => a.major.localeCompare(b.major) || a.years - b.years
  );

  // Next divide the student into groups
  // Create a new array to track the grouping of cohorts
  const cohorts = [];
  // figure out the number of students per cohort
  let studentsPerGroup = Math.floor(arr.length / numCohorts);
  // cohorts with possible extra students
  let extraStudentGroups = arr.length % numCohorts;
  // create a for loop to create the groups
  for(let i = 0; i < numCohorts; i++) {
    // ...clustering algorithm? 
    // Not sure how to implement it
  }
 
};

// Print results to test
console.log(createCohorts(students, numCohorts, minStudents, maxStudents));







// Edge cases to consider
// students is not an array
// students is an empty an array
// students contains other data types other than an object with the correct keys
