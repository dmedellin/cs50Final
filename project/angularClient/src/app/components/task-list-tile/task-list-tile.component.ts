import { Component, OnInit, Input } from '@angular/core';
import { EventQueueService } from 'src/app/services/event-queue.service';
import { AppEvent } from 'src/app/types/AppEvent';
import { AppEventType } from 'src/app/types/AppEventType';
import { TaskService } from '../../services/task-service.service'
declare var window: any;

@Component({
  selector: 'app-task-list-tile',
  templateUrl: './task-list-tile.component.html',
  styleUrls: ['./task-list-tile.component.scss']
})
export class TaskListTileComponent implements OnInit {
  @Input() goal: any; // decorate the property with @Input()

  sessionModal: any;
  timeDisplay: any;
  intervalId: any;
  duration: any;
  timer: any;
  sessionTime: any;
  taskId: any;
  constructor(private taskService: TaskService, private eventQueue: EventQueueService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.sessionModal = new window.bootstrap.Modal(
      document.getElementById('sessionModal')
    );
  }

  openDetails(taskId: any) {
    this.eventQueue.dispatch(new AppEvent(AppEventType.OpenTaskListDetails, { taskId: taskId }));
  }

  saveSession() {
    this.taskService.saveSession(this.taskId, this.sessionTime, null).subscribe(data => {
      console.log(data);
    });
  }

  startSession(taskId: any) {
    this.taskId = taskId;
    this.sessionTime = 0;
    if (this.intervalId)
      clearInterval(this.intervalId)

    this.duration = 60 * 1;
    this.startTimer(this.duration);
    this.sessionModal.show();
  }
  startTimer(duration: number) {
    this.timer = duration;
    var minutes: number, seconds: number;
    this.intervalId = setInterval(() => {
      minutes = parseInt((this.timer / 60).toString(), 10);
      seconds = parseInt((this.timer % 60).toString(), 10);

      var displayMinutes = minutes < 10 ? "0" + minutes : minutes;
      var displaySeconds = seconds < 10 ? "0" + seconds : seconds;

      this.timeDisplay = displayMinutes + ":" + displaySeconds;
      var timepast = --this.timer;
      if (timepast < 0) {
        this.completeSession();
      }
      else {
        this.sessionTime++;
      }
    }, 1000);
  }
  restartSession() {
    this.startTimer(this.timer);
  }

  pauseSession() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    else {
      if (this.timer > 0)
        this.restartSession();
    }
  }
  completeSession() {
    clearInterval(this.intervalId);
  }
}
