import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconFilter'
})
export class IconFilterPipe implements PipeTransform {

  transform(items: any, searchTerm: any): any {
    if (items && items.length) {
      return items.filter(item => {
        if (searchTerm && item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
          // search tags for match
          let match = 0;
          item.tags.forEach(tag => {
            if (searchTerm && tag.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
              match = -1;
            } else {
              match = 0;
            }
          });
          if (match === -1) {
            return false;
          }
        }
        return true;
      });
    } else {
      return items;
    }
  }
}
