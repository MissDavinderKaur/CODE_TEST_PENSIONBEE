const read = require('read-file');
const marked = require('marked');

const Program = {};

Program.template = read.sync(`./template.html`, 'utf8');

Program.functionality = function(req, res) {

  try {
    const content = read.sync(`./content/${req.params.folder}/index.md`, 'utf8');
    const page = Program.template.replace(/{{content}}/, marked(content));

    res.status(200);
    res.send(page);
  } catch (e) {
    res.status(404);
    res.send();
  }
};


module.exports = Program;
