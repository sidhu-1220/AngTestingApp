import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';
import { Post } from '../Models/post.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  postObj:Post;
  constructor(private ar:ActivatedRoute, private fs:FakedataService) { }

  ngOnInit(): void {
    // get id from URL
    let id=this.ar.snapshot.params.id;
    
    // get data of posts with this current id
    this.fs.getPostsById(id).subscribe(
      obj=>{
        this.postObj=obj;
      },
      err=>{
        console.log("err in reading post",err)
      }
    )

  }

}
