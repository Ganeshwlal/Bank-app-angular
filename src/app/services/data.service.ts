import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userDetails:any={
    1000:{acno:1000, username:'Ganesh W Lal', password:1000, balance:5000},
    1001:{acno:1001, username:'Karthik', password:1001, balance:5000},
    1002:{acno:1002, username:'Vishnu', password:1002, balance:5000},
    1003:{acno:1003, username:'Ajay', password:1003, balance:5000},
  }

  constructor() { }

  register(acno:any, username:any, password:any){
    var userDetails=this.userDetails;

    if(acno in this.userDetails){
      return false;
    }
    else{
      userDetails[acno]={
        acno:acno,
        username:username,
        password:password,
        balance:0
      }
      return true;
    }
  }

  login(acno:any,pswd:any){
    var userDetails=this.userDetails;
    if(acno in this.userDetails){
      if(pswd==this.userDetails[acno]['password']){
        return true
      }
      else{
        alert('invalid password')
        return false
      }
    }
    else{
      alert('invalid userdetails')
      return false
    }
  }

  deposit(acno:any,pswd:any,amt:any){
  var amount=parseInt(amt)
  let userDetails = this.userDetails;

  if(acno in this.userDetails){
    if(pswd==this.userDetails[acno]['password']){
      userDetails[acno]['balance']+=amount;
      return userDetails[acno]['balance']
    }
    else{
      alert('invalid password')
      return false;
    }
  }
  else{
    alert('invalid user details')
    return false;
  }

}

withdraw(acno:any,pswd:any,amt:any){
  var amount=parseInt(amt)
  let userDetails = this.userDetails;

  if(acno in this.userDetails){
    if(pswd==this.userDetails[acno]['password']){
      if(userDetails[acno]['balance']>amount){
        userDetails[acno]['balance']-=amount;
      return userDetails[acno]['balance']
      }
    }
    else{
      alert('invalid password')
      return false;
    }
  }
  else{
    alert('invalid user details')
    return false;
  }

}
}
