import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class profileService{
    username: string;
    clientId: string = "7dcb45356782274866f5";
    repoName: string;
    clientSecret: string = "06ac225c52db02d7c76c536b1ee07475a6b287f4";
    apikey: string = 'ac4845a787a844e9b1b35245610b4db8ef527fa4';

    constructor(private http: HttpClient){
      console.log ('service is now ready');
    }

getUser() {
      return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
    }

getUserRepos() {
      return this.http.get('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
    }
searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
    }))
  }


UpdateUser(username:string) {
    this.username = username;
  }
UpdateRepo(repo:string) {
    this.repoName = repo;
  }
}
