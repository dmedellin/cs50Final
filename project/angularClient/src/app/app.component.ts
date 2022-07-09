import { Component } from '@angular/core';
import { TaskServiceService } from './services/task-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularClient';
  constructor(private taskService: TaskServiceService) {

  }
}

