var dotize = dotize || {};
dotize.parse = function(jsonobj, prefix) {
  var newobj = {};
  function recurse(o, p) {
    for (var f in o)
    {
      var pre = (p === undefined ? '' : p + ".");
      if (o[f] && typeof o[f] === "object"){
        newobj = recurse(o[f], pre + f);
      } else {
        newobj[pre + f] = o[f];
      }
    }
    return newobj;
  }
  return recurse(jsonobj, prefix);
};

var fs = require('fs');

var json = JSON.parse(fs.readFileSync('schema.json').toString());


var ret = dotize.parse(json);

console.log(ret);
