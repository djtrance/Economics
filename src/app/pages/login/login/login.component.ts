import { Component, OnInit } from '@angular/core';
import {  FormControl,  FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.email]),
    passwd: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    console.debug(this.loginForm.value);
  }

}
