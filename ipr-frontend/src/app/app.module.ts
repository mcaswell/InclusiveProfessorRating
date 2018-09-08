import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { ProfessorViewComponent } from './professor/professor-view/professor-view.component';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { UniversityViewComponent } from './university/university-view/university-view.component';
import { FlagListComponent } from './flag/flag-list/flag-list.component';
import { FlagComponent } from './flag/flag.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomePageComponent } from './static-pages/welcome-page/welcome-page.component';
import { AboutPageComponent } from './static-pages/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ProfessorViewComponent,
    ProfessorListComponent,
    Universi tyViewComponent,
    FlagListComponent,
    FlagComponent,
    NavbarComponent,
    WelcomePageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
