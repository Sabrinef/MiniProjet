import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/Comment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url = 'http://localhost:3000/comments/';

  constructor(private http: HttpClient) { }

  getComment(){
    return this.http.get<Comment[]>(this.url);
  }
  postComent(Comment: Comment){
    return this.http.post(this.url, Comment);
  }
  deleteComent(id){
    return this.http.delete(this.url + id);
  }
  updateComent(Comment: Comment){
    return this.http.put(this.url + Comment.id , Comment);
  }
  searchComent(id){
    return this.http.get<Comment>(this.url + id);
  }
  searchCommentFood(id){
    return this.http.get<Comment[]>("http://localhost:3000/comments?food.id="+id); 
  }

}
