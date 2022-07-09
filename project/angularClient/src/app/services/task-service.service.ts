import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) {
    http.get("http://localhost:5000/graphcall").subscribe(x => {
      console.log(x);
    });

  }
}
