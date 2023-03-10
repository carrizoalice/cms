import { Component } from '@angular/core';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  vegetables: Vegetable[];

  constructor() {
    this.vegetables = [
      { name: 'apple' },
      { name: 'banana' },
      { name: 'strawberry' },
      { name: 'orange' },
      { name: 'kiwi' },
      { name: 'cherry' },
    ];
  }
}
