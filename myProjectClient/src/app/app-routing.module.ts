import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'DiscussDetails',
    loadChildren: () => import('./discuss-details/discuss-details.module').then(m => m.DiscussDetailsModule),
  },
  {
    path: '**',
    loadChildren: () => import('./video-conference/video-conference.module').then(m => m.VideoConferenceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
