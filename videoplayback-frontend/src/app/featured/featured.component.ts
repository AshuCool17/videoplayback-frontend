import { Component, OnInit } from '@angular/core';
import { VideoService } from "../video.service";

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent implements OnInit{

  constructor(private videoService: VideoService){

  }
  ngOnInit(): void{
    this.videoService.getAllVideos();
  }
}
