import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <div *ngFor='let country of buttonData'>
    <button (click)='buttonClick(country)' >{{country}}</button>
    </div>
    <h1 *ngIf='buttonData.length == 0'>Congratulations</h1>
  `,
})
export class App {
  name = 'Angular';
  data = { Germany: 'Berlin', Azerbaijan: 'Baku' };
  buttonData: any[] = [];
  selectedData: any[] = [];
  prevSelected: string = '';
  ngOnInit() {
    Object.entries(this.data).forEach((val) => {
      this.buttonData.push(...val);
    });
    console.log(this.buttonData);
  }
  buttonClick(data) {
    if (data != this.prevSelected && this.selectedData.includes(data)) {
      this.buttonData = this.buttonData.filter((val) => val != data);
      this.buttonData = this.buttonData.filter(
        (val) => val != this.prevSelected
      );
      this.selectedData = [];
    } else {
      this.selectedData = [];
    }
    this.prevSelected = data;
    Object.entries(this.data).forEach((val) => {
      if (val.includes(data)) {
        this.selectedData.push(...val);
      }
    });
  }
}

bootstrapApplication(App);
