import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userName!: string;
  password!: string;

  //   defaultValue = 'Hiii';
  constructor(private authService: AuthService, private router: Router) {}

  handleLogin(formValues: any) {
    console.log(formValues);
    this.authService.loginUser(formValues.firstName, formValues.lastName);
  }

  cancel() {
    this.router.navigate(['home']);
  }

  reset(val: any) {
    val.reset();
  }
}
