import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/service/user.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["../app.component.css"]
})
export class DashboardComponent implements OnInit {
  totalUsers: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .then(response => (this.totalUsers = response.length));
  }
}
