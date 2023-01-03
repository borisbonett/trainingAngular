import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public name:string = '';
  public cities:Array<string> = ['Barcelona', 'Madrid', 'Lima'];
  public selection!: string;
  public criteria:string = '';

  addNewCity(city: string):void {
    this.cities.push(city);
  }

  onCityClicked(city: string): void {
    console.log('City ->', city);
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }
}

