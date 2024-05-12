import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatChipInputEvent } from "@angular/material/chips";
import { MatChipEditedEvent } from "@angular/material/chips";
import { ENTER, COMMA } from "@angular/cdk/keycodes";
import { ActivatedRoute } from '@angular/router';

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
  videoStatus: FormControl = new FormControl('');

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: string[] = [];
  selectedFile!:File;
  selectedFileName = '';
  videoId = '';

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  constructor(private activatedRoute: ActivatedRoute){ 
    this.videoId = this.activatedRoute.snapshot.params.videoId;
    this.saveVideoDetailsForm = new FormGroup({
      title: this.title,
      description: this.description,
      videoStatus: this.videoStatus
    })
  }
  ngOnInit(): void {

  }
  
  remove(value: string): void {
    const index = this.tags.indexOf(value);

    if (index >= 0) {
      this.tags.splice(index, 1);

      this.announcer.announce(`Removed ${value}`);
    }
  }

  onFileSelected($event: Event){
    this.selectedFile = event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
  }

  onUpload(){
    
  }
}
