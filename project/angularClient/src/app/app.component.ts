import { Component } from '@angular/core';
import { TaskServiceService } from './services/task-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularClient';
  rows: any[] = [];
  goals: any[] = [];
  displayName: string = '';
  constructor(private taskService: TaskServiceService) {
    this.taskService.getTasks().subscribe(data => {
      this.goals = data as [];
      var row: any = [];
      this.goals.forEach((element) => {
        row.push(element);
        if (row.length == 3) {
          this.rows.push(row);

          row = [];
        }
      });
      this.rows.push(row);
    });
  }
  saveNew() {
    this.taskService.createTasks(this.displayName).subscribe(data => {
      console.log(data);
    });
  }
}

