import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateSessionComponent,
  SessionListComponent
 } from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component'
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true
}
