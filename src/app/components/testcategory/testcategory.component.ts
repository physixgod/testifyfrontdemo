import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';

interface ExpandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-testcategory',
  standalone: true,
  imports: [
    TableModule, 
    ButtonModule, 
    TagModule, 
    RippleModule,  
    CommonModule
  ],
  templateUrl: './testcategory.component.html',
  styleUrls: ['./testcategory.component.scss']
})

export class TestcategoryComponent implements OnInit {
  expandedRows: { [key: string]: boolean } = {};
  selectedRow = null;
  testCategories = [
    {
      name: 'Login Tests',
      updates: '2025-04-01',
      status: 'Passed',
      tests: [
        { name: 'Valid Login', updated: '2025-04-01', status: 'Passed' },
        { name: 'Invalid Password', updated: '2025-03-28', status: 'Failed' },
        { name: 'Remember Me', updated: '2025-03-30', status: 'Passed' }
      ]
    },
    {
      name: 'Filtering and Sorting Tests',
      updates: '2025-04-05',
      status: 'In Progress',
      tests: [
        { name: 'Filter by Price', updated: '2025-04-04', status: 'Passed' },
        { name: 'Sort by Popularity', updated: '2025-04-05', status: 'In Progress' }
      ]
    },
    {
      name: 'Cart & Checkout Tests',
      updates: '2025-04-03',
      status: 'Failed',
      tests: [
        { name: 'Add to Cart', updated: '2025-04-03', status: 'Passed' },
        { name: 'Remove from Cart', updated: '2025-04-03', status: 'Failed' },
        { name: 'Apply Coupon', updated: '2025-04-02', status: 'Failed' }
      ]
    }
  ];

  ngOnInit() {}

  // Toggle the expansion state
  toggleRowExpansion(category: any) {
    if (this.expandedRows[category.name]) {
      delete this.expandedRows[category.name]; // Collapse the row
    } else {
      this.expandedRows[category.name] = true; // Expand the row
    }
  }

  getSeverity(status: string) {
    switch (status) {
      case 'Passed': return 'success';
      case 'In Progress': return 'warn';
      case 'Failed': return 'danger';
      default: return 'info';
    }
  }
}
