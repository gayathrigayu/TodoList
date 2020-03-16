import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskCreateComponent } from './task-create.component';
import { AppService } from '../app.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

class MockService {
  public get(_url, tokenKey ?: any, token ?: any): Observable<any> {
    return of({});
  }
  public post(_url, data, tokenKey ?: any, token ?: any) {
    return of({});
  }
  public put(_url, data, tokenKey ?: any, token ?: any) {
    return of({});
  }
  public delete(_url, tokenKey ?: any, token ?: any) {
    return of({});
  }
}

describe('TaskCreateComponent', () => {
  let component: TaskCreateComponent;
  let fixture: ComponentFixture<TaskCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [TaskCreateComponent],
      providers: [
        {
          provide: AppService, useClass: MockService,
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
