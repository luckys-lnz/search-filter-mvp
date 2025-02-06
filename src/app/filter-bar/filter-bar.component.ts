import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { FilterContentComponent } from '../filter-content/filter-content.component';

// Define Job interface
interface Job {
  id: number;
  title: string;
  location: string;
  jobType: string;
  experienceLevel: string;
  companyType: string;
  companyName: string;
  salaryRange: string;
  logo: string;
  isHot: boolean;
}

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FilterContentComponent,
  ],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent implements OnInit {
  searchQuery: string = '';
  selectedLocation: string = '';
  selectedJobType: string = '';
  selectedExperienceLevel: string = '';
  selectedCompanyType: string = '';

  showFilterContent: boolean = false;
  selectedJob: any = null;

  // Dynamically generated filter options
  locations: string[] = [];
  jobTypes: string[] = [];
  experienceLevels: string[] = [];
  companyTypes: string[] = [];

  // Job data
  jobs: Job[] = [
    {
      id: 1,
      title: 'Senior UI/UX Designer',
      location: 'Tucson, AZ',
      jobType: 'Hybrid',
      experienceLevel: 'Senior-level',
      companyType: 'Corporate',
      companyName: 'Laborum',
      salaryRange: '$120K - $150K',
      logo: 'pyramid-icon.png',
      isHot: true,
    },
    {
      id: 2,
      title: 'Senior UI/UX Designer',
      location: 'Santa Ana, CA',
      jobType: 'On site',
      experienceLevel: 'Senior-level',
      companyType: 'Corporate',
      companyName: 'Laborum',
      salaryRange: '$120K - $150K',
      logo: 'rounded-icon.png',
      isHot: false,
    },
    {
      id: 3,
      title: 'UI / UX Designer',
      location: 'Columbus, OH',
      jobType: 'Remote',
      experienceLevel: 'Mid-level',
      companyType: 'Startup',
      companyName: 'Laborum',
      salaryRange: '$95K - $120K',
      logo: 'bubbles-colored.png',
      isHot: true,
    },
    {
      id: 4,
      title: 'FrontEnd Developer',
      location: 'Tulsa, OK',
      jobType: 'On site',
      experienceLevel: 'Mid-level',
      companyType: 'Startup',
      companyName: 'Laborum',
      salaryRange: '$95K - $120K',
      logo: '2logo.png',
      isHot: false,
    },
  ];

  filteredJobs!: Job[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filteredJobs = [...this.jobs];
    this.generateFilterOptions(); // Generate filter options dynamically
  }

  generateFilterOptions(): void {
    this.locations = Array.from(new Set(this.jobs.map((job) => job.location)));
    this.jobTypes = Array.from(new Set(this.jobs.map((job) => job.jobType)));
    this.experienceLevels = Array.from(
      new Set(this.jobs.map((job) => job.experienceLevel))
    );
    this.companyTypes = Array.from(
      new Set(this.jobs.map((job) => job.companyType))
    );
  }

  onCardClick(job: Job): void {
    this.selectedJob = job;
    this.showFilterContent = true;
  }

  onCardClickSm(job: Job): void {
    this.router.navigate(['/filter-content', job.id], { state: { job } });
  }

  applyFilters(): void {
    this.filteredJobs = this.jobs.filter((job) => {
      const matchesSearchQuery = this.searchQuery
        ? job.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;

      const matchesLocation = this.selectedLocation
        ? job.location.toLowerCase() === this.selectedLocation.toLowerCase()
        : true;

      const matchesJobType = this.selectedJobType
        ? job.jobType.toLowerCase() === this.selectedJobType.toLowerCase()
        : true;

      const matchesExperienceLevel = this.selectedExperienceLevel
        ? job.experienceLevel.toLowerCase() ===
          this.selectedExperienceLevel.toLowerCase()
        : true;

      const matchesCompanyType = this.selectedCompanyType
        ? job.companyType.toLowerCase() ===
          this.selectedCompanyType.toLowerCase()
        : true;

      return (
        matchesSearchQuery &&
        matchesLocation &&
        matchesJobType &&
        matchesExperienceLevel &&
        matchesCompanyType
      );
    });
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedLocation = '';
    this.selectedJobType = '';
    this.selectedExperienceLevel = '';
    this.selectedCompanyType = '';
    this.filteredJobs = [...this.jobs];
  }
}
