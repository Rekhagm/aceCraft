import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators,ValidatorFn,AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  Studentfirstname:any
  name=new FormControl('')
  
  registerForm= new FormGroup({

    Studentfirstname:new FormControl(''),
    studentlastname:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    confirmpassword:new FormControl(''),
    parentname:new FormControl(''),
    admissionnumber:new FormControl(''),
    acceptTerms: new FormControl(false),
   
    
  })

  get f(){ return this.registerForm.controls; }

  submitHandler(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return ;
  }
  }

  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors?.['confirmedValidator']) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}


   constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Studentfirstname: ['', [Validators.required,Validators.minLength(3),Validators.pattern("^(?=[a-zA-Z._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$")]],
      studentlastname: ['', [Validators.required,Validators.minLength(3),Validators.pattern("^(?=[a-zA-Z._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$")]],
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$')]],
      confirmpassword: ['', Validators.required],
      parentname:['', Validators.required],
      admissionnumber:['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
     }, 
      { 
        validator:this. ConfirmedValidator('password', 'confirmpassword')
      }
     );
     
}

}
    

