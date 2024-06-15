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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void{
  }
}
