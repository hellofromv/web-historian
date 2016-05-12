var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var $ = require('jQuery');
var httpHelpers = require('./http-helpers.js');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  httpHelpers.serveAssets(req, res);
  // if (req.url === '/') {
  //   // if (req.method === 'GET') {
  //   fs.readFile(archive.paths.index, (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('heyo!');
  //       res.writeHead(200);
  //       res.end(data);
  //     }
  //   });
  // }

  // var theUrl = $('input[name=url]').val();
  // console.log('The URL IS------', theUrl);

  // if (req.url === '/') {
  //   fs.readFile(archive.paths.cssYo, (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('cssyo!!!!!!!!!!!!!!!!!!');
  //       res.writeHead(200);
  //       res.end(data);
  //     }
  //   });
  // }

//   if (req.method === 'GET') {
// //archivedSites: path.join(__dirname, '../archives/sites'),
//     var fixtureName = req.url;
//     console.log('The fixturename is', fixtureName);
//     var fixturePath = 'http://127.0.0.1:8080/' + fixtureName;
//     // fd = fs.open(fixturePath, 'w');

//     // fs.write(fd, );


  // }
  // res.end(archive.paths.index);
};
