import { Component } from '@angular/core';
import { ParticipantsResolverService } from '../../services/participants.resolver.service';
import { RoleHolderDTO } from '../../models/RoleHolder.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PermissinEnum } from 'src/app/video-conference/enums/PermissinEnum';

@Component({
  selector: 'app-video-screen',
  templateUrl: './video-screen.component.html',
  styleUrls: ['./video-screen.component.scss'],
})
export class VideoScreenComponent {
  participantsList: RoleHolderDTO[] = [];
  permissionEnum=PermissinEnum;
  textMute="השתק"
  textUnMute="השתק"


  constructor(
    protected participantsResolverService: ParticipantsResolverService,
    protected route: ActivatedRoute,
    protected userService:UserService
  ) {}

  public ngOnInit(): void {
    this.participantsResolverService.resolve().subscribe((data) => {
      this.participantsList = data;
      console.log(data);
    });
  }
  muteAllParticipants() {
    this.participantsList.forEach(u=>{
      u.muted = true;
    })
  }
  muteOrUnMicrophone(id:number) {
    var userIndex = this.participantsList.findIndex(x=>x.id == id);
    this.participantsList[userIndex].muted = !this.participantsList[userIndex].muted;


  }
 
}
