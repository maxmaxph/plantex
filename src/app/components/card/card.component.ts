import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantlistComponent } from '../plantlist/plantlist.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  @Input() maSuperPlante1!: Plant;  
  constructor() {
   
  }
  
}
