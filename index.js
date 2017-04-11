const express = require('express');

const staticContent = require('./utils/program');

const app = express();
const port = process.env.PORT || 3000;

app.get('/:folder', staticContent);

app.listen(port, () => {
  console.log(`Application has started on port: ${port}`);
});
