import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
  
    private router: Router,
    
    ) { 
  }

  ngOnInit(): void {
  }
  onSubmit(userName: string,password: string) {
    if(userName=="admin" && password=="admin"){
      this.router.navigate(['admin']);
    }
    else if(userName=="employee" && password=="qwerty"){
      this.router.navigate(['employee']);
    }
    else{
      this.router.navigate(['/']);
    }
  }
}
