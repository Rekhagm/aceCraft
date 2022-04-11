import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  name=new FormControl('')

  forgotpasswordForm= new FormGroup({

    email:new FormControl('')
  })

  submitHandler(){
    this.forgotpasswordForm.value();
  }
  constructor() { }

  ngOnInit(): void {
  }


}
