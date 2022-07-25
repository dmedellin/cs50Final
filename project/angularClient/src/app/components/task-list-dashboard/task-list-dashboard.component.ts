import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task-service.service'
declare var window: any;

@Component({
  selector: 'app-task-list-dashboard',
  templateUrl: './task-list-dashboard.component.html',
  styleUrls: ['./task-list-dashboard.component.scss']
})
export class TaskListDashboardComponent implements OnInit {
  rows: any[] = [];
  goals: any[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTaskList();
  }



  loadTaskList() {
    this.rows = [];
    this.goals = [];
    this.taskService.getTasksList().subscribe(data => {
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
    console.log(this.rows);
  }

}
