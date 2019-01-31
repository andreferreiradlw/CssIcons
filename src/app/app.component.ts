import { Component, OnInit } from '@angular/core';
import { IconCollectionService } from './iconCollection.service';
import { Icon } from './icons.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  events: string[] = [];
  sidenavOpened: boolean;
  searchTerm: string;
  // icon collection
  iconCollection: Icon[] = [];
  private iconSub: Subscription;
  emitIcon: Icon;
  // responsive
  screenWidth: number;

  constructor(private iconService: IconCollectionService) {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  ngOnInit() {
    this.iconService.getData();
    // will get initial array of posts from server
    this.iconSub = this.iconService.getCardUpdateListener()
      .subscribe( iconData => {
        this.iconCollection = iconData;
        console.log(this.iconCollection);
      });
  }
  onContainerClick(event: any) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;
    if (value === 'icons-container' || value === 'icons-container-inner') {
      if(this.emitIcon !== undefined) {
        this.sidenavOpened = !this.sidenavOpened;
      }
    }
  }
  onIconClick(iconSelected: Icon) {
    if (this.emitIcon === iconSelected) {
      this.sidenavOpened = !this.sidenavOpened;
    } else {
      this.emitIcon = iconSelected;
      this.sidenavOpened = true;
    }
  }
}
