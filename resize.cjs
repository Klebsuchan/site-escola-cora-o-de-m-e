const sharp = require('sharp');
sharp('public/favicon-512.png').resize(48, 48).toFile('public/favicon-48.png');
sharp('public/favicon-512.png').resize(96, 96).toFile('public/favicon-96.png');
sharp('public/favicon-512.png').resize(144, 144).toFile('public/favicon-144.png');
sharp('public/favicon-512.png').resize(192, 192).toFile('public/favicon-192.png');
