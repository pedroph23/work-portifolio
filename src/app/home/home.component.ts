import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { NavBarOptionsComponent } from '../components/nav-bar/nav-bar-options/nav-bar-options.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  id: String;

  options = [{
    name: 'Início',
    link: '#inicio'
  },{
    name: 'Sobre',
    link: '#sobre'
  },{
    name: 'Contato',
    link: '#contato'
  },{
    name: 'Skills',
    link: '#skills'
  }];

  active = false;
  
  constructor() { }

  ngOnInit(): void {
    this.id = 'basis';
  }

  public showImage(idName: String): void {
      this.id = idName;
  }

}
