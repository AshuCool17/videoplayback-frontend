import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit{

  commentsForm: FormGroup;
  
  constructor(){
    this.commentsForm = new FormGroup({
      comment: new FormControl('comment'),
  });
  }

  ngOnInit(): void{

  }

  postComment() {
    const comment = this.commentsForm.get('comment')?.value;

    const commentDto = {
      "commentDto": comment,
      "authorId":
    }
  }
}
