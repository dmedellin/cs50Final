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
  goals: any[] = [];
  tasks: any[] = [];
  displayName: string = '';
  formModal: any;
  offcanvas: any;
  selectedTaskLis: any;
  sessionModal: any;
  timeDisplay: any;

  constructor(private taskService: TaskServiceService) {
    this.loadTaskList();

  }
  ngAfterViewInit() {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('createModal')
    );
    this.offcanvas = new window.bootstrap.Offcanvas(
      document.getElementById('offcanvasWithBothOptions')
    );
    this.sessionModal = new window.bootstrap.Modal(
      document.getElementById('sessionModal')
    );
  }
  startSession() {
    var duration = 60 * 25;
    var timer = duration, minutes: number, seconds: number;
    setInterval(() => {
      minutes = parseInt((timer / 60).toString(), 10);
      seconds = parseInt((timer % 60).toString(), 10);

      var displayMinutes = minutes < 10 ? "0" + minutes : minutes;
      var displaySeconds = seconds < 10 ? "0" + seconds : seconds;

      this.timeDisplay = displayMinutes + ":" + displaySeconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
    this.sessionModal.show();
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
  }
  creteNew() {
    this.displayName = "";
    this.formModal.show();
  }
  openOffset(id: any) {
    this.selectedTaskLis = id;
    this.tasks = [];
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

