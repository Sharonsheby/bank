import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any

  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"anu",password:"anu123",balance:0},
    1001:{acno:1001,username:"amal",password:"amal123",balance:0},
    1002:{acno:1002,username:"angel",password:"angel123",balance:0},
    1003:{acno:1003,username:"aneena",password:"aneena123",balance:0},
    1004:{acno:1003,username:"exel",password:"exel123",balance:0}
  }
  register(uname:any,acnum:any,psw:any){
    if(acnum in this.userDetails){
      return false
    }
    else{
      this.userDetails[acnum]={acno:acnum,username:uname,password:psw,balance:0}
      return true
    }
  }
  login(acnum:any,psw:any){
    var userDetails=this.userDetails
    if(acnum in userDetails){
      if(psw==userDetails[acnum]["password"]){
        this.currentUser=userDetails[acnum]["username"]
        console.log(this.currentUser);
        
        return true
      }
      else{
        return false
      }
  
    }
    else{
      return false
    }
    }
  
  }

