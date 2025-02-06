import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router, NavigationEnd, } from '@angular/router';

@Component({
  selector: 'app-filter-content',
  imports: [NgFor],
  templateUrl: './filter-content.component.html',
  styleUrls: ['./filter-content.component.scss'],
})
export class FilterContentComponent implements OnInit {
  dataField: any[] = [];
  searchResult: string = '';
  job: any;

  constructor(private router: Router) {}

ngOnInit(): void {
  this.fetchData();
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      const navigation = this.router.getCurrentNavigation();
      this.job = navigation?.extras.state?.['job'];
      if (!this.job) {
        console.error('Job data is missing');
        this.router.navigate(['/']);
      }
    }
  });
}

  fetchData(): void {
    this.dataField = [
      {
        img: 'filter-hero-img.png',
        price: '$95K - $120K',
        jobTitle: 'UX/UI Designer',
        location: 'Tucson, AZ',
        jobType: 'Remote',
        workType: 'Full Time',
        experienceLevel: 'Mid-Senior Level',
        companyName: 'Laborum',
        companyLogo: 'pyramid-icon.png',
        postedAt: 'Posted 1hr ago',
        recruiterIcon: 'recruiter.png',
        recruiterName: 'Romy Murray',
        recruiterPosition: 'Hiring Manager',
        isAgent: ['Job Agent', ''],
        jobDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dictumst vulputate odio pellentesque sit quis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lorem aliquam sed lacinia quis. Nibh dictumst vulputate odio pellentesque sit quis ac, sit ipsum. Sit rhoncus velit in sed massa arcu sit eu.',
        responsibilities: [
          'Design and prototype user interfaces.',
          'Collaborate with cross-functional teams.',
          'Deliver high-quality UX/UI solutions.',
        ],
        numberOfEmployees: '100 - 300 employees',
        activity: 'Outsource',
        workingDays: 'Mon - Fri',
        companyDescription:
          'Incididunt velit consequat eu esse cillum ut elit ad ut irure dolore sunt Lorem tempor consectetur esse culpa dolor. Ut non minim dolor irure tempor esse aute culpa eu enim.',
        outsourced: 'Outsource',
      },
    ];
  }
}
