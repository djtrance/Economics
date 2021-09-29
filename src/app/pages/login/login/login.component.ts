import { Component, OnInit } from '@angular/core';
import {  FormControl,  FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServiciosLocalesService } from 'src/app/services/serviciosLocales/servicios-locales.service';
import {Router} from '@angular/router';
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

  constructor(private services: ServiciosLocalesService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    console.debug(this.loginForm.value);
    this.services.getAllRequest().subscribe(data =>{
      console.debug("getAllRequest",data);
      this.router.navigate(['/home']);
    }, error =>{
      console.error("Error getAllRequest", error);
    }
    );

  }
  get user() { return this.loginForm.get('user'); }
  get passwd() { return this.loginForm.get('passwd'); }

}
