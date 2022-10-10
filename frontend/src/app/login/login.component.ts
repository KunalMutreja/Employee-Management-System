import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
 
  constructor(
    private router: Router,
    private fb:FormBuilder,
    
  ){ 
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  onSubmit(userName: string,password: string) {
    console.log(userName);
    if(userName=="admin" && password=="admin"){
      this.router.navigate(['admin']);
    }
    else if(userName=="employee" && password=="qwerty"){
      this.router.navigate(['employee']);
    }
    else{
      alert("Wrong Credentials")
      this.router.navigate(['/']);
    }
  }
}
