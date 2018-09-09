import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfessorViewComponent } from './professor/professor-view/professor-view.component';
import { UniversityViewComponent } from './university/university-view/university-view.component';
import { WelcomePageComponent } from './static-pages/welcome-page/welcome-page.component';
import { AboutPageComponent } from './static-pages/about-page/about-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'about', component: WelcomePageComponent },

  { path: 'professor/:id', component: ProfessorViewComponent },
  { path: 'university/:id', component: UniversityViewComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
