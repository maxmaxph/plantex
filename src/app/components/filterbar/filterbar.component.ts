import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})
export class FilterbarComponent {
@Input() categoriesPlants!: string[];
@Output() categorieEnvoiParent = new EventEmitter<string[]>();// 1 OUTPUT DU TS ENFANT
checkedCategorie: string[] = [];

onCheckCategory(e: Event) {
    const target = e.target as HTMLInputElement;
    console.log("Valeur de la checkbox", target.value);
    console.log("Est elle cochée ? : ", target.checked);

    if (target.checked) {
      if (
        this.checkedCategorie.length === this.categoriesPlants.length
      ) {
        this.checkedCategorie = [];
      }
      this.checkedCategorie.push(target.value);
    } else {
      this.checkedCategorie = this.checkedCategorie.filter(
        (x) => x != target.value
      );
    }

    if (this.checkedCategorie.length === 0) {
      this.checkedCategorie = [...this.categoriesPlants];
    }
    console.log(this.checkedCategorie);
    
    this.categorieEnvoiParent.emit(this.checkedCategorie) //2 EMIT SUR LE TS DE L'ENFANT
    }
  }
