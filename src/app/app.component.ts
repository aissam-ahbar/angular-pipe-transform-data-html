import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  happynewyear: Date = new Date(2023, 0, 1);
  name: string = 'aissam';
  salary: number = 1500.5;
  largeNumber: number = 12345.12345;
  decimal: number = 0.85;
}
