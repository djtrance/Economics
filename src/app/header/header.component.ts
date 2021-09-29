import { Component, OnInit } from '@angular/core';
import {StorageOnBrowserService} from '../services/storageOnBrowser/storage-on-browser.service';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;
  constructor(private storeService :StorageOnBrowserService) {
    if(this.storeService.getDatos() !== null){
      this.showMenu = true;
    }
    console.debug("this.showMenu", this.showMenu);
  }

  ngOnInit(): void {
  }

}
