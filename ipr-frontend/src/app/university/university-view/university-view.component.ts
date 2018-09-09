import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { University } from '../university';
import { DatabaseService } from '../../services/database.service';
@Component({
  selector: 'app-university-view',
  templateUrl: './university-view.component.html',
  styleUrls: ['./university-view.component.css']
})
export class UniversityViewComponent implements OnInit {

  university: University;

  constructor(private route: ActivatedRoute,
    private dbService: DatabaseService) { }

  ngOnInit() {
    this.getUniversity();
  }

  getUniversity(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dbService.getUniversity(id)
      .subscribe(university => this.university = university);

  }

}
