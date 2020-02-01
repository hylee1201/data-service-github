import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { PostsComponent } from './posts/posts.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component: GithubFollowersComponent },
  { path: 'followers', component: GithubFollowersComponent, canActivate: [AuthGuard] },
  { path: 'followers/:id/:name', component: GithubProfileComponent, canActivate: [AuthGuard] },
  { path: 'posts', component: PostsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
