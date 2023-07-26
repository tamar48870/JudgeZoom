import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoleHolderDTO } from 'src/app/video-conference/models/RoleHolder.model';

@Injectable({
  providedIn: 'root',
})
export class ZoomHendlerService {

    /**
     *
     */
    constructor(private http: HttpClient) {
       

    }
   
  leaveDiscuss(){
//פנייה לשרת ליציאה, מחיקת המשתתף
//עדכון currentUser
  }
  openOrCloseCamera(){
    //בדיקה האם המצלמה של היוזר פתוחה או סגורה ולפי זה להפעיל או להפך
  }
  openOrCloseMicrophoen(){
    //בדיקה האם המיקרוםון של היוזר פתוחה או סגורה ולפי זה להפעיל או להפך
  }
  sharedScreen(){
    //הפעלת שיתוף מסך, אם המסך בשיתוף , לבטל
  }
  
}
