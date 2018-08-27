import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
  constructor(private http: HttpClient) { }
  url = 'https://mttg65bzj1.execute-api.us-east-2.amazonaws.com/api';
  //url = 'http://127.0.0.1:8000';
  
    getDetails() { return this.http.get(`${this.url}/gcd`);  }

    addRecord(data){ return  this.http.post(`${this.url}/gcd/`,data);  }

    editRecord(cardId,data){  return  this.http.put(`${this.url}/gcd/${cardId}`,data);  }

    deleteRecord(cardId){ return  this.http.delete(`${this.url}/gcd/${cardId}`);  }

    getSbAcntDetails() { return this.http.get(`${this.url}/sbad`); }

    addRecordSbAcntDetails(data){return  this.http.post(`${this.url}/sbad/`,data); }

    editRecordSbAcntDetails(cardId,data){return  this.http.put(`${this.url}/sbad/${cardId}`,data); }

    deleteRecordSbAcntDetails(cardId){ return  this.http.delete(`${this.url}/sbad/${cardId}`); }

    getSbt() { return this.http.get(`${this.url}/sbt`); }

    addRecordSbt(data){return  this.http.post(`${this.url}/sbt/`,data); }

    //editRecordSbt(cardId,data){return  this.http.put(`${this.url}/sbad/${cardId}`,data); }

    deleteRecordSbt(uid){ return  this.http.delete(`${this.url}/sbt/delete/${uid}`); }

    getSbgcm(){ return this.http.get(`${this.url}/sbgcm`); }

    addRecordSbgcm(data){return  this.http.post(`${this.url}/sbgcm/`,data); }

    //editRecordSbgcm(accountNumber,cardId,data){return  this.http.put(`${this.url}/sbgcm/${accountNumber}/${cardId}`,data); }

    deleteRecordSbgcm(accountNumber,cardId){return  this.http.delete(`${this.url}/sbgcm/delete/${accountNumber}/${cardId}`); }

    getGsgl(){ return this.http.get(`${this.url}/gsgl/list`); }

    addRecordGsgl(data){return  this.http.post(`${this.url}/gsgl`,data); }
    
    editRecordGsgl(data){return  this.http.put(`${this.url}/gsgl/update`,data); }

    deleteRecordGsgl(){return  this.http.delete(`${this.url}/gsgl/`); }



}