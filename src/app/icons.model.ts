export class Icon {
  id: string;
  name: string;
  classNames: string;
  htmlChildMarkup: boolean;
  cssHidden: string;
  tags: string[];
  cssMarkup: string;
  cssMarkupBefore: string;
  cssMarkupAfter: string;
  cssChildMarkup: string;
  cssChildMarkupBefore: string;
  cssChildMarkupAfter: string;

  constructor() {}

  formattedName() {
    const iconName = this.name.toLowerCase();
    return iconName.charAt(0).toUpperCase() + iconName.slice(1);
  }
}
