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

  showSpeed() {
    return speed;
  }
  addSpeed() {
    //  speed[0]= speed.map((item) => {
    //     return { ...item, id: item.id * 2 };
    //   });
    //   this.showSpeed();
    speed[0] = {
      id: 40,
      name: 'wealthsss',
    };
  }
  subSpeed() {
    return speed.map((item) => item.id - 5);
  }
}

const speed = [
  {
    id: 2,
    name: 'wealth',
  },

  {
    id: 4,
    name: 'wealthy',
  },
];
