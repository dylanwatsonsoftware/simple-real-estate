import { SimpleRealEstatePage } from './app.po';

describe('simple-real-estate App', function() {
  let page: SimpleRealEstatePage;

  beforeEach(() => {
    page = new SimpleRealEstatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
