// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelpers = require('./http-helpers.js');

var isThisDownloading = () => {
  archive.readListOfUrls(downloadUrls);
};
