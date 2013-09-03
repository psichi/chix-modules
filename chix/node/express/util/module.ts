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

  function dotize(jsonobj, prefix) {
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

  export function dotize(req, res, next) {

    var ret = dotize(res.data.context);

    // TODO: will be less hardcore overwriting later on.
    res.data.context = res;

    next();

  };

}
