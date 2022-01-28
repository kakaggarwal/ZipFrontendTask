import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PostService } from 'src/app/core/services/post/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  private _posts: Post[] = [];

  postTableSource = new MatTableDataSource<Post>();
  displayedColumns = Object.keys(Post);

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    console.log(this.displayedColumns);

    this.postService.getPosts().subscribe(data => {
      console.log(data);
    });
  }

}
