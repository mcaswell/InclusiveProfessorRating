import { University } from '../university/university';
import { Department } from '../data-objects/department';
import { Professor } from '../professor/professor';
import { Review } from '../review/review';

export const UNIVERSITIES: University[] = [
  {id: 0, name: "Rochester Polytechnic Institute", location: "Pennsylvania, RI"}
];

export const DEPARTMENTS: Department[] = [
  {id: 0, name: "Computer Science", universityId: 0 },
  {id: 1, name: "Physics", universityId: 0 },
  {id: 2, name: "Business", universityId: 0 },
  {id: 3, name: "Criminal Justice", universityId: 0},
  {id: 4, name: "Medicine", universityId: 0},
  {id: 5, name: "Biology", universityId: 0}
];

export const PROFESSORS: Professor[] = [
  {id: 0, departmentId: 0, universityId: 0, name: "Robert Tables", overallRating: 4.20, numRatings: 1},
  {id: 1, departmentId: 3, universityId: 0, name: "Olivia Benson", overallRating: 4.95, numRatings: 1},
  {id: 2, departmentId: 2, universityId: 0, name: "Michael Scott", overallRating: 0.69, numRatings: 2},
  {id: 3, departmentId: 1, universityId: 0, name: "Hubert Farnsworth", overallRating: 3.14, numRatings: 1},
  {id: 4, departmentId: 4, universityID: 0, name: "Leonard McCoy", overallRating: 2.16, numRatings: 1},
  {id: 5, departmentId: 5, universityId: 0, name: "Rowan", overallRating, 2.40, numRatings: 1}
];

export const REVIEWS: Review[] = [
  {id: 0, professorId: 0, text: "Professor Tables is excellent! I do wish he didn't make that off-color joke in class that one time, though.", accomRating:4, inclusiveRating: 4, qualityRating:5,
  redFlags: [], greenFlags: [], upvotes:0, downvotes: 0, courseTaken: "CSCI4380" },
  {id: 1, professorId: 1, text: "Professor Benson's extensive experience in the field and her compassion for people make her an outstanding professor. I would definitely take her course again!",
  accomRating:5, inclusiveRating: 5, qualityRating:5,
  redFlags: [], greenFlags: [0,1,2,3,4,5,6,7], upvotes:0, downvotes: 0, courseTaken: "CRIM2100"},
  {id: 2, professorId: 2, text: "I found it impossible to learn in Professor Scott's class due to his overuse of innuendos and stereotypes. He also played multiple cruel 'pranks' on me, which made my anxiety worse throughout the semester.",
  accomRating:0, inclusiveRating: 0, qualityRating:1, redFlags: [1,2,3,4,5,6,7,8,9,10], greenFlags: [], upvotes:2, downvotes:0, courseTaken: "MGMT2100"
  },
  {id: 3, professorId: 2, text: "Professor Scott's diversity in business 'lesson' was a horrible mistake. I still have nightmares about being in his class to this day.",
  accomRating:1, inclusiveRating: 0, qualityRating:0, redFlags: [1,2,3,5,6,7,8,9,10], greenFlags: [], upvotes:2, downvotes:0, courseTaken: "MGMT2100"
  },
  {id: 4, professorId: 3, text: "Good news everyone! Hubert Farnsworth is incredibly brilliant. However, he does seem to enjoy tormenting people in parallel universes a bit too much.", accomRating:4, inclusiveRating: 3, qualityRating:4,
redFlags: [4], greenFlags: [1,2], upvotes:0, downvotes: 0, courseTaken:"PHYS1200"},
   {id: 4, professorId: 4, text: "Dr. McCoy is an old fashioned doctor who cares deeply about his work but can be incredibly stubborn. He is very set in his ways and afraid of change and unfamiliar people. Otherwise, an excellent professor.", accomRating:3, inclusiveRating: 2, qualityRating:3, 
    redFlags: [], greenFlags: [], upvotes:0, downvotes: 0, courseTaken: "MED1320" },
  {id: 5, professorId: 5, text: "Though he goes on tangents about his research frequently, it is clear that Professor Rowan is extremely knowlegdeable about his field and wants to pass that on to student. His class involves much field work and personal research to keep students engaged.", accomRating: 4, inclusiveRating: 4, qualityRating: 3,
   redFlags: [], greenFlags: [], upvotes:0, downvotes: 0, courseTaken: "BIO4320" }
];
