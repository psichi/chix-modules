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

export module Test {

  export function HelloWorld(req, res, next) {

    res.data = {
      name: "Rob Halff",
      description: "A res.data test",
      content: "Hello World!"
    };

    next();

  };

}
