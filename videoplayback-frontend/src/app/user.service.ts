import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  subscribeToUser(userId: string){
    return this.httpClient.post("http://localhost:8080/api/user/subscribe/")
  }
}
