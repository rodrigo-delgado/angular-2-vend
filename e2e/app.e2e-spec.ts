import { FinalAngularPage } from './app.po';

describe('final-angular App', function() {
  let page: FinalAngularPage;

  beforeEach(() => {
    page = new FinalAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
