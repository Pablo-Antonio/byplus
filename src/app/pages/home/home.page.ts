import { Component, OnInit } from '@angular/core';
import { routes, Page } from '../../../assets/data';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

  title: string = 'MENÚ PRINCIPAL';
  pages: Page[] = routes;

  constructor(private iab: InAppBrowser) {
  }

  ngOnInit() {
  }

  openAdd(){
    const browser = this.iab.create('https://byplus.io/');
    browser.show();
  }

  errorImg(ev){}
}
