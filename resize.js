const sharp = require('sharp');
sharp('public/logo_coracao_site.png')
  .resize(512, 512, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 0 }
  })
  .toFile('public/favicon-512.png')
  .then(() => {
    console.log('Successfully resized to 512x512');
  })
  .catch(err => {
    console.error(err);
  });
