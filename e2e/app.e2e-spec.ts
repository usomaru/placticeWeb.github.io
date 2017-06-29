import { KaigohokenHPPage } from './app.po';

describe('kaigohoken-hp App', () => {
  let page: KaigohokenHPPage;

  beforeEach(() => {
    page = new KaigohokenHPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
