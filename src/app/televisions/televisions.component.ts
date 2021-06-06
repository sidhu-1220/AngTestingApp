import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Product } from '../Models/product.model';


@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {
  televisions:Product[]=[];

  // Inject Object of data service class
  constructor(private dsObj:DataService){
  }

  ngOnInit(){
    this.dsObj.getTelevisionData().subscribe(
      Televisiondata=>{
        this.televisions=Televisiondata;
      },
      err=>{
        console.log("err is",err);
      }
    )

  }

}
