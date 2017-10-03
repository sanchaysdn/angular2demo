// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from "./app.component";
import { UsersComponent } from "./user/controller/users.component";
import { UserDetailComponent } from "./user/controller/user-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserAddComponent } from "./user/controller/user-add.component";
import { UserUpdateComponent } from "./user/controller/user-update.component";

// Services
import { UserService } from "./user/service/user.service";

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    DashboardComponent,
    UserAddComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
