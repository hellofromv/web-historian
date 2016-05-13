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
  cssYo: path.join(__dirname, '../web/public/styles.css'),
  loading: path.join(__dirname, '../web/public/loading.html')
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
      var newArray = data.split('\n');
      console.log('the value of newarray', newArray);
      callback(newArray);
    }
  });
};

exports.isUrlInList = function(target, callback) {
  fs.readFile(exports.paths.list, 'utf8', (err, data) => {
    if (err) {
      console.log('we got an error for isUrlInList', err);     
    } else {
      var newArray = data.split('\n');
      return (newArray.indexOf(target) > -1) ? callback(true) : callback(false);
    }
  });
};


exports.addUrlToList = function(someurl, callback) {
  exports.isUrlInList(someurl, () => {
    fs.appendFile(exports.paths.list, someurl + '\n', 'utf8', (err) => {
      console.log('error in appending file:', err);
      callback();
    });
  });
};


exports.isUrlArchived = function(someurl, callback) {
  fs.readdir(exports.paths.archivedSites, (err, filesArr) => {
    if (err) {
      console.log('we got an error for isURLARCHIVED!!!!!!', err);     
    } else {
      (filesArr.indexOf(someurl) > -1) ? callback(true) : callback(false);
    }
  });
};

exports.downloadUrls = function(arrayOfUrl) {
  var thePath = exports.paths.archivedSites;
  console.log('#1 ----array OF url', arrayOfUrl);
  fs.readdir(thePath, (err, files) => {
    console.log('array OF url', arrayOfUrl);
    console.log('FILESSSSSSS:', files);
    // 
    arrayOfUrl.forEach((item) => {
      if (files.indexOf(item) === -1) {
        fs.writeFile(thePath + '/' + item, item, (err) => {
          if (err) {
            console.log('downloaduRL errrr', err);
          } else {
            console.log('write Success');
          }
        });
      }
    });
  });
};
  
      