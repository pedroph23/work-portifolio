import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-options',
  templateUrl: './nav-bar-options.component.html',
  styleUrls: ['./nav-bar-options.component.css']
})
export class NavBarOptionsComponent implements OnInit {

  @Input() options: [] ;

  constructor() { }

  ngOnInit(): void {
  }

}
