/// <reference path="../../node.d.ts" />
/// <reference path="../../express.d.ts" />

/**
  *
  * config: { collection: 'components', db: 'exampledb' }
  *
 */

export module Module {

  export function jsonform(req, res, next) {

    res.set('Content-Type', 'text/plain');
    res.set('x-hi-from-jsonform', 'HIIIIII');

    console.log('jsonform');

    next();

  };

  export function request(req, res, next) {

    console.log('request');

    var request = require('superagent');

    // example of giving res.data precedence 
    var url = res.data.url || this.config.url;

    if(url) {

    request.get(url).end(function(ret) {

        if(ret.ok) {

          //res.data.context = JSON.parse(ret.text ? ret.text : ret.body);
          // in case of json, we set .context
          res.data.context = Object.keys(ret.body).length ? ret.body : ret.text;

        } else {
          res.data.context = { status: 'error', message: ret.text };
        }

        next();

    });

    } else {
       res.data.context = { status: 'error', message: "request needs a config.url" };
       next();
    }

  };

  /**
   *
   * TODO: shouldn't be done this way, this is filter work.
   *       ah what's in a name;
   */

  export function templatify(req, res, next) {

    res.data.template = res.data.context;
    //res.data.context = {}; yep ugly.

    next();

  }

  /**
   *
   * Preview the client side templates,
   * based on path.
   *
   */
  export function previewer(req, res, next) {

    var path = req.param('path');

    // fetch template, from the net.
    // later we pass objects (another module) 
    // where the templates are already present.
    // This is to preview the 'source'.

    res.set('Content-Type', 'text/plain');
    res.set('x-hi-from-jsonform', 'HIIIIII');

    console.log('jsonform');

    // will be attached to template.handlebars.
    // which expects data.context: and data.template:
    // the template will be one of the clientside template.html's
    // I've created. The data will be the defaults from the json schema.
    // only problem for now, I do not have anything ready yet to transform
    // that data to json. jsonform is doing that all internally.
    // what I need is name:default values in the right tree format.

    next();

  };

}
