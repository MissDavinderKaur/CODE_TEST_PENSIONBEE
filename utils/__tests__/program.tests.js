const staticContent = require('../program');

describe('Tests for Acme website', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      params: {}
    };
    res = {
      status: jest.fn(),
      send: jest.fn()
      };
    });

    it('returns 200 for valid folder', () => {
      req.params.folder = 'about-page';

      staticContent(req, res);

      expect(res.status).toBeCalledWith(200);
    });

    it('returns 404 for invalid folder', () => {
      req.params.folder = 'free-food';

      staticContent(req, res);

      expect(res.status).toBeCalledWith(404);
    });

    it('returns the template html', () => {
      req.params.folder = 'about-page';

      staticContent(req, res);

      expect(res.send).toBeCalledWith(expect.stringMatching('<title>Welcome to Acme</title>'));
    });

    it('returns html content from index.md, inside the template', () => {
      req.params.folder = 'about-page';

      staticContent(req, res);

      expect(res.send).toBeCalledWith(expect.stringMatching('<h1 id=\"this-is-the-about-page\">This is the About page</h1>'));
    });
  });
