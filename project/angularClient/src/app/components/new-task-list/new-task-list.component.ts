import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task-service.service'
declare var window: any;

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss']
})
export class NewTaskListComponent implements OnInit {
  displayName: string = '';
  formModal: any;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  creteNew() {
    this.displayName = "";
    this.formModal.show();
  }
  saveNew() {
    this.taskService.createTasks(this.displayName).subscribe(data => {
      console.log(data);
      this.formModal.hide();
      //this.loadTaskList();

    });
  }
  ngAfterViewInit() {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('createModal')
    );
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('createModal')
    );
  }
}
