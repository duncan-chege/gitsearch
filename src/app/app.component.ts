import { Component } from '@angular/core';
import {GitsearchService } from './gitsearches/gitsearch.service'
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HTTP_PROVIDERS, GitsearchService]
})
export class AppComponent {

}
