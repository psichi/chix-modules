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

}
