import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent implements OnInit {
  public color: boolean = false;

  public people: any[] = [
    {
      name: 'Douglas Pace',
      age: 35,
      country: 'MARS',
    },
    {
      name: 'Peter Parker',
      age: 28,
      country: 'MX',
    },
    {
      name: 'Jose Carlos',
      age: 23,
      country: 'USA',
    },
    {
      name: 'Ricardo Peralta',
      age: 24,
      country: 'CH',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  public getColor(country: string) {
    switch (country) {
      case 'MX':
        return 'red';
      // break;

      case 'MARS':
        return 'blue';

      case 'USA':
        return 'greenyellow';

      case 'CH':
        return 'purple';

      default:
        'brown';
    }
  }
}
