import { GuidelineAppPage } from './app.po';

describe('guideline-app App', () => {
  let page: GuidelineAppPage;

  beforeEach(() => {
    page = new GuidelineAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
