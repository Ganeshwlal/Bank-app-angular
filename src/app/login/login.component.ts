import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  acno2: any; //3rd execute
  pswd2: any;
  //class is a collection of properties and methods.

  constructor(private router:Router,private ds:DataService){
 //1st execute
  //used for object initialization
  //it automatically invokes when an object is created

  }
  ngOnInit(): void { //2nd executed
    //initial process of a component
    //when a component is created, at same time it initialize or authorize
    //when a component is created, there is a lifecycle for it.
    
  }
  //properties

  aim='Your Perfect Banking Parter'  //String interpolation

  account="enter your username"     //Property Binding

  userDetails:any={
    1000:{acno:1000, username:'Ganesh W Lal', password:1000, balance:5000},
    1001:{acno:1001, username:'Karthik', password:1001, balance:5000},
    1002:{acno:1002, username:'Vishnu', password:1002, balance:5000},
    1003:{acno:1003, username:'Ajay', password:1003, balance:5000},
  }

  //userdefined function    //4th executed

  acno=''; //to hold the value from user
  pswd='';

  //login(){                //Event Binding
    // alert('login clicked')
    //var acno=this.acno;
   // var pswd=this.pswd;
    //var userDetails=this.userDetails;

   // login(a:any, p:any){      //Event Binding using template referancing variable
      // alert('login clicked')
    //  var acno=a.value;
     // var pswd=p.value;
     // var userDetails=this.userDetails;


  //    login(){      //Two way binding
  //     // alert('login clicked')
  //     var acno1=this.acno2;
  //     var pswd1=this.pswd2;
  //     var userDetails=this.userDetails;

      
  //   if (acno1 in userDetails){
  //     if(pswd1==userDetails[acno1]['password']){
  //       alert('login successful')
  //       this.router.navigateByUrl('dashboard')
  //     }
  //     else{
  //       alert('incorrect password')

  //     }
  //   }
  //   else{
  //     alert('user not found')
  //   }
  // }

  login(){
    var acno=this.acno2;
    var pswd=this.pswd2;

    const result=this.ds.login(acno,pswd)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard');

    }
    else{
      alert('login failed')
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
