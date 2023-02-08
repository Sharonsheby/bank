import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder){}
 
  // create reactive form of register form
  registerForm=this.fb.group({
    
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    acnum:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pwd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]

  })

  register(){
    // alert('register')
  //  let userDetails= this.ds.userDetails
  var uname=this.registerForm.value.uname
  var acnum=this.registerForm.value.acnum
   var pwd=this.registerForm.value.pwd
  if(this.registerForm.valid){
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
    else{
      alert('invalid form')

    }
   
  }

}
