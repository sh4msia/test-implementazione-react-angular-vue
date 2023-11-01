import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  accordion1 = true;
  accordion2 = false;
  accordion3 = false;
  accordion4 = false;
  accordion5 = false;

  appStructure = 'assets/app-structure.svg';
  syntax = 'assets/syntax.svg';
  routing = 'assets/routing.svg';
  stateManagement = 'assets/state-management.svg';
  feedback = 'assets/feedback.svg';
  reverseArrow = 'assets/reverse-arrow.svg';

  toggleAccordion1() {
    this.accordion1 = !this.accordion1;
  }

  toggleAccordion2() {
    this.accordion2 = !this.accordion2;
  }

  toggleAccordion3() {
    this.accordion3 = !this.accordion3;
  }

  toggleAccordion4() {
    this.accordion4 = !this.accordion4;
  }

  toggleAccordion5() {
    this.accordion5 = !this.accordion5;
  }
}
