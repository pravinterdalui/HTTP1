import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(){
    if(this.email==='pravin@gmail.com' && this.password==='pravin'){
      console.log("Login SuccessFull")
      alert("Login SuccessFull")
      this.router.navigateByUrl('user');
    }
    else{
      alert('Invalid username or password');
    }
    
    this.email.reset;
  }

}
