import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { ErrorComponent } from './error/error.component';
import { RouteActivatorService } from './services/route-activator.service';
import { ListResolverService } from './services/list-resolver.service';

const appRoutes: Routes = [
    // Angular doesn't have a way to determine the correct parameter being passed in (not able to distinguish between /:id and /new).
    // Placing 'list/new' on top to get processed first.
    {
        path: 'list/new',
        component: CreateComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ListComponent,
        resolve: { events: ListResolverService }
    },
    {
        path: 'list/:id',
        component: DetailsComponent,
        canActivate: [RouteActivatorService]
    },
    {
        path: 'error',
        component: ErrorComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);