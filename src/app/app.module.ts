import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ChartsModule } from 'ng2-charts';
import { PiechartComponent } from './piechart/piechart.component';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { ClickOutside } from './pipes/click-outside';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TaskCreateComponent,
    TaskListComponent,
    PiechartComponent,
    FilterByPipe,
    ClickOutside
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    AppService,
    FilterByPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
