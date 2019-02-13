import { Component, OnInit } from '@angular/core';
import { IconCollectionService } from './iconCollection.service';
import { Icon } from './icons.model';
import { Subscription } from 'rxjs';
import { IconFilterPipe } from './iconFilter.pipe';
import { PageEvent } from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IconFilterPipe]
})
export class AppComponent implements OnInit {
  // loader
  loading = true;
  // event strings
  events: string[] = [];
  sidenavOpened: boolean;
  searchTerm: string;
  // icon collection
  iconCollection: Icon[] = [];
  iconFilterCollection: Icon[] = [];
  slicedIcons: Icon[] = [];
  private iconSub: Subscription;
  emitIcon: Icon;
  // responsive
  screenWidth: number;
  // default pagination strings
  // number of posts
  totalPosts: number;
  // page size
  iconsPerPage = 50;
  // current page
  currentPage = 1;
  pageSizeOptions = [50 , 70, 100];

  constructor(private iconService: IconCollectionService, private iconFilter: IconFilterPipe) {
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
      .subscribe(iconData => {
        this.iconCollection = iconData;
        console.log(this.iconCollection);
        this.totalPosts = this.iconCollection.length;
        this.onSearch();
      });
  }
  onChangedPage(pageData: PageEvent) {
    // get pageData changes
    this.currentPage = pageData.pageIndex + 1;
    this.iconsPerPage = pageData.pageSize;
    // debugger;
    this.onIconSlice();
  }
  onIconSlice() {
    // start and end
    const start = this.iconsPerPage > -1 ? (this.currentPage - 1) * Number(this.iconsPerPage) : 0;
    const end = this.iconsPerPage > -1 ? (start + Number(this.iconsPerPage)) : this.iconFilterCollection.length;
    // slice icons
    this.slicedIcons = this.iconFilterCollection.slice(start, end);
    if (this.loading) {
      this.loading = false;
    }
  }
  onSearch() {
    // current page back to 1
    this.currentPage = 1;
    // pipe filter
    this.iconFilterCollection = this.iconFilter.transform(this.iconCollection, this.searchTerm);
    // slice
    this.onIconSlice();
  }
  onIconClick(iconSelected: Icon) {
    if (this.emitIcon === iconSelected) {
      this.sidenavOpened = !this.sidenavOpened;
    } else {
      this.emitIcon = iconSelected;
      this.sidenavOpened = true;
    }
  }
  onCloseSidenav() {
    if (this.sidenavOpened) {
      this.sidenavOpened = !this.sidenavOpened;
    }
  }
}
