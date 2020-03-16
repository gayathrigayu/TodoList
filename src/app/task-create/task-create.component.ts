import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {
  @Input() enableNewTaskField: any;
  @Input() taskData: any;
  @Output() onTaskComplete = new EventEmitter();
  public isEnableNewTaskTextField: boolean = false;
  public newTaskInput: string = '';
  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkAndLoadScreen();
    if (this.enableNewTaskField) {
      this.isEnableNewTaskTextField = true;
    }
    if (this.taskData) {
      if (this.taskData.name) {
        this.newTaskInput = this.taskData.name;
      }
    }
  }

  public checkAndLoadScreen() {
    setTimeout(() => {
      this.appService.get(environment.dashboardApi, 'Authorization', localStorage.getItem('access_token')).subscribe((response: any) => {
        if (response) {
          if (response.totalTasks && response.totalTasks != 0) {
            this.router.navigate(['dashboard']);
          }
        }
      });
    }, 0);
  }

  enableTaskInput() {
    this.isEnableNewTaskTextField = true;
  }

  createTask() {
    if (this.newTaskInput && this.newTaskInput != '') {
      let inputData: any;
      console.info('task data = ', this.taskData);
      if (this.taskData && this.taskData._id) {
        inputData = this.taskData;
        inputData.name = this.newTaskInput;
        this.appService.put(environment.createNewTaskApi + '/' + inputData._id, inputData, 'Authorization', localStorage.getItem('access_token')).subscribe((response: any) => {
          this.checkResponseAndEmit(response);
        });
      } else {
        inputData = {};
        inputData.name = this.newTaskInput;
        this.appService.post(environment.createNewTaskApi, inputData, 'Authorization', localStorage.getItem('access_token')).subscribe((response: any) => {
          this.checkResponseAndEmit(response);
        });
      }
    }
  }

  checkResponseAndEmit(response) {
    if (response && response.msg) {
      this.onTaskComplete.emit(response.msg);
      this.router.navigate(['dashboard']);
    }
  }

  closeTask() {
    this.onTaskComplete.emit('closed');
    this.router.navigate(['dashboard']);
  }
}
