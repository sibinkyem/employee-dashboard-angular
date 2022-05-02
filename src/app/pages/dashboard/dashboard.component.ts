import { Component, OnInit } from '@angular/core';
import { LoggedInUserService } from 'src/app/core/services';

@Component({
  selector: 'emp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user!: string;
  constructor(private loginService: LoggedInUserService) {}

  ngOnInit(): void {
    this.user = this.loginService.loggedInUserDetail.name;
  }
}
