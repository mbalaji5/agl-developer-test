import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getMaleName() {
    return element.all(by.className('malepetname')).getText() as Promise<string>;
  }
  getFemaleName() {
    return element.all(by.className('femalepetname')).getText() as Promise<string>;
  }
}
