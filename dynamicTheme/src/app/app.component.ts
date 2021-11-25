import { Component } from '@angular/core';
import { AppState } from './app.global';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Default Red', theme: 'theme-red', color:'assets/imgs/FF0000.png' },
    { title: 'Noir', theme: 'theme-noir', color:'assets/imgs/333333.png' },
    { title: 'Clover', theme: 'theme-clover', color:'assets/imgs/388E3C.png' },
    { title: 'Blueberry', theme: 'theme-blueberry', color:'assets/imgs/1e88e5.png' }
  ];

  constructor( public global:AppState ) {}

  changeTheme(theme:any){
    // console.log("Now Changing theme to "+ theme);
    this.global.set('theme', theme);
  }

}
