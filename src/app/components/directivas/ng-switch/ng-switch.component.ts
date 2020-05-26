import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent implements OnInit {
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
}
