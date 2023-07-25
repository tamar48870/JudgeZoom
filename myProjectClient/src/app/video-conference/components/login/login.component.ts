import { Component } from '@angular/core';
import { ParticipantsResolverService } from '../../services/participants.-resolver.service';
import { RoleHolderDTO } from '../../models/RoleHolder.model';
import { KeyValuePair } from '../../interfaces/arrays.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
/**
 *
 */
roleList: KeyValuePair<number,string> = new Array< KeyValuePair<number,string>>();

constructor(protected participantsResolverService: ParticipantsResolverService) {
    
}
public ngOnInit(): void {
  this.participantsResolverService.resolve().subscribe((data) => {
    data.forEach(d=>{
      this.roleList .push(new KeyValuePair(d.Id,d.name) );});
    console.log(data);
  });
}
selectionChange(event=null){

}
}
