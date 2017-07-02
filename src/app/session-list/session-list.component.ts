import { Component, Input } from '@angular/core';
import { ISessionModel } from '../models/ISessionModel';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent {
  @Input() sessions: ISessionModel[];
}
