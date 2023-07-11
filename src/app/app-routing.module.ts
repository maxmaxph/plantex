import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageAdminComponent } from "./pages/page-admin/page-admin.component";
import { PageHomeComponent } from "./pages/page-home/page-home.component";
import { PageMyPlantsComponent } from "./pages/page-my-plants/page-my-plants.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch:"full" },// si un user arrive sur localhost:4200 on redirige vers localhost:4200/home
  { path: "home", component: PageHomeComponent },
  { path: "my-plants", component: PageMyPlantsComponent },
  { path: "admin", component: PageAdminComponent },
  { path: "**", component: PageNotFoundComponent},// redirection page 404 !!! important en derniere position!!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
