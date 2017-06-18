import {Component, View} from 'angular2/core';

@Component({
  selector: 'git-repo-3'
})

@View({
  templateUrl: 'git-repo-3.html'
})

export class GitRepo3 {

  constructor() {
    console.info('GitRepo3 Component Mounted Successfully');
  }

}
