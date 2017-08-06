import { Component } from '@angular/core';
import { AuthenticationService } from '../../../providers/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginInvalid: boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) { }

  login(loginValues) {
    this.authService.authenticateUser(loginValues.userName, loginValues.password)
      .subscribe(resp => {
        if (!resp) {
          this.loginInvalid = true;
        }
        else {
          this.router.navigate(['list']);
        }
      });
  }

  cancel() {
    this.router.navigate(['list']);
  }
}
