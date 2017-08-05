import { Component, OnInit } from '@angular/core';
import { EventService } from '../../providers/event.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IEventModel } from '../../models/IEventModel';
import { ISessionModel } from '../../models/ISessionModel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  addMode: boolean;
  event: IEventModel;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
    })
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISessionModel) {
    this.eventService.saveSession(session).subscribe(session => {
      this.addMode = false;
    });

    const maxId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = maxId + 1;
    this.event.sessions.push(session);
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
