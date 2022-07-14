import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) {


  }

  getTasks() {
    return this.http.get("/GetTaskList");

  }
  createTasks(displayName: any) {
    return this.http.post("/CreateTaskList", { displayName: displayName });

  }
}
