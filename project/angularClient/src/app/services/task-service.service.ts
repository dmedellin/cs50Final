import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) {


  }

  getTasksList() {
    return this.http.get("/GetTaskList");
  }
  createTasks(displayName: any) {
    return this.http.post("/CreateTaskList", { displayName: displayName });

  }
  deleteTasks(id: any) {
    return this.http.post("/deleteTaskList", { id: id });
  }
  saveSession(projectId: any, duration: number, comments: any) {
    return this.http.post("/SaveSession", { projectId: projectId, duration: duration, comments: comments });
  }
  getTasks(id: any) {
    return this.http.get("/GetTasks?id=" + id);
  }
}
