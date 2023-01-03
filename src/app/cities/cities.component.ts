import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {

  @Input() city!:string; 
  @Input() selection!:string;

  @Output() cityClickedEvent = new EventEmitter<string>(); 


  onCityClicked(city: string): void {
    this.cityClickedEvent.emit(city);
  }
}
