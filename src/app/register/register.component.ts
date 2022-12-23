import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


acno:any;
pswd:any;
uname:any;
// userDetails:any={
//   1000:{acno:1000, username:'Ganesh W Lal', password:1000, balance:5000},
//   1001:{acno:1001, username:'Karthik', password:1001, balance:5000},
//   1002:{acno:1002, username:'Vishnu', password:1002, balance:5000},
//   1003:{acno:1003, username:'Ajay', password:1003, balance:5000},
// }
  accno: any;
pswd1: any;
uname1: any;
acno1: any;

constructor(private ds:DataService,private router:Router){ 
  }

  ngOnInit(): void { 
    
  }

//properties
register(){
  var acno= this.acno1;
  var pswd= this.pswd1;
  var uname= this.uname1;
  var userDetails= this.ds.userDetails;

  const result= this.ds.register(acno,uname,pswd)

  if(result){
    alert('register success :)')
    this.router.navigateByUrl('')
  }
  else{
    alert('register failed :(')
  }
}

}
// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }

