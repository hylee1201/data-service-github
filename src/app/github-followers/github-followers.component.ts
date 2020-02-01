import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers;

  constructor(private route: ActivatedRoute,
              private service: GithubFollowersService) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {
        // const id = combined[0].get('id');
        // console.log('TCL: HomeComponent -> ngOnInit -> id', id);
        // const page = combined[1].get('page');
        // console.log('TCL: HomeComponent -> ngOnInit -> page', page);

        return this.service.getAll();
      })
    )
    .subscribe(followers => this.followers = followers);
  }
}
