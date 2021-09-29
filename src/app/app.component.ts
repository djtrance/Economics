import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageOnBrowserService } from './services/storageOnBrowser/storage-on-browser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Economics';
  constructor(private storeService :StorageOnBrowserService,
              private router: Router
            ) {
    if(this.storeService.getDatos() === null){
        router.navigate(['/login']);
    }
  }
}

