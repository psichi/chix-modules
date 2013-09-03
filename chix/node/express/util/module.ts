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

    console.log('dotify', this);

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

    console.log('dotfilter', this);

    var filtered = {};

    res.data.match = this.config.match || '';
    var reg = new RegExp(res.data.match);

    for(var key in res.data.context) {

      if(reg.test(key)) {
         filtered[key] = res.data.context[key]; 
      }

    }

    res.data.context = filtered;

    next();

  };

  /**
   *
   * data.strip = ['properties', 'default']
   * data.context:
   *
   * {
   *   "properties.person.default": "Rob",
   * }
   *
   * result:
   *
   * {
   *   "person": "Rob",
   * }
   *
   */
  export function dotstripper(req, res, next) {

    console.log('dotstripper', this);

    if(this.config.strip) {

      var exp = '(' + this.config.strip.join('.|.') + '|.' + this.config.strip.join('|.') + ')';

      var reg = new RegExp(exp, 'g');

      for(var key in res.data.context) {

        var new_key = key.replace(reg, ''); 
        res.data.context[new_key] = res.data.context[key];
        delete res.data.context[key];

      }

    }

    next();

  };

  export function dottojson(req, res, next) {

    console.log('dottojson', this);

    var jsf = new JSF();

    // this is in-place
    jsf.object(res.data.context);

    next();

  };

}
