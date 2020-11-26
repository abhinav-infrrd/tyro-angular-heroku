import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errMessage: string = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    // console.log(this.loginForm);
    if (!this.loginForm.valid) {
      return;
    }
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.authService.login(email, password).subscribe(resData => {
      this.router.navigate(['\dashboard']);
    }, errorMessage => {
      console.log(errorMessage);
      this.errMessage = errorMessage;
      if (this.errMessage.length > 0) {
        this.loginForm.controls['password'].markAsTouched;
        this.loginForm.controls['password'].setErrors({ 'valid': false });
      }
    });
  }

}
