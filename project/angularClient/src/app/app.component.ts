import { Component } from '@angular/core';
import { TaskServiceService } from './services/task-service.service'
declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularClient';
  rows: any[] = [];
  tasks: any[] = [];
  goals: any[] = [];
  displayName: string = '';
  formModal: any;
  offcanvas: any;
  selectedTaskLis: any;
  constructor(private taskService: TaskServiceService) {
    this.loadTaskList();

  }
  ngAfterViewInit() {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    this.offcanvas = new window.bootstrap.Offcanvas(
      document.getElementById('offcanvasWithBothOptions')
    );
  }
  loadTaskList() {
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
  }
  creteNew() {
    this.displayName = "";
    this.formModal.show();
  }
  openOffset(id: any) {
    this.selectedTaskLis = id;
    this.taskService.getTasks(id).subscribe(data => {
      this.tasks = data as [];
    });
    this.offcanvas.show();
  }
  saveNew() {
    this.taskService.createTasks(this.displayName).subscribe(data => {
      console.log(data);
      this.formModal.hide();
      this.loadTaskList();

    });
  }
  deleteNew() {
    this.taskService.deleteTasks(this.selectedTaskLis).subscribe(data => {
      console.log(data);
      this.offcanvas.hide();
      this.loadTaskList();
    });
  }
}

