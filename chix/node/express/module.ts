/// <reference path="../node.d.ts" />
/// <reference path="../express.d.ts" />

/**
  *
  * End point which sends data to the browser.
  *
 */

export module Module {

  export function send(req, res) {

    if(res.data.type) res.type(res.data.type);
    if(res.data.status) res.status(200),

    res.format({
        'text/html': function() {
          res.send(res.data.body);
        },
        'application/json': function() {
          res.json(res.data.body);
        }
    });

  };

}
