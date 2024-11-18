import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-detail',
  standalone: true,
  imports: [],
  templateUrl: './video-detail.component.html',
  styleUrl: './video-detail.component.css'
})
export class VideoDetailComponent implements OnInit{

  videoId!: string;
  videoUrl!: string;
  videoTitle!: string;
  videoDescription!: string;
  tags: Array<string> = [];
  videoAvailable: boolean = false;
  likeCount: number = 0;
  dislikeCount: number = 0;
  viewCount: number = 0;


  constructor(private activatedRoute: ActivatedRoute,
              private videoService: VideoService) {
    this.videoId = this.activatedRoute.snapshot.params.videoId;
    this.videoService.getVideo(this.videoId).subscribe(data=>{
      this.videoUrl = data.videoUrl;
      this.videoTitle = data.title;
      this.videoDescription = data.description;
      this.tags = data.tags;
      this.videoAvailable = true;
      this.likeCount =  data.likeCount;
      this.dislikeCount =  data.disLikeCount;
      this.viewCount = data.viewCount;
    })
  }

  ngOnInit(): void{
  }

  likeVideo() {
    this.videoService.likeVideo(this.videoId).subscribe(data=>{
      this.likeCount = data.likeCount;
      this.dislikeCount = data.disLikeCount;
    }
    );
  }

  disLikeVideo(){
    this.videoService.dislikeVideo(this.videoId).subscribe(data=>{
      this.likeCount = data.likeCount;
      this.dislikeCount = data.disLikeCount;
    });
  
  }

}
