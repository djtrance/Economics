import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should return de userName',()=>{
    component.loginForm.setValue({user: 'TestUser', passwd:''});
    let user = component.loginForm.get('user')?.value;
    expect(user).toEqual('TestUser');
  });
  it('it should return de Password',()=>{
    component.loginForm.setValue({user: '', passwd: 'TestPasswd'});
    let pass = component.loginForm.get('passwd')?.value;
    console.debug("Passwd",pass );
    expect(pass).toEqual('TestPasswd');
  });
  it('it should return invalid user',()=>{
    component.loginForm.setValue({user: '', passwd: 'TestPasswd'});
    let inva = component.loginForm.controls['user'].invalid;
    expect(inva).toBe(true);
  });
  it('it should return invalid user by email format',()=>{
    component.loginForm.setValue({user: 'lol', passwd: 'TestPasswd'});
    let inva = component.loginForm.controls['user'].getError('email');
    expect(inva).toBe(true);
  });
  it('it should return Valid user by email format',()=>{
    component.loginForm.setValue({user: 'lol@lol.cl', passwd: 'TestPasswd'});
    let inva = component.loginForm.controls['user'].getError('email')? 'true':false;
    expect(inva).toBe(false);
  });
});
