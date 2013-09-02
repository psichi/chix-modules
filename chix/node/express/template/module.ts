/// <reference path="../../node.d.ts" />
/// <reference path="../../express.d.ts" />

/**
  *
  * data: { template: 'template name', data: { template data.. }
  *
  * Renders a handlebars template and passes it on to the next.
  * This could be a layout, express.send(), ...
  *
 */

export module Template {

  var Handlebars = require('handlebars');

  export function handlebars(req, res, next) {

      // TODO: beforehand validate data with json schema.

      console.log('handlebars');

      var template = Handlebars.compile(res.data.template);
      var html = template(res.data.context);

      res.data.context = html;
      
      next();

  };

}
