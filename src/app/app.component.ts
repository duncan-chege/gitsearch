import { Component } from '@angular/core';
import {GitsearchService} from './gitsearches/gitsearch.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitsearchService ]
})
export class AppComponent {

}
