import { Component, OnInit } from '@angular/core';
import { PlantsService } from "../../services/plants.service";
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  allPlants!: Plant[];
  plantsToDisplay!: Plant[];
  categories!: string[];
 

  constructor(private plantsService: PlantsService) {}

ngOnInit() {
    this.plantsService.getPlants().subscribe((data: Plant[]) => {
      console.log(data);

      this.plantsToDisplay = [...data];
      this.allPlants = [...data];
      // Pour supprimer les doublons d'un tableau
      // [...new Set(tableau)]
      this.categories = [
        ...new Set(this.plantsToDisplay.map((plant) => plant.categorie)),
      ];
      console.log('this.categories : ', this.categories);
    });
  }

  aLecouteDeLenfant(categoryDeLenfant: string[]) {
    console.log('categoryDeLenfant', categoryDeLenfant);
    // on garde les plantes dont la
    // categorie est inclu dans le tableau categoryDeLenfant
    this.plantsToDisplay = this.allPlants.filter((plant) =>
      categoryDeLenfant.includes(plant.categorie)
    );
  }
}
