import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlantlistComponent } from './components/plantlist/plantlist.component';
import { CardComponent } from './components/card/card.component';
import { FilterbarComponent } from './components/filterbar/filterbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SortbarComponent } from './components/sortbar/sortbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageMyPlantsComponent,
    PageAdminComponent,
    PageNotFoundComponent,
    PlantlistComponent,
    CardComponent,
    FilterbarComponent,
    SearchbarComponent,
    SortbarComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
