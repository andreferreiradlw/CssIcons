import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Icon } from './icons.model';

@Injectable({
  providedIn: 'root'
})
export class IconCollectionService {

  private apiUrl = 'https://cssiconsapi.herokuapp.com/api/icons';
  private iconCollectionUpdated = new Subject<Icon[]>();
  constructor(private http: HttpClient) { }
  // get icons
  getData() {
    this.http.get<{icons: any}>(this.apiUrl)
      .subscribe(iconData => {
        // convert object into array
        const iconsArray = Object.keys(iconData).map(i => iconData[i]);
        const finalIcons = [];
        iconsArray[1].forEach((entry) => {
          const icon = new Icon();
          icon.id = entry._id;
          icon.name = entry.name;
          icon.classNames = entry.classNames;
          icon.htmlChildMarkup = entry.htmlChildMarkup;
          icon.cssHidden = entry.cssHidden;
          icon.tags = entry.tags;
          icon.cssMarkup = entry.cssMarkup;
          icon.cssMarkupBefore = entry.cssMarkupBefore;
          icon.cssMarkupAfter = entry.cssMarkupAfter;
          icon.cssChildMarkup = entry.cssChildMarkup;
          icon.cssChildMarkupBefore = entry.cssChildMarkupBefore;
          icon.cssChildMarkupAfter = entry.cssChildMarkupAfter;
          finalIcons.push(icon);
        });

        this.iconCollectionUpdated.next(finalIcons);
      });
  }
  getCardUpdateListener() {
    return this.iconCollectionUpdated.asObservable();
    // listen to the subject
  }
}
