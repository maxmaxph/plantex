import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable, catchError, map, throwError } from "rxjs";
import { InterfacePlant } from '../interfaces/plant.interfaces';

@Injectable({
  providedIn: 'root'
})

export class PlantsService {
  constructor(private http: HttpClient) {}

  getPlants() : any {
    const response = this.http.get<InterfacePlant>("http://localhost:3000/api/plants").pipe(map(e => e.data))
        
    return response
  };
  }