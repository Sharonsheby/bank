import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  uname=''
  acnum=''
  pwd=''

  constructor(private ds:DataService,private router:Router){}

  register(){
    // alert('register')
   let userDetails= this.ds.userDetails
   var uname=this.uname
   var acnum=this.acnum
   var pwd=this.pwd
  //  console.log(username,acnum,pwd);
  const result=this.ds.register(uname,acnum,pwd)
  if(result){
    alert("registered")
    this.router.navigateByUrl("")
  }
  else{
    alert("acno already present")
  }
   
  }

}
