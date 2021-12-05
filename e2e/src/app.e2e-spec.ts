import { AppPage } from './app.po';
import { browser, element, by } from "protractor";

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be blank', () => {
    page.navigateTo("");
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
    // fail("no existe");
  });
});
