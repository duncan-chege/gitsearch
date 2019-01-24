import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {ProfileService} from './services/profile.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RepoComponent } from './repo/repo.component';
// Defining routes
const routes:Routes=[
  {path:"",component:ProfileComponent},
  {path:"repo",component:RepoComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProfileService],  //now available throughout our app
  bootstrap: [AppComponent]
})
export class AppModule { }
