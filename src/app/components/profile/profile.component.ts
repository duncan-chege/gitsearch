import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service'
import {Profile} from '../../profile'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  repos: any[];
  username: string;

  constructor(private profileService: ProfileService) {
  }

  findProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log (profile); //function returns an observable
      this.profile= profile; //set the profile property
    });

    this.profileService.getProfileRepos().subscribe(repos=> {
        console.log(repos);
        this.repos=repos;
    })
  }

  ngOnInit() {
  }

}
