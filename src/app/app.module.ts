import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ListComponent } from './pages/list/list.component';
import { ThumbnailComponent } from './pages/thumbnail/thumbnail.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

import { EventService } from './providers/event.service';
import { RouteActivatorService } from './providers/route-activator.service';
import { AuthenticationService } from './providers/authentication.service';
import { TOASTR_TOKEN } from './providers/toastr.service';
import { IToastrModel } from './models/IToastrModel';
import { ListResolverService } from './providers/list-resolver.service';
import { DetailsComponent } from './pages/details/details.component';
import { CreateComponent } from './pages/create/create.component';
import { ErrorComponent } from './pages/error/error.component';
import { SessionComponent } from './pages/session/session.component';
import { SessionListComponent } from './pages/session-list/session-list.component';
import { CollapsibleWellComponent } from './pages/collapsible-well/collapsible-well.component';
import { DurationPipe } from './formatting/duration.pipe';

declare let toastr: IToastrModel;

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ThumbnailComponent,
    NavbarComponent,
    DetailsComponent,
    CreateComponent,
    ErrorComponent,
    SessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    RouteActivatorService,
    ListResolverService,
    AuthenticationService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }

  return true;
}