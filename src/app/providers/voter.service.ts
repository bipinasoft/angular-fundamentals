import { Injectable } from '@angular/core';
import { ISessionModel } from '../models/ISessionModel';

@Injectable()
export class VoterService {

  constructor() { }

  addVoter(session: ISessionModel, userName: string) {
    session.voters.push(userName);
  }
  deleteVoter(session: ISessionModel, userName: string) {
    session.voters = session.voters.filter(voter => voter !== userName);
  }
  userHasVoted(session: ISessionModel, userName: string) {
    return session.voters.some(voter => voter === userName);
  }
}
