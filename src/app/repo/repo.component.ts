import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service'
import {Profile} from '../profile'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
    repos: any[];
    profile: Profile;
    username: string;
     // @Input()

    constructor(private profileService: ProfileService) {
    }

    findProfile(){
      this.profileService.updateProfile(this.username);
      this.profileService.getProfileInfo().subscribe(profile => {
        // console.log (profile); //function returns an observable
        this.profile= profile; //set the profile property
      });

      this.profileService.getProfileRepos().subscribe(repos=> {
          this.repos=repos;
      });
    }

  ngOnInit() {

  }

}
