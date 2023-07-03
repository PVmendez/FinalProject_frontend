import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastController } from '@ionic/angular';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    username: new FormControl(),
    full_name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),

  });

  password!: string;
  confirmPassword!: string;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private fb: FormBuilder, private signUpPrv: AuthenticationService, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }

  public submitForm() {
    if (this.myForm.valid) {
      this.signUpPrv.signUp(this.myForm.value)
      .then(res => {
        this.messageService.showMessage("User created", 'success')
      })
      .catch(err => {
        this.messageService.showMessage("User not created", 'danger')
      })
    } else {
      this.messageService.showMessage('Passwords do not match', 'danger');
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
