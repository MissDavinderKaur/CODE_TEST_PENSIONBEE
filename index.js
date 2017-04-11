const express = require('express');

const program = require('./utils/program');

const app = express();
const port = process.env.PORT || 3000;

app.get('/:folder', function(req, res) {
  program.functionality(req, res);
});

app.listen(port, () => {
  console.log(`Application has started on port: ${port}`);
});
