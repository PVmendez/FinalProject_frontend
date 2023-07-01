import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public myForm!: FormGroup;

  password!: string;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private loginPrv: AuthenticationService){}

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      email:[],
      password:[]
    });
  }

  public submitForm(){

    this.loginPrv.loginAuth(this.myForm.value);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
