import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../app/login.service';
import { LoginResponse } from './../../Models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public loginResp: Array<LoginResponse> = [];
  constructor(private loginService: LoginService) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {}

  onSignInButton() {
    console.log(this.username);
    console.log(this.password);
    this.loginService
      .makeLoginServiceCall(this.username, this.password)
      .subscribe(
        res => {
          console.log(res.json());
          this.loginResp.push(res.json());
        },
        error => {
          console.log('Error', error);
        }
      );
  }
}
