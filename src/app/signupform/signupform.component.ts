import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    email: new FormControl(),
    password: new FormControl(),
    username: new FormControl(),
    full_name: new FormControl(),
  });


  password!: string;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private signUpPrv: AuthenticationService) { }

  ngOnInit(): void {}


  public submitForm() {
    this.signUpPrv.signUp(this.myForm.value);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}

