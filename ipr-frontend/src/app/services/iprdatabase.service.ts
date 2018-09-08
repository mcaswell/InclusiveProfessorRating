import { Injectable } from '@angular/core';
import {
   Stitch,
   RemoteMongoClient } from "mongodb-stitch-browser-sdk";

@Injectable()
export class IprdatabaseService {
  constructor() { }
  appId: string = "inclusiveprofessorrating-jygfs"; //YOLO
  client: any = Stitch.initializeDefaultAppClient(this.appId);
  db: any = this.client.getServiceClient(RemoteMongoClient.factory, 
    "mongodb-atlas").db('ipr-db');
}
