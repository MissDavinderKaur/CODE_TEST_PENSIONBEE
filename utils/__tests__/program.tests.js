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
      send: jest.fn().mockReturnValue(`
        <!doctype html>
        <html>
        <head>
        <title>Welcome to Acme</title>
        </head>
        <body>
        <h1 id="this-is-the-about-page">This is the About page</h1>
        <p>Acme Co. is a reputable maker of widgets and is an international brand.</p>
        <p>Thank you for your interest in our services. Please contact us at enquiries@acme.com.</p>

        </body>
        </html>`)
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
