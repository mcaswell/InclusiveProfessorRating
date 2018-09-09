import { Injectable } from '@angular/core';
import {
   Stitch,
   RemoteMongoClient,
 AnonymousCredential} from "mongodb-stitch-browser-sdk";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {University} from '../university/university';
import {DatabaseService} from './database.service';


@Injectable()
export class IprDatabaseService /*implements DatabaseService*/{
  constructor() { }
  appId: string = "inclusiveprofessorrating-jygfs"; //YOLO
  client: any = Stitch.initializeDefaultAppClient(this.appId);
  db: any = this.client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas").db('ipr-db');

  getUniversity(id: number): Observable<University> {
    return this.client.auth.loginWithCredential(new AnonymousCredential()).then(() => {
      return this.client.callFunction("getUniversityById", id).then(res => {
        return of(res);
      }).catch(console.error);

    });


    //const collection = this.db.collection("university");
    //let instance:University = new University();
    //return collection.findOne({"num_id": id}).then(obj => {return of(instance.deserialize(obj));});
  }

  /*getProfessorsInUniversity(uni_id: number): Observable<Professor[]> {
    return of([{name: "poop", id: 1, uni_id: 1}]);
  }*/
}
