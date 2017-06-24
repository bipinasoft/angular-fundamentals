import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ListComponent } from './list/list.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';

import { EventService } from './services/event.service';
import { RouteActivatorService } from './services/route-activator.service';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ThumbnailComponent,
    NavbarComponent,
    DetailsComponent,
    CreateComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [EventService, RouteActivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
