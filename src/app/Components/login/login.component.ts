import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup ,Validators} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;

  name=new FormControl('')

  loginForm= new FormGroup({

    username:new FormControl(''),
    password:new FormControl('')
    
  })

  get f() { return this.loginForm.controls; }
  submitHandler(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return ;
  }
}
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required,Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
      password: ['', Validators.required],
        });
  }



}


