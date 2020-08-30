import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class profileService{
    username: string;
    repositoryName: string;
    clientId: string = ''
    repoName: string;

// getUser(){

// }
// getUserRepos(){

// }
searchrepos(){

}

UpdateUser(username:string) {
    this.username = username;
  }
UpdateRepo(repo:string) {
    this.repoName = repo;
  }
}
