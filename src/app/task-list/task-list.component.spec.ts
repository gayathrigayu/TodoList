import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { TaskCreateComponent } from '../task-create/task-create.component';
import { AppService } from '../app.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { PipeTransform, Pipe } from '@angular/core';

class MockService {
  public get(_url, tokenKey?: any, token?: any): Observable<any> {
    return of({});
  }
  public post(_url, data, tokenKey?: any, token?: any) {
    return of({});
  }
  public put(_url, data, tokenKey?: any, token?: any) {
    return of({});
  }
  public delete(_url, tokenKey?: any, token?: any) {
    return of({});
  }
}

@Pipe({ name: 'filterByTask' })
class FilterByPipeMock implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    return items;
  }
}

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [TaskListComponent, TaskCreateComponent, FilterByPipeMock],
      providers: [
        {
          provide: AppService, useClass: MockService
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
