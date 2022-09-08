import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/userservice/user.service';
import { Router } from '@angular/router';


interface Language{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  submitted = false;
  hide: boolean = true;

  constructor(private formBuilder: FormBuilder, private user: UserService, private router: Router) { }

  ngOnInit() {
      this.LoginForm = this.formBuilder.group({
          Email: ['', [Validators.required, Validators.email]],
          Password: ['', [Validators.required, Validators.minLength(8)]],
      });
      localStorage.removeItem('token');
  }
  // convenience getter for easy access to form fields
  get f() { return this.LoginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.LoginForm.invalid) {
          return;
      }

      console.log(this.LoginForm.value);

      let reqdata={
        email: this.LoginForm.value.Email,
        password: this.LoginForm.value.Password,
      }

      this.user.login(reqdata).subscribe((response:any)=>{
        console.log(response)
        localStorage.setItem("token", response.data);
        this.router.navigateByUrl('/DashBoard')
      }, (error: any) => {
        console.log(error);
      })
 
  }


  ShowPassword() {
    this.hide = !this.hide;
  }
}
