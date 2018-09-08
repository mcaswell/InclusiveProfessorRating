import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { ProfessorViewComponent } from './professor/professor-view/professor-view.component';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { UniversityViewComponent } from './university/university-view/university-view.component';
import { FlagListComponent } from './flag-list/flag-list.component';
import { FlagComponent } from './flag/flag.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ProfessorViewComponent,
    ProfessorListComponent,
    UniversityViewComponent,
    FlagListComponent,
    FlagComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
