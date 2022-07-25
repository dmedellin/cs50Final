import { Component, OnInit } from '@angular/core';
import { EventQueueService } from 'src/app/services/event-queue.service';
import { AppEventType } from 'src/app/types/AppEventType';
import { TaskService } from '../../services/task-service.service'
declare var window: any;

@Component({
  selector: 'app-task-list-details',
  templateUrl: './task-list-details.component.html',
  styleUrls: ['./task-list-details.component.scss']
})
export class TaskListDetailsComponent implements OnInit {
  offcanvas: any;
  tasks: any[] = [];
  selectedTaskLis: any;
  constructor(private taskService: TaskService, private eventQueue: EventQueueService) { }

  ngOnInit(): void {
    this.eventQueue.on(AppEventType.OpenTaskListDetails).subscribe(event => this.openOffset(event.payload.taskId));

  }
  ngAfterViewInit() {
    this.offcanvas = new window.bootstrap.Offcanvas(
      document.getElementById('offcanvasWithBothOptions')
    );

  }
  openOffset(id: any) {
    this.selectedTaskLis = id;
    this.tasks = [];
    this.taskService.getTasks(id).subscribe(data => {
      this.tasks = data as [];
    });
    this.offcanvas.show();
  }
  deleteNew() {
    this.taskService.deleteTasks(this.selectedTaskLis).subscribe(data => {
      console.log(data);
      this.offcanvas.hide();
      //this.loadTaskList();
    });
  }

}
