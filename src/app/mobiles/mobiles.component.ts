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
    // obj initialization logic
    this.mobiles=this.dsObj.getMobilesData();
  }

}
