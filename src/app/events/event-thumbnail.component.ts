import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared';

@Component({
  selector: 'event-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event.name | uppercase}}</h2>
    <div>Date: {{event.date | date:'shortDate'}}</div>
    <div>Time: {{event.time}}</div>
    <div [ngSwitch]="event?.time">
      <span *ngSwitchCase="'8:00 am'">Early Start</span>
      <span *ngSwitchCase="'10:00 am'">Late Start</span>
      <span *ngSwitchDefault>Normal Start</span>
    </div>
    <div>Price: {{event.price | currency:'USD'}}</div>
    <div [hidden]="!event?.location">
      <span>Location: {{event.location?.address}} </span>
      <span class="pad-left">{{event.location?.city}}, {{event.location?.country}}</span>
    </div>
    <div [hidden]="!event?.onlineUrl">
      OnlineUrl: {{event?.onlineUrl}}
    </div>
  </div>
  `,
  styles: [`
  .pad-left { margin-left: 10px;}
  .well div {color: #bbb;}
  .thumbnail {min-height: 210px;}
  `

  ]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
}
