import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../services/plants.service';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {
  allPlants!: Plant[];
  plantsToDisplay!: Plant[];
  categories!: string[];
  plantToDisplayFiltered!: Plant[];

  constructor(private plantsService: PlantsService) {}

  ngOnInit() {
    // Au chargement de la page, on récupère les données des plantes depuis le service
    this.plantsService.getPlants().subscribe((data: Plant[]) => {
      console.log(data);

      // On initialise les listes de plantes à afficher avec les données récupérées
      this.plantsToDisplay = [...data];
      this.allPlants = [...data];

      // On extrait les catégories uniques des plantes pour la barre de filtre
      this.categories = [
        ...new Set(this.plantsToDisplay.map((plant) => plant.categorie)),
      ];
      console.log('this.categories : ', this.categories);

      // On initialise la liste filtrée avec toutes les plantes au départ
      this.plantToDisplayFiltered = [...this.plantsToDisplay];
    });
  }

  // Méthode pour la recherche des plantes en fonction du texte de recherche et des catégories sélectionnées
  onSearchAndFilter(e: Event | null, selectedCategories: string[]) {
    console.log('Search event triggered!');

    // Vérifier si e est défini (différent de null)
    const searchValue = e
      ? (e.target as HTMLInputElement)?.value.toLowerCase()
      : '';

    // Si le texte de recherche et les catégories sont renseignés
    if (searchValue && selectedCategories.length > 0) {
      // On filtre les plantes en fonction du texte de recherche et des catégories sélectionnées
      this.plantToDisplayFiltered = this.plantsToDisplay.filter((plant) => {
        const isMatchingCategory = selectedCategories.includes(plant.categorie);
        const isMatchingSearch = plant.nom.toLowerCase().includes(searchValue);
        // On retourne true si la plante correspond aux critères de recherche et de catégorie
        return isMatchingCategory && isMatchingSearch;
      });
    }
    // Si le texte de recherche est renseigné mais aucune catégorie n'est sélectionnée
    else if (searchValue) {
      // On filtre les plantes en fonction du texte de recherche
      this.plantToDisplayFiltered = this.plantsToDisplay.filter((plant) => {
        // On retourne true si la plante correspond au critère de recherche
        return plant.nom.toLowerCase().includes(searchValue);
      });
    }
    // Si aucune catégorie n'est sélectionnée mais le texte de recherche est vide
    else if (selectedCategories.length > 0) {
      // On filtre les plantes en fonction des catégories sélectionnées
      this.plantToDisplayFiltered = this.allPlants.filter((plant) =>
        selectedCategories.includes(plant.categorie)
      );
    }
    // Si aucun filtre n'est appliqué, on affiche toutes les plantes non filtrées
    else {
      this.plantToDisplayFiltered = this.plantsToDisplay;
    }
  }

  // Méthode appelée lorsque l'utilisateur effectue une recherche depuis la barre de recherche (app-searchbar)
  onSearchDesParents(e: Event) {
    const selectedCategories: string[] = []; // Aucune catégorie sélectionnée dans cette méthode
    // On appelle la méthode onSearchAndFilter en lui passant le texte de recherche et les catégories sélectionnées (aucune)
    this.onSearchAndFilter(e, selectedCategories);
  }

  // Méthode appelée lorsque l'utilisateur sélectionne ou désélectionne des catégories depuis la barre de filtre (app-filterbar)
  aLecouteDeLenfant(categoryDeLenfant: string[]) {
    // On appelle la méthode onSearchAndFilter en lui passant aucune texte de recherche et les catégories sélectionnées
    this.onSearchAndFilter(null, categoryDeLenfant);
  }
}
