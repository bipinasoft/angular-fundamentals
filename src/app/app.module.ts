import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ListComponent } from './list/list.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';

import { EventService } from './providers/event.service';
import { RouteActivatorService } from './providers/route-activator.service';
import { AuthenticationService } from './providers/authentication.service';
import { ListResolverService } from './providers/list-resolver.service';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { ErrorComponent } from './error/error.component';
import { SessionComponent } from './session/session.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ThumbnailComponent,
    NavbarComponent,
    DetailsComponent,
    CreateComponent,
    ErrorComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    EventService,
    RouteActivatorService,
    ListResolverService,
    AuthenticationService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
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