import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashBoardResponse: any;
  showCreateOrEditTaks: boolean = false;
  taskInputData: any = {};
  isEnablleTextForTask: boolean = false;
  pieChartInfo : number[];
  public isTaskListUpdated : boolean = false;
  public userName : string;
  constructor(
    private appService: AppService,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.userName = localStorage.getItem('user-name');
    this.getDashboardApi();
  }

  getDashboardApi() {
    this.appService.get(environment.dashboardApi, 'Authorization', localStorage.getItem('access_token')).subscribe((response: any) => {
      if(response) {
        this.dashBoardResponse = response;
        this.formDataForChart();
      }
    })
  }

  createTask() {
    this.isEnablleTextForTask = true;
    this.showCreateOrEditTaks = true;
  }

  logOut(){

    localStorage.removeItem("access_token");
    localStorage.removeItem('user-name');
    this.router.navigate(['']);


  }
  formDataForChart() {
    this.pieChartInfo = [];
    this.pieChartInfo.push(this.dashBoardResponse.tasksCompleted);
    this.pieChartInfo.push(this.dashBoardResponse.totalTasks);
  }

  onTaskCreated() {
    this.showCreateOrEditTaks = false;
    this.taskInputData = {};
    this.isEnablleTextForTask = false;
    this.getDashboardApi();
    this.isTaskListUpdated = true;
    setTimeout(() => {
      this.isTaskListUpdated = false;
    }, 5000);
  }

  clickedOutside() {
    this.showCreateOrEditTaks = false;
    this.isEnablleTextForTask = false;
    this.taskInputData = {};
  }

}
