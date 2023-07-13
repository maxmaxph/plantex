import { Component, OnInit } from '@angular/core';
import { PlantsService } from "../../services/plants.service";
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  plantsToDisplay!: Plant[];
  categories!: string[];

  constructor(private plantsService: PlantsService) {}

 ngOnInit(): void {
    this.plantsService.getPlants().subscribe((plants) => {
      this.plantsToDisplay = plants;
      console.log(this.plantsToDisplay);
      this.categories = [...new Set(this.plantsToDisplay.map(plant=>plant.categorie))];

    });
  }
}
