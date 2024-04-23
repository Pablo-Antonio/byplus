import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { VersionsService } from './core/services/http-request/versions.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  appVersion: any;
  constructor(
    private platform: Platform,
    private location: Location,
    private version: VersionsService
  ) {
    
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.location.isCurrentPathEqualTo('/home')) {
        navigator['app'].exitApp();
      } else {
        this.location.back();
      }
    });
  }
}
