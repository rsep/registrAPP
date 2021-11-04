import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IUsers } from '../interfaces/iusers';
import { IAttend } from '../interfaces/iattend';

@Injectable({
  providedIn: 'root'
})
export class AttendRecordService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  // url rosi 192.168.1.100
  // apiURL = 'http://192.168.0.7:3000'; // va cambiando ipconfig en cmd
  apiURL = 'http://192.168.1.100:3000'; // va cambiando ipconfig en cmd

  constructor(private http: HttpClient) { }

  getRecord(): Observable<IAttend[]> {
    return this.http.get<IAttend[]>(this.apiURL + '/asistencia/').pipe(
      retry(3)
    );
  } 

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.apiURL + '/users/').pipe(
      retry(3)
    );
  } 
  
  //crear nueva asistencia en el sistema
  createRecord(asistencia: Partial<IAttend>): Observable<any> {
    return this.http.post(this.apiURL + '/asistencia', asistencia, this.httpOptions).pipe(
      retry(3)
    );
  }
}
