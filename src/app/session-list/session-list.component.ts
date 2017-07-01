import { Component, OnInit, Input } from '@angular/core';
import { ISessionModel } from '../models/ISessionModel';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  @Input() sessions: ISessionModel[];
  constructor() { }

  ngOnInit() {
  }

}
