/// <reference path="../node.d.ts" />
/// <reference path="../express.d.ts" />

/**
  *
  * End point which sends data to the browser.
  *
 */

export module Module {

  export function send(req, res) {

    res.send(res.data);

  };

}
