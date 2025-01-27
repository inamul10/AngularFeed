import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-feedback',
  imports: [NgIf],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent implements OnInit {
  isAdmin: any;
  constructor(
    private feedbackService: FeedbackService,
    private router: Router
  ) {}
  ngOnInit() {
    this.isAdmin = JSON.parse(localStorage.getItem('isAdmin') || 'null');
  }

  async feedbackCategories() {
    await this.feedbackService.getFeedbackCategories();
    this.router.navigate(['home', 'feedback', 'showFeedback']);
  }

  viewFeedbacks(data: any) {
    this.router.navigate(['home', 'feedback', 'viewFeedbackForm']);
  }

  postFeedback() {
    console.log('POST FEEDBACK');
  }

  alreadySubmittedFeedbacks() {
    console.log('already submitted feedback');
  }
}
