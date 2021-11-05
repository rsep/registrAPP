import { Injectable } from '@angular/core';
import { IUsers } from '../interfaces/iusers';
import { AttendRecordService } from './attend-record.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _currentUser: IUsers | null = null;

  constructor(private attendRecord: AttendRecordService) {}

  async login(username: string, password: string) {
    const users = await this.attendRecord.getUsers().toPromise();
    const user = (users || []).find(user => { return user.user == username && user.password == password });
    if (user) {
      this._currentUser = user;
      let status = {'estado':1, 'user': user};
      localStorage.setItem("log",JSON.stringify(status));
      return true;
    }
    return false;
  }

  get currentUser() {
    return this._currentUser;
  }

  get isAuthenticated() {
    return this._currentUser != null;
  }
  
}
