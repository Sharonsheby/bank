import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user:any

  constructor(private ds:DataService,private fb:FormBuilder){
    
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

}
