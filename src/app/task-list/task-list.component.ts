import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { environment } from 'src/environments/environment';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnChanges {
  @Input() isTaskUpdated : boolean;
  @Input() issearchText : string;
  @Output() tasksUpdated = new EventEmitter();
  public tasksListResponse : any = [];
  showCreateOrEditTaks : boolean = false;
  taskInputData : any = {};
  isEnablleTextForTask : boolean = false;

  constructor(
    private appService : AppService
  ) { }

  ngOnInit() {
    this.callDataApi();
  }

  ngOnChanges(changes : SimpleChanges) {
    if(changes.isTaskUpdated && changes.isTaskUpdated.currentValue !== 'undefined') {
      this.callDataApi();
    }
    if(changes.issearchText && changes.issearchText.currentValue !== 'undefined') {
      //this.searchTaskList();
    }
  }

  callDataApi() {
    this.tasksListResponse = [];
    this.appService.get(environment.createNewTaskApi, 'Authorization', localStorage.getItem('access_token')).subscribe((response : any) => {
      if(response) {
        this.tasksListResponse = response.tasks;
        this.tasksUpdated.emit('Updated');
      }
    });
  }

  editTask(item) {
    this.showCreateOrEditTaks = true;
    this.isEnablleTextForTask = true;
    this.taskInputData = item;
  }

  updateTaskList() {
    this.showCreateOrEditTaks = false;
    this.isEnablleTextForTask = false;
    this.taskInputData = {};
    this.callDataApi();
    this.tasksUpdated.emit('Updated');
  }

  deleteTask(item) {
    if(item && item._id) {
      this.appService.delete(environment.createNewTaskApi + '/' + item._id, 'Authorization', localStorage.getItem('access_token')).subscribe((response : any) => {
        this.updateTaskList();
        this.tasksUpdated.emit('Updated');
      })
    }
  }

  updateComplete($event, item) {
    item.completed = $event.currentTarget.checked;
    this.appService.put(environment.createNewTaskApi + '/'+ item._id, item, 'Authorization', localStorage.getItem('access_token')).subscribe((response : any) => {
      if(response && response.msg) {
        this.updateTaskList();
      }
    });
  }
}
