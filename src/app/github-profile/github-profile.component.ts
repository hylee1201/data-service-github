import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    // snapshot is used whenever init is called from different page (different component)
    // observable is used when init is called once from same page (same component) e.g. page 1, page 2
    // tslint:disable-next-line:prefer-const
    let id = this.route.snapshot.paramMap.get('id');
    console.log('TCL: GithubProfileComponent -> ngOnInit -> id', id);

    // this.route.paramMap
    //     .subscribe(params => {
    //       console.log('TCL: GithubProfileComponent -> ngOnInit -> params', params);
    //       let id = +params.get('id');
    //     });
  }

}
