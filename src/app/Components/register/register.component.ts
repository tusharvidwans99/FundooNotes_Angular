import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/userservice/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  hide: boolean = true;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          FirstName: ['', Validators.required],
          LastName: ['', Validators.required],
          Email: ['', [Validators.required, Validators.email]],
          Password: ['', [Validators.required, Validators.minLength(8)]],
          ConfirmPassword: ['', Validators.required],
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }


      console.log(this.registerForm.value);
        let reqdata={
          firstName: this.registerForm.value.FirstName,
          lastName: this.registerForm.value.LastName,
          email: this.registerForm.value.Email,
          password: this.registerForm.value.Password,
        }

        this.user.registration(reqdata).subscribe((response:any)=>{
          console.log(response)
        }, (error: any) => {
          console.log(error);
        })


  }

  ShowPassword() {
    this.hide = !this.hide;
  }


}