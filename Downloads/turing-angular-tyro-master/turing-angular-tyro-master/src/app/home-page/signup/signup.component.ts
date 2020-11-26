import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  signupform: FormGroup;
  errMessage: string = null;

  ngOnInit() {
    this.signupform = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, Validators.required)
    });
  }

  onSignup() {
    if (!this.signupform.valid) {
      return;
    }
    this.authService.signup(this.signupform.value)
      .subscribe(responseData => {
        // console.log(responseData);
        this.router.navigate(['/dashboard']);
      }, errorMessage => {
        console.log(errorMessage);
        this.errMessage = errorMessage;
        if (this.errMessage.length > 0) {
          this.signupform.controls['email'].markAsTouched;
          this.signupform.controls['email'].setErrors({ 'valid': false });
        }
      });
  }
}


