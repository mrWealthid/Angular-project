import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm!: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);

    this.profileForm = new FormGroup({
      firstName,
      lastName,
    });
  }

  handleUpdateUser(formValues: any) {
    console.log(formValues);
    this.authService.updateUser(formValues.firstName, formValues.lastName);

    this.router.navigate(['home']);
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
