import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup ,Validators} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;

  name=new FormControl('')
  
  registerForm= new FormGroup({

    Studentfirstname:new FormControl(''),
    studentlastname:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    confirmpassword:new FormControl(''),
    parentname:new FormControl(''),
    admissionnumber:new FormControl('')
   
    
  })

  get f() { return this.registerForm.controls; }

  submitHandler(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return ;
  }
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Studentfirstname: ['', Validators.required],
      studentlastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
      parentname:['', Validators.required],
      admissionnumber:['', Validators.required]
        });
}
}
