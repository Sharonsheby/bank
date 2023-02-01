import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  data="your perfect banking partner"
  inputplaceholder="Account number"
  //  or  acno:any
  acno=''
  psw=''

 


constructor(private router:Router,private ds:DataService){ }
// login(a:any, b:any){
//   // console.log(a.value)
//   var acnum=a.value
//   var psw=b.value
//   var userDetails=this.userDetails
//   if(acnum in userDetails){
//     if(psw==userDetails[acnum]["password"]){
//       alert("login success")
//     }
//     else{
//       alert("password incorrect")
//     }

//   }
//   else{
//     alert("acno incorrect or not registered yet")
//   }
// }
login(){
  var acnum=this.acno
  var psw=this.psw
  // var userDetails=this.userDetails
  var userDetails=this.ds.userDetails
  if(acnum in userDetails){
    if(psw==userDetails[acnum]["password"]){
      alert("login success")
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert("password incorrect")
    }

  }
  else{
    alert("acno incorrect or not registered yet")
  }
   //alert('login clicked')
  }


// acnoChange(event:any){
  
  // this.acno=event.target.value
  // console.log(this.acno);
  
// }
// pswrdChange(event:any){
//   this.psw=event.target.value
//   // console.log(this.psw);
  
  

// }
}
