import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class profileService{
  getUserRepos() {
    throw new Error("Method not implemented.");
  }
  getUser() {
    throw new Error("Method not implemented.");
  }
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
