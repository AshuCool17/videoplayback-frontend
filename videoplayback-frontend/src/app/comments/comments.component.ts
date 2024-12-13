import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit{

  @Input()
  videoId: string = '';
  commentsForm: FormGroup;
  
  constructor(private userService: UserService, private commentService: CommentsService){
    this.commentsForm = new FormGroup({
      comment: new FormControl('comment'),
  });
  }

  ngOnInit(): void{

  }

  postComment() {
    const comment = this.commentsForm.get('comment')?.value;

    const commentDto = {
      "commentText": comment,
      "authorId": this.userService.getUserId
    }
  }
}
