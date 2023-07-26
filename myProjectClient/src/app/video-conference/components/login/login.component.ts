import { Component } from '@angular/core';
import { ParticipantsResolverService } from '../../services/participants.resolver.service';
import { RoleHolderDTO } from '../../models/RoleHolder.model';
import { KeyValuePair } from '../../../shared/interfaces/arrays.interface';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
//import { KeyValuePair } from '../../interfaces/arrays.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
/**
 *
 */
public roleList: Array<KeyValuePair<number,string>> = new Array< KeyValuePair<number,string>>();
private usersList?: Array<RoleHolderDTO>
constructor(protected participantsResolverService: ParticipantsResolverService, public userService: UserService
     ) {
    
}
public ngOnInit(): void {
  this.participantsResolverService.resolve().subscribe((data:Array<RoleHolderDTO>| any) => {
    this.usersList = data;
    console.log(data);
    data.forEach((d:RoleHolderDTO)=>{
      var toAdd: KeyValuePair<number,string>= {Key:d.id,Value:d.name};
      console.log(toAdd);
      
      this.roleList.push(toAdd);});
      console.log(this.roleList, "roleList");

    
  });


}
selectionChange(event:KeyValuePair<number,string>| null| undefined=null){
   var user = this.usersList?.find(x=>x.id == event?.Key);
   this.userService.setCurrentUser(user!);
}
}
