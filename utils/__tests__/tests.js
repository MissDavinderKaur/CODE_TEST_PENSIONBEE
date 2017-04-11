const program = require('../program');

describe('Tests for Acme website', () => {
  let req = {
    folder: {}
  };
  let res = {
    status: jest.fn().mockReturnValue,
    send: jest.fn().mockReturnValue
  };

  it('Should return the correct HTTP code', () => {
      createBlog(req, res);
      expect(res.status).toBeCalledWith(200);
    });

});
