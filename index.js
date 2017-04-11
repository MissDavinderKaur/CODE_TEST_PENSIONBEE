const express = require('express');
const read = require('read-file');

const app = express();
const port = process.env.PORT || 3000;

const template = read.sync(`${__dirname}/template.html`, 'utf8');

app.listen(port, () => {
  console.log(`Application has started on port: ${port}`);
});
