const fs = require('fs');
const path = require('path');

function readConfig() {
  const configPath = path.join(__dirname,  './config/config.json');
  const configJSON = fs.readFileSync(configPath, 'utf8');
  const config = JSON.parse(configJSON);
  return config;
}

module.exports = readConfig;