import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Injectable } from "@angular/core";
import { UploadVideoComponent } from "./upload-video/upload-video.component";
import { UploadVideoResponse } from "./upload-video/UploadVideoResponse";

@Injectable({
    providedIn: 'root'
})

export class VideoService {
    
    constructor(private httpClient: HttpClient){

    }

    uploadVideo(fileEntry: File): Observable<any>{
        const formData = new FormData()
        formData.append('file', fileEntry, fileEntry.name);

        return this.httpClient.post<UploadVideoResponse>("http://localhost:8080/api/videos", formData);
    }

    uploadThumbnail(fileEntry: File):
}
