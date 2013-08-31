var fs = require('fs'),
    http = require('http');


var res = JSON.parse(fs.readFileSync('packages.json').toString('utf-8'));

var libs = {};

var CdnJsImporter = {};

function categorize(file) {

  var ext = file.split('.').pop();
  return ext;

}

// devide by javascript, styleheets and other assets.
res.packages.forEach(function(p) {

  var assets = {}, versions = [];
  p.assets.forEach(function(a){
    versions.push(a.version);
    assets[a.version] = a.files;
  });

  libs[p.name] = { 
     name: p.name,
     description: p.description,
     homepage: p.homepage,
     keywords: p.keywords,
     version: p.version,
     versions: versions,
     assets: assets
  }
});

function install(name) {

  var l;
  if(l = libs[name]) {

    var categorized = {};
    l.assets[l.version].forEach(function(filename, i) {

       var url = "http://cdnjs.cloudflare.com/ajax/libs/" + name + '/' + l.version + '/' + filename;
       var cat = categorize(url);
       if(!categorized.hasOwnProperty(cat)) {
          categorized[cat] = [];
       }

       categorized[cat].push(url);

      /*
      http.request(url, function(err, res) {
        console.log(err, res);
      });
      */

    });

    l.assets = categorized;

    console.log(l);

  } else {
    console.log(name, 'is not available');
  }

}

// only install/make available what is used and refered to from with the modules.
// note that sometimes you do not need all javascripts.
// the user could maybe just select this will creating the instance.
// maybe just specifiy this, with ask: true in the package.
// because most of the time you do not need to choose.

//install('twitter-bootstrap');
//install('jquery');
install('reveal.js');
