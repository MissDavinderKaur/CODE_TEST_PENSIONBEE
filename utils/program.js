const read = require('read-file');
const marked = require('marked');
const pathExists = require('path-exists');

const template = read.sync(`./template.html`, 'utf8');

const staticContent = function(req, res) {
  const validPath = pathExists.sync(`./content/${req.params.folder}/index.md`);
  if (validPath) {
    const content = read.sync(`./content/${req.params.folder}/index.md`, 'utf8');
    const page = template.replace(/{{content}}/, marked(content));

    res.status(200);
    res.send(page);
  } else {
    res.status(404);
    res.send();
  }
};

module.exports = staticContent;
