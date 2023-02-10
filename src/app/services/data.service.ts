import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any
  userDetails:any

  constructor() {
    this.getData()
   }

  // userDetails:any={
  //   1000:{acno:1000, username:"anu", password:"anu123", balance:0, transaction: []},
  //   1001:{acno:1001, username:"amal", password:"amal123", balance:0, transaction: []},
  //   1002:{acno:1002, username:"angel", password:"angel123", balance:0, transaction: []},
  //   1003:{acno:1003, username:"aneena", password:"aneena123", balance:0, transaction: []},
  //   1004:{acno:1003, username:"exel", password:"exel123", balance:0, transaction: []}
  // }
  saveData(){
    if(this.userDetails){
      localStorage.setItem("database",JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",this.currentUser)
    }
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
  }

  getData(){
    if(localStorage.getItem('database')){
      this.userDetails=JSON.parse(localStorage.getItem('database') || "")
    }
    if(localStorage.getItem('currentUser')){
      this.currentUser=localStorage.getItem('currentUser')
    }
    if(localStorage.getItem('currentAcno')){
      this.currentAcno=JSON.parse(localStorage.getItem('currentAcno') || "")
    }
  }

  register(uname:any,acnum:any,psw:any){
    if(acnum in this.userDetails){
      return false
    }
    else{
      this.userDetails[acnum]={acno:acnum,username:uname,password:psw,balance:0,transaction: []}
      this.saveData()
      return true
    }
  }
  login(acnum:any,psw:any){
    var userDetails=this.userDetails
    if(acnum in userDetails){
      if(psw == userDetails[acnum]["password"]){
        
        this.currentUser=userDetails[acnum]["username"]
        // console.log(this.currentUser);
        this.currentAcno= acnum
        this.saveData()

        
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
    deposit(acnum:any,password:any,amount:any){
      let userDetails = this.userDetails
      // convert string amount to number
      var amnt = parseInt(amount)

      if(acnum in userDetails){
        if(password == userDetails[acnum]["password"]){

          // update balance
          userDetails[acnum]["balance"]+=amnt
          // console.log(userDetails);

          // transaction data store
          userDetails[acnum]["transaction"].push({Type:"Credit",amount:amnt})//update
          
          this.saveData()

          // return current balance
          return userDetails[acnum]["balance"]
        }
        else{
          return false
        }
      }
      else{
        return false
      }

    }
    withdraw(acnum:any,password:any,amount:any){
      let userDetails=this.userDetails
      var amnt = parseInt(amount)

      if(acnum in userDetails){

        if(password == userDetails[acnum]["password"]){
          if(amnt <= userDetails[acnum]["balance"]){
            // update balance
            userDetails[acnum]["balance"]-=amnt

             // transaction data store
          userDetails[acnum]["transaction"].push({Type:"Debit",amount:amnt})
          // console.log(userDetails);
          this.saveData()

          // return current balance

            return userDetails[acnum]["balance"]
          }
          else{
            alert('insufficient balacance')
            return false
          }
        }
        else{
          alert('insufficient password')
          return false
        }
      }
      else{ alert('insufficient acnum')
        return false
      }

    }
    getTransaction(acno:any){
      return this.userDetails[acno]["transaction"]
    }
  
  }

