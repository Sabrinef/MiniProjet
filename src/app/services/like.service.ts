import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Like } from '../models/like'

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  url = 'http://localhost:3000/likes/';
  constructor(private http: HttpClient) { }

  getLike(){
    return this.http.get<Like[]>('http://localhost:3000/likes/');
  }
  postLike(Like: Like){
    return this.http.post(this.url, Like);
  }
  deleteLike(id){
    return this.http.delete(this.url + id);
  }
  getnbrelike(){
    return this.http.get<Like[]>('http://localhost:3000/likes/').toPromise.length;
  }
  searchlikesFood(id){
    return this.http.get<Like[]>("http://localhost:3000/likes?food.id="+id); 
  }
}
