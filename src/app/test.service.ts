import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor() { }

  data:any;
  
  // To handover data to other
  getData(){
      return this.data;
  }

  // to receive data from other
  setData(value){
    this.data=value;  
  }

}
