import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss'],
})
export class FooterComponentComponent {
  ngOnInit() {}
  leave() {
    //פנייה  לסרוויס ליציאת המשתתף,
    //עדכון currentUser
    //רענון מסך משתתפים
  }
  
  openOrCloseCamera(){
    //פנייה לסרוויס ZoomHendlerServiceלפתיתה או סגירת מצלמה
  }
  openOrCloseMicrophoen(){
//פנייה לסרוויסZoomHendlerService לפתיתה או סגירת מצלמה
  }
  sharedScreen(){
    //פנייה לסרוויס ZoomHendlerServiceלשיתוף או סגירת מסך
  }
}
