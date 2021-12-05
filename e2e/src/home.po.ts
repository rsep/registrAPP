import { browser, by, element } from "protractor";

export class HomePage{
    navigateTo() {
        return browser.get('/'); // we can navigate to '/' for get pblic page since this is the default route
    }

    getPageTitle() {
        element(by.css("[page=home]"));
        return element(by.css(".page-selected ion-label")).getText();
    }
}