import { Component, OnInit } from '@angular/core';
import { VideoService } from "../video.service";
import { VideoDto } from '../video-dto';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent implements OnInit{

  featuredVideos: Array<VideoDto> = [];
  constructor(private videoService: VideoService){

  }
  ngOnInit(): void{
    this.videoService.getAllVideos().subscribe(response => {
      this.featuredVideos = response;
    });
  }
}
