var http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const baseDir = `${__dirname}/app/superChefRecipes/dist/`
app.use(express.static(`${baseDir}`))

app.get('/', (req, res) => res.sendFile('index.html' , { root : baseDir } ))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});