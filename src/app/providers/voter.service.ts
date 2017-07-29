import { Injectable } from '@angular/core';
import { ISessionModel } from '../models/ISessionModel';

@Injectable()
export class VoterService {

  constructor() { }

  deleteVote(session: ISessionModel, userName: string): void {
    let voters: string[] = session.voters.split(",");
    voters = voters.filter(voter => voter !== userName);
    session.voters = voters.join();
  }

  addVote(session: ISessionModel, userName: string): void {
    let voters: string[] = session.voters.split(",");

    voters.push(userName);

    session.voters = voters.join();
  }

  userHasVoted(session: ISessionModel, userName: string): boolean {
    // same as .contains
    // could also do "return session.voters.indexOf(userName) > -1;"
    let voters: string[] = session.voters.split(",");
    return voters.some(voter => voter === userName);
  }
}
