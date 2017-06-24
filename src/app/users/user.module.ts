import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { userRouting } from './user.routing';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    userRouting
  ],
  declarations: [ProfileComponent],
  providers: []
})
export class UserModule { }
