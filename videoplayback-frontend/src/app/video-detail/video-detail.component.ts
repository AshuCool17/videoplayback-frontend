import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  standalone: true,
  imports: [],
  templateUrl: './video-detail.component.html',
  styleUrl: './video-detail.component.css'
})
export class VideoDetailComponent implements OnInit{

  videoId!: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.videoId = this.activatedRoute.snapshot.params.videoId;
  }

  ngOnInit(): void{
  }
}
