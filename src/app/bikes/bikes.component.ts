import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Product } from '../Models/product.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikes:Product[]=[];

  // Inject Object of data service class
  constructor(private dsObj:DataService){
  }

  ngOnInit(){
    // obj initialization logic
    this.bikes=this.dsObj.getMobilesData();
  }

}
