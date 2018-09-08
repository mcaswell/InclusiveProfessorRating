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
  {id: 3, name: "Criminal Justice", universityId: 0}
];

export const PROFESSORS: Professor[] = [
  {id: 0, departmentId: 0, universityId: 0, name: "Robert Tables"},
  {id: 1, departmentId: 3, universityId: 0, name: "Olivia Benson"},
  {id: 2, departmentId: 2, universityId: 0, name: "Michael Scott"},
  {id: 3, departmentId: 1, universityId: 0, name: "Hubert Farnsworth"}
];

/*export const REVIEWS: Review[] = [
  
];*/