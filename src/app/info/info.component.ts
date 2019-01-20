import { Component, OnInit } from '@angular/core';
import {GitsearchService} from '../gitsearches/gitsearch.service'


@Component({
  selector: 'app-info',
  templateUrl: './info.compon ent.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private gitsearch:GitsearchService) { }

  ngOnInit() {
  }

}
