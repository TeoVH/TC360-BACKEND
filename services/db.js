/* Conection with the database using mongoose and process.env */

const mongoose = require('mongoose');

mongoose.connect(process.env.URI)
  .then(() => {
    console.log('Data Base connected...');
  })
  .catch((err) => {
    console.log(`Connection failed: ${err}`);
  });