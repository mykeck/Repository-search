import { Component, OnInit } from '@angular/core';
import { profileService} from 'src/app/profile.service'

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repoitems: any[];
  repoName: string = "resume";

  constructor(private profileService:profileService) { 

  }
  findRepo(){
   
    }
    
  ngOnInit(): void {
  }
  }
