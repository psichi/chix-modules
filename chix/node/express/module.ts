/// <reference path="../node.d.ts" />
/// <reference path="../express.d.ts" />

/**
  *
  * End point which sends data to the browser.
  *
 */

export module Module {

  export function send(req, res) {
/*
    if(res.data.type) res.type(res.data.type);
    if(res.data.status) res.status(200),
*/

    console.log('send');

    res.format({
        'default': function() {
          console.log('default');
          res.send(res.data.context);
        },
        'text/html': function() {
          console.log('html');
          res.send(res.data.context);
        },
        'application/json': function() {
          console.log('json');
          res.json(res.data.context);
        }
    });

  };

}
