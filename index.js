const express = require('express');
const read = require('read-file');
const marked = require('marked');

const app = express();
const port = process.env.PORT || 3000;

const template = read.sync(`${__dirname}/template.html`, 'utf8');

app.get('/:folder', function(req, res) {
  try {
    const content = read.sync(`${__dirname}/content/${req.params.folder}/index.md`, 'utf8');
    const page = template.replace(/{{content}}/, marked(content));

    res.status(200);
    res.send(page);
  } catch (e) {
    res.status(404);
    res.send();
  }
});

app.listen(port, () => {
  console.log(`Application has started on port: ${port}`);
});
