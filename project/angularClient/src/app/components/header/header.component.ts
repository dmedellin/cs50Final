import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service'
declare var window: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displayName: string = '';
  formModal: any;

  constructor(private taskService: TaskServiceService) { }
  creteNew() {
    this.displayName = "";
    this.formModal.show();
  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('createModal')
    );
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('createModal')
    );
  }
  saveNew() {
    this.taskService.createTasks(this.displayName).subscribe(data => {
      console.log(data);
      this.formModal.hide();
      //this.loadTaskList();

    });
  }
}
