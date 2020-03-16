import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
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

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ RouterTestingModule, FormsModule ],
      declarations: [ LoginComponent ],
      providers : [
        {
          provide : AppService, useClass: MockService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
