import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.LoginForm = this.formBuilder.group({
          Email: ['', [Validators.required, Validators.email]],
          Password: ['', [Validators.required, Validators.minLength(8)]],
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.LoginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.LoginForm.invalid) {
          return;
      }

      

  }

}
