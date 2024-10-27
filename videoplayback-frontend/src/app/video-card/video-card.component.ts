import { Component } from '@angular/core';
import { VideoDto } from '../video-dto';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css'
})
export class VideoCardComponent {

  @Input()
  video!: VideoDto;
}
