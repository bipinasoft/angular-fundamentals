import { Component, Input, OnChanges } from '@angular/core';
import { ISessionModel } from '../../models/ISessionModel';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISessionModel[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISessionModel[] = [];

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc)
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

export function sortByNameAsc(s1: ISessionModel, s2: ISessionModel) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

export function sortByVotesDesc(s1: ISessionModel, s2: ISessionModel) {
  return s2.voters.length - s1.voters.length;
}
