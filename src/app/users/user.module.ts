import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { userRouting } from './user.routing';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    userRouting
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: []
})
export class UserModule { }
