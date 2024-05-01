import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-save-video-details',
  standalone: true,
  imports: [],
  templateUrl: './save-video-details.component.html',
  styleUrl: './save-video-details.component.css'
})
export class SaveVideoDetailsComponent implements OnInit{

  saveVideoDetailsForm: FormGroup;
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  constructor(){ 
    this.saveVideoDetailsForm = new FormGroup({
      
    })
  }
  ngOnInit(): void {

  }
}
