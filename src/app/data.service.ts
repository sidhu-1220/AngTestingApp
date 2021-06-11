import { Injectable } from '@angular/core';
import { Product } from './Models/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // inject HttpClient service object
  constructor(private hc:HttpClient) { }

  // Mobiles data
  getMobilesData():Observable<Product[]>{
      //http get
      return this.hc.get<Product[]>("http://localhost:3000/mobiles");
    }

  // Bikes Data
  getBikesData():Observable<Product[]>{
      //http get
      return this.hc.get<Product[]>("http://localhost:3000/bikes");
    }
  
  // Television Data
  getTelevisionData():Observable<Product[]>{
      //http get
      return this.hc.get<Product[]>("http://localhost:3000/televsion");
    }  
}
