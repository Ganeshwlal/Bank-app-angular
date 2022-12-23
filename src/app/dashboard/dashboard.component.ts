import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  acno3:any;
  pswd3: any;
  amount3: any;

  acno4:any;
  pswd4: any;
  amount4: any;


  constructor(private ds:DataService){ 
  }

  ngOnInit(): void { 
    
  }
  deposit(){
    var acno=this.acno3;
    var pswd=this.pswd3
    var amount=this.amount3;
    const result=this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(`Rs ${amount} is credited to account no: ${acno} and balance is ${result}`)
    }
    else{
      alert('invalid details')
    }
  }
  
  withdraw(){
    var acno=this.acno4;
    var pswd=this.pswd4;
    var amount=this.amount4;
    const result=this.ds.withdraw(acno,pswd,amount)
    if(result){
      alert(`Rs ${amount} is debited from account no: ${acno} and balance is ${result}`)
    }
    else{
      alert('invalid details')
    }
  }
 

}
