import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageAdminComponent } from "./pages/page-admin/page-admin.component";
import { PageHomeComponent } from "./pages/page-home/page-home.component";
import { PageMyPlantsComponent } from "./pages/page-my-plants/page-my-plants.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: PageHomeComponent },
  { path: "my-plants", component: PageMyPlantsComponent },
  { path: "admin", component: PageAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
