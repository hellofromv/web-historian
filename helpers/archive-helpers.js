var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt'),
  index: path.join(__dirname, '../web/public/index.html'),
  cssYo: path.join(__dirname, '../web/public/styles.css')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  
  fs.readFile(exports.paths.list, 'utf8', (err, data) => {
    if (err) {
      console.log('we have an ', err);
    } else {
      console.log('the data is a buffer', data);
      var newArray = data.split('\n');
      console.log('the value of newarray', newArray);
      callback(newArray);
    }
  });

  // retrieves the data from the example txt files & returns it into an array
  // have to join it on \n

  // invoke callback on that array


};

exports.isUrlInList = function() {
};

exports.addUrlToList = function(thepath, theurl, encoding, callback) {
  fs.appendFile(thepath, theurl, encoding, callback);
};

exports.isUrlArchived = function() {
};

exports.downloadUrls = function() {
};
