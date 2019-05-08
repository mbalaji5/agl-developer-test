import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Male Ower Pet Name', () => {
    page.navigateTo();
    expect(page.getMaleName()).toEqual(['Garfield', 'Jim', 'Max', 'Tom']);
  });
  it('should display Female Owner Pet Name', () => {
    page.navigateTo();
    expect(page.getFemaleName()).toEqual(['Garfield', 'Simba', 'Tabby']);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
