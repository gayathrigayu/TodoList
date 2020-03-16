import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PiechartComponent } from './piechart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

describe('PiechartComponent', () => {
  let component: PiechartComponent;
  let fixture: ComponentFixture<PiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ RouterTestingModule, FormsModule ,ChartsModule ],
      declarations: [ PiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
