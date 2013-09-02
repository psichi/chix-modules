/// <reference path="../../node.d.ts" />
/// <reference path="../../express.d.ts" />

/**
  *
  * data: { template: 'template name', data: { template data.. }
  *
 */

export module Template {

  var Handlebars = require('handlebars');

  export function handlebars(req, res) {

    console.log('template');

    // TODO: beforehand validate data with json schema.

      // data template is the template contents.
      // could come from a file, or a post or whatever.
      var template = Handlebars.compile(res.data.template);
      var html = template(res.data.context);

      // each module acts upon data.
      // filters must take care that the data 
      // looks like what this module expects. 
      // filters sit inbetween the different json schemas.
      // this module will only render the template
      // it expects a template and a dataobject.

      res.send(html);


  };

}
