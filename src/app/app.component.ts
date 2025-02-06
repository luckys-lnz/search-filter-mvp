import { Component } from '@angular/core';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'landing-side-component';
  searchResults = false;

  constructor() {}
}
