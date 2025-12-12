import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { ProjectsComponent } from './features/projects/projects';
import { ContactComponent } from './features/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];
