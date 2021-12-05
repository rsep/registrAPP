import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(s: string) {
    return browser.get('/'+s);
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }
}
