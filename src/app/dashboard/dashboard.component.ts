import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user:any
  acno:any

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router){
    
    this.user=this.ds.currentUser
    
  }
  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amnt:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
      
  })
 withdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
      
  })
  ngOnInit(): void{
    if(!localStorage.getItem("currentAcno")){
      alert('please login')
      this.router.navigateByUrl(" ")
    }
  }
  deposit(){
    var acno=this.depositForm.value.acno
    var psw=this.depositForm.value.psw
    var amnt=this.depositForm.value.amnt
    const result=this.ds.deposit(acno,psw,amnt)
    if(this.depositForm.valid){
        if(result){
          alert(`Your ac has been credited with amount ${amnt} and the current balance is ${result}`)

        }
        else{
          alert("incorrect acno or password")
        }
      }
      else{
        alert('Invalid form')
      }

  }
  withdraw(){
    var acno=this.withdrawForm.value.acno1
    var psw=this.withdrawForm.value.psw1
    var amnt=this.withdrawForm.value.amnt1
    const result = this.ds.withdraw(acno,psw,amnt)
    if(this.withdrawForm.valid){
        if(result){
          alert(`Your ac has been debited with amount ${amnt} and the current balance is ${result}`)
        }
    }
    else{
      alert('Invalid Form')
    }

  }
  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")

  }
  deleteParent(){
   this.acno=JSON.parse(localStorage.getItem("currentAcno") || "")
  }

}
