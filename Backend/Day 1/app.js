// common js

// const fs = require('fs');

// fs.writeFile('message.txt', "hey this is day 1.", (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// module js

import { writeFile } from 'node:fs';

let data ="hey this side mayank...";

writeFile('message.txt', dataa, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});