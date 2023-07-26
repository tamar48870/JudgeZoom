import { Injectable } from '@angular/core';
import { RoleHolderDTO } from '../models/RoleHolder.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
 apiUrl="https://localhost:7245/api/";

    /**
     *
     */
    constructor(private http: HttpClient) {
       

    }
   currentUser: RoleHolderDTO = new RoleHolderDTO();
  setCurrentUser(user: RoleHolderDTO) {
    //לתצוגה בלבד
    this.currentUser = user;
  }
  leaveDiscuss(){
//פנייה לשרת ליציאה, מחיקת המשתתף
//עדכון currentUser
  }
  
}
