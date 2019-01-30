import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Icon } from '../icons.model';

@Component({
  selector: 'app-icon-details',
  templateUrl: './icon-details.component.html',
  styleUrls: ['./icon-details.component.css']
})
export class IconDetailsComponent implements OnInit, OnChanges {

  @Input() iconSelected: Icon;
  // icon var
  iconShow: any;
  // styles
  iconClass: any;
  // hover
  cssMarkupHover = false;
  cssMarkupBeforeHover = false;
  cssMarkupAfterHover = false;
  cssChildMarkupHover = false;
  cssChildMarkupBeforeHover = false;
  cssChildMarkupAfterHover = false;
  // strings
  htmlMarkup: string;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // detect changes
    if ( changes['iconSelected'] && changes['iconSelected'].previousValue !== changes['iconSelected'].currentValue ) {
      // if changes @Input() iconSelected
      this.iconShow = changes['iconSelected'].currentValue;
      if (this.iconShow.htmlChildMarkup) {
        this.htmlMarkup = '<div class="icon ' + this.iconShow.classNames + '"><i></i></div>';
      } else {
        this.htmlMarkup = '<div class="icon ' + this.iconShow.classNames + '"></div>';
      }
    }
  }

}
