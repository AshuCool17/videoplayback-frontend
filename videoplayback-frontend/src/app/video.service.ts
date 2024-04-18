import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class VideoService {
    
    constructor(private httpClient: HttpClient){

    }

    uploadVideo(fileEntry: File): Observable<any>{
        const formData = new FormData()
    }
}
