import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{ //3rd execute
  //class is a collection of properties and methods.

  constructor(){ //1st execute
  //used for object initialization
  //it automatically invokes when an object is created

  }
  ngOnInit(): void { //2nd executed
    //initial process of a component
    //when a component is created, at same time it initialize or authorize
    //when a component is created, there is a lifecycle for it.
    
  }
  //properties

  aim='Your Perfect Banking Parter'

  account="enter your username"

  userDetails:any={
    1000:{acno:1000, username:'Ganesh W Lal', password:1000, balance:5000},
    1001:{acno:1001, username:'Karthik', password:1001, balance:5000},
    1002:{acno:1002, username:'Vishnu', password:1002, balance:5000},
    1003:{acno:1003, username:'Ajay', password:1003, balance:5000},
  }

  //userdefined function    //4th executed

  acno=''; //to hold the value from user
  pswd='';

  login(){
    // alert('login clicked')
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if (acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert('login successful')
      }
      else{
        alert('incorrect password')

      }
    }
    else{
      alert('user not found')
    }
  }

  
 
  acnoChange(event:any){
    // console.log(event.target.value);
    this.acno = event.target.value;
    console.log(this.acno);
  }

  passChange(event:any){
    // console.log(event.target.value);
    this.pswd = event.target.value;
    console.log(this.pswd);
    
    
  }




}
