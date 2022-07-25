import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { NewTaskListComponent } from './components/new-task-list/new-task-list.component';
import { TaskListTileComponent } from './components/task-list-tile/task-list-tile.component';
import { TaskListDashboardComponent } from './components/task-list-dashboard/task-list-dashboard.component';
import { TaskListDetailsComponent } from './components/task-list-details/task-list-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewTaskListComponent,
    TaskListTileComponent,
    TaskListDashboardComponent,
    TaskListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
