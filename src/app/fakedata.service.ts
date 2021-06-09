import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './Models/post.model';
import {fakeuser} from './Models/fakeuser.model';

@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  // inject HTTP client object
  constructor(private hc:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.hc.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }


  getUsers():Observable<fakeuser>{
    return this.hc.get<fakeuser>("https://reqres.in/api/users?page=2");
  }
}
