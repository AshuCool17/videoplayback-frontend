import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { text } from 'express';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userId: string = '';

  constructor(private httpClient:HttpClient) { }

  subscribeToUser(userId: string): Observable<boolean>{
    return this.httpClient.post<boolean>("http://localhost:8080/api/user/subscribe/" + userId, null);
  }

  unsubscribeUser(userId: string): Observable<boolean>{
    return this.httpClient.post<boolean>("http://localhost:8080/api/user/unsubscribe/" + userId, null);
  }

  registerUser() {
    this.httpClient.get("http://localhost:8080/api/user/register", {responseType: "text"}).subscribe(data=>{
      this.userId = data;
    })
  }

  getUserId(){
    return this.userId;
  }
}
