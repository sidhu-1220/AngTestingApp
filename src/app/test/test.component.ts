import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FakedataService } from '../fakedata.service';
import { Post } from '../Models/post.model';
import {fakeuser} from '../Models/fakeuser.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit , OnDestroy {

  mySubscription:Subscription;

  myPosts:Post[]=[];

  myUsers;
  
  // inject Fakedata service object
  constructor(private fs:FakedataService) { }

   ngOnInit(): void {
     this.mySubscription= this.fs.getPosts().subscribe(
       postData=>{
         //assign Posts
         this.myPosts=postData;
       },
       err=>{
         console.log('Error in getting PostData ',err);
       }
     )
   }

  // ngOnInit(): void {
  //   this.fs.getUsers().subscribe(
  //     usersData=>{
  //       //assign Posts
  //       this.myUsers=usersData;
  //     },
  //     err=>{
  //       console.log('Error in getting PostData ',err);
  //     }
  //   )
  // }
  

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
