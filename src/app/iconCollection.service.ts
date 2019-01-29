import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Icon } from './icons.model';

@Injectable({
  providedIn: 'root'
})
export class IconCollectionService {

  private apiUrl = 'http://localhost:3000/api/icons';
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
          icon.tag = entry.tag;
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
