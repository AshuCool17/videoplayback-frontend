import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) { }

  postComment(commentDto: any, videoId: string){
    this.httpClient.post("http://localhost:8080/api/videos/" + videoId + "/comment", commentDto);
  }
}
