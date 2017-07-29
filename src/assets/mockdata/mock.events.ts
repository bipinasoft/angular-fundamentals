import { IEventModel } from '../../app/models/IEventModel';

export const EVENTS: IEventModel[] = [
  {
    "id": 1,
    "name": "Angular Connect",
    "date": "2018-05-15T00:00:00",
    "time": "08:00:00",
    "price": 599.99,
    "locationId": 1,
    "imageUrl": "../../assets/images/angularconnect-shield.png",
    "onlineUrl": null,
    "sessions": [
      {
        "id": 1,
        "eventsId": 1,
        "name": "Using Angular 4 Pipes",
        "presenter": "Peter Bacon Darwin",
        "duration": 1.00,
        "level": "Intermediate",
        "abstract": "Learn all about the new pipes in Angular 4, both how to write them, and how to get the new AI CLI to write them for you. Given by the famous PBD, president of Angular University (formerly Oxford University).",
        "voters": "johnpapa, igorminar, martinfowler"
      },
      {
        "id": 2,
        "eventsId": 1,
        "name": "Getting the most out of your dev team",
        "presenter": "Jeff Cross",
        "duration": 2.00,
        "level": "Intermediate",
        "abstract": "We all know that our dev teams work hard, but with the right management they can be even more productive, without overworking them. In this session I'll show you how to get the best results from the talent you already have on staff.",
        "voters": "johnpapa, bradgreen, igorminar, martinfowler"
      }
    ],
    "location": {
      "id": 1,
      "address": "Chicago",
      "city": "555 Michigan Ave.",
      "country": "USA"
    }
  },
  {
    "id": 2,
    "name": "ng-nl",
    "date": "2018-04-08T00:00:00",
    "time": "09:00:00",
    "price": 950.00,
    "locationId": 2,
    "imageUrl": "../../assets/images/ng-nl.png",
    "onlineUrl": null,
    "sessions": [
      {
        "id": 3,
        "eventsId": 2,
        "name": "Testing Angular 4 Workshop",
        "presenter": "Pascal Precht & Christoph Bergdorf",
        "duration": 4.00,
        "level": "Beginner",
        "abstract": "In this 6 hour workshop you will learn not only how to test Angular 4, you will also learn how to make the most of your team's efforts. Other topics will be convincing your manager that testing is a good idea, and using the new protractor tool for end to end testing.",
        "voters": "bradgreen, igorminar, martinfowler"
      },
      {
        "id": 4,
        "eventsId": 2,
        "name": "Angular 4 and Firebase",
        "presenter": "David East",
        "duration": 3.00,
        "level": "Intermediate",
        "abstract": "In this workshop, David East will show you how to use Angular with the new ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.",
        "voters": "martinfowler"
      },
      {
        "id": 5,
        "eventsId": 2,
        "name": "Reading the Angular 4 Source",
        "presenter": "Patrick Stapleton",
        "duration": 2.00,
        "level": "Intermediate",
        "abstract": "Angular 4's source code may be over 25 million lines of code, but it's really a lot easier to read and understand then you may think. Patrick Stapleton will talk about his secretes for keeping up with the changes, and navigating around the code.",
        "voters": "bradgreen, igorminar, martinfowler"
      }
    ],
    "location": {
      "id": 2,
      "address": "The Palatial America Hotel",
      "city": "Salt Lake City",
      "country": "USA"
    }
  }
];