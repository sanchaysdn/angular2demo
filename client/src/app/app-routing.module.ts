import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsersComponent } from "./user/controller/users.component";
import { UserDetailComponent } from "./user/controller/user-detail.component";
import { UserAddComponent } from "./user/controller/user-add.component";
import { UserUpdateComponent } from "./user/controller/user-update.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: UserDetailComponent },
  { path: "update/:id", component: UserUpdateComponent },
  { path: "users", component: UsersComponent },
  { path: "add", component: UserAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
