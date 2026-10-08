const toIco = require('to-ico');
const fs = require('fs');

async function run() {
  try {
    const buf = fs.readFileSync('public/favicon-512.png');
    const icoBuf = await toIco(buf);
    fs.writeFileSync('public/favicon.ico', icoBuf);
    console.log('Successfully created favicon.ico');
  } catch (err) {
    console.error(err);
  }
}
run();
