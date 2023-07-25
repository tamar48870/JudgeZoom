import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoScreenComponent } from './components/video-screen/video-screen.component';
import { ParticipantsResolverService } from './services/participants.-resolver.service';

const videoRoutes: Routes = [
    {
      path: '**',
      component: VideoScreenComponent,
      // runGuardsAndResolvers: 'always',
      // resolve: ParticipantsResolverService
    }]

@NgModule({
  imports: [RouterModule.forRoot(videoRoutes)],
  exports: [RouterModule]
})
export class VideoConferenceRoutingModule { }
