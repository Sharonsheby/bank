import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
 
constructor(private router:Router,private ds:DataService,private fb:FormBuilder){ }
loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})
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
  var acnum=this.loginForm.value.acno
  var psw=this.loginForm.value.psw
  const result=this.ds.login(acnum,psw)
  if(this.loginForm.valid){
     if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
      }
      else{
        alert("incorrect acno or password")
      }
    }
    else{
      alert('Invalid form')
    }
}
  // var userDetails=this.userDetails
 

// acnoChange(event:any){
  
  // this.acno=event.target.value
  // console.log(this.acno);
  
// }
// pswrdChange(event:any){
//   this.psw=event.target.value
//   // console.log(this.psw);
  
  

// }
}

