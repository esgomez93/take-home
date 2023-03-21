import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  branch1 = '';
  commit1 = '';
  branch2 = '';
  commit2 = '';
  comparison = '';
  title = 'front';
  userData: any;
  listCommits: any[] = [1,2,3,];

  constructor(private appServices: AppService) {
    // get user data
    this.appServices.getUserData('esgomez93').subscribe((data: any) => {
      this.userData = data;
    });
  }

  ngOnInit() {
    // get list of commits
    this.appServices.getCommitHistory().subscribe((data: any) => {
      this.listCommits = data;
    });
  }

  compare() {}
}
