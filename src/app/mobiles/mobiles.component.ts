import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Product } from '../Models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  mobiles:Product[]=[];
  // Inject Object of data service class
  constructor(private dsObj:DataService){
  }

  ngOnInit(){
    this.dsObj.getMobilesData().subscribe(
      mobilesData=>{
        this.mobiles=mobilesData;
      },
      err=>{
        console.log("err is",err);
      }
    )

  }

}
