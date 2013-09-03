/// <reference path="../../node.d.ts" />
/// <reference path="../../express.d.ts" />

/**
  *
  * Data test, puts some content inside res.data
  *
  * res.data would become the convention for chaining data along callbacks.
  * With maybe translation filters inbetween.
  *
 */

export module Util {

  var JSF = require('json-filter');

  function _dotify(jsonobj, prefix) {
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

  export function dotify(req, res, next) {

    console.log('dotify');

    var ret = _dotify(res.data.context, undefined);

    // TODO: will be less hardcore overwriting later on.
    res.data.context = ret;

    next();

  };

  /**
   *
   * data.match = '\.name$'
   * data.context:
   *
   * {
   *   "person.name": "Rob",
   *   "person.desc": "Nobody"
   * }
   *
   * result:
   *
   * {
   *   "person.name": "Rob",
   * }
   *
   */

  export function dotfilter(req, res, next) {

    var filtered = {};

    res.data.match = this.config.match || '';

    for(var key in res.data.context) {

      var reg = new RegExp(res.data.match);

      if(reg.test(key)) {
         filtered[key] = res.data.context[key]; 
      }

    }

    res.data.context = filtered;

    next();

  };

  export function dottojson(req, res, next) {

    var jsf = new JSF();

    // this is in-place
    jsf.object(res.data.context);

    next();

  };

}
