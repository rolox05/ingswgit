import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {GitRepo3} from 'git-repo-3';

@Component({
  selector: 'main'
})

@View({
  directives: [GitRepo3],
  template: `
    <git-repo-3></git-repo-3>
  `
})

class Main {

}

bootstrap(Main);
