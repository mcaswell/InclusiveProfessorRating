import { Injectable } from '@angular/core';
import {UNIVERSITIES, PROFESSORS} from './mock-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {University} from '../university/university';
import {Professor} from '../professor/professor';

@Injectable()
export class FakeDatabaseService {

  getUniversity(id: number): Observable<University>{
    return of(UNIVERSITIES.find(univ => univ.id === id));
  }

  getProfessorsInUniversity(uni_id: number): Observable<Professor[]>{
    return of(PROFESSORS.filter(prof => prof.universityId === uni_id));
  };

}
