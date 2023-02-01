import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"anu",password:"anu123",balance:0},
    1001:{acno:1001,username:"amal",password:"amal123",balance:0},
    1002:{acno:1002,username:"angel",password:"angel123",balance:0},
    1003:{acno:1003,username:"aneena",password:"aneena123",balance:0},
    1004:{acno:1003,username:"exel",password:"exel123",balance:0}
  }
}
