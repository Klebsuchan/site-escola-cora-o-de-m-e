const pngToIco = require('png-to-ico');
const fs = require('fs');

pngToIco('public/favicon-48.png')
  .then(buf => {
    fs.writeFileSync('public/favicon.ico', buf);
    console.log('Successfully created favicon.ico');
  })
  .catch(console.error);
