import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';

const userRoutes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent
    }
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);