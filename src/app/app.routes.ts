import { Routes } from '@angular/router';
import { FilterContentComponent } from './filter-content/filter-content.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

export const routes: Routes = [
  { path: '', component: FilterBarComponent },
  { path: 'filter-content/:id', component: FilterContentComponent },
];

