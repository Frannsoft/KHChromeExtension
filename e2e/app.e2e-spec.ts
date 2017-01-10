import { KhchromeExtensionPage } from './app.po';

describe('khchrome-extension App', function() {
  let page: KhchromeExtensionPage;

  beforeEach(() => {
    page = new KhchromeExtensionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
