import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  subscribeToUser(userId: string): Observable<Boolean>{
    return this.httpClient.post("http://localhost:8080/api/user/subscribe/" + userId, null);
  }
}
