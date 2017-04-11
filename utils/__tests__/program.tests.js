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
      send: jest.fn(),
    };
  })

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

});
