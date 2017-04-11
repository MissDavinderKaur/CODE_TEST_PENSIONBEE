const read = require('read-file');
const marked = require('marked');
const pathExists = require('path-exists')

const Program = {};

Program.template = read.sync(`./template.html`, 'utf8');

Program.functionality = function(req, res) {
  pathExists(`./content/${req.params.folder}/index.md`)
  .then(()=> {
    const content = read.sync(`./content/${req.params.folder}/index.md`, 'utf8');
    const page = Program.template.replace(/{{content}}/, marked(content));

    res.status(200);
    res.send(page);
  })
  .catch(() => {
    res.status(404);
    res.send();
  });
};

module.exports = Program;
