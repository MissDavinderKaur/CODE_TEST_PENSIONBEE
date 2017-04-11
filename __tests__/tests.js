it('Should return the correct HTTP code', () => {
    createBlog(req, res);
    expect(res.status).toBeCalledWith(200);
  });
