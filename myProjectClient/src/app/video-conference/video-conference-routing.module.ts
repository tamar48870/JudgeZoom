import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoScreenComponent } from './components/video-screen/video-screen.component';
import { ParticipantsResolverService } from './services/participants.-resolver.service';
import { LoginComponent } from './components/login/login.component';

const videoRoutes: Routes = [
    {
      path: 'video',
      component: VideoScreenComponent,

      // runGuardsAndResolvers: 'always',
      // resolve: ParticipantsResolverService
    },
    {
      path: 'login',
      component: LoginComponent,

    }
  ]

@NgModule({
  imports: [RouterModule.forChild(videoRoutes)],
  exports: [RouterModule]
})
export class VideoConferenceRoutingModule { }
