import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';
import { Toastr } from '../common/toastr.service';

@Component({
  template: `
  <div>
  <h1> Upcoming Angular Events </h1>
  <hr/>
  <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
      <event-thumbnail [event]="event"></event-thumbnail>
    </div>
  </div>

</div>

  `
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // this.eventService.getEvents().subscribe(events => { this.events = events});
    this.events = this.route.snapshot.data['events'];
  }

}
