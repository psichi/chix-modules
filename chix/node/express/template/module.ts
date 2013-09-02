/// <reference path="../../node.d.ts" />
/// <reference path="../../express.d.ts" />

/**
  *
  * data: { template: 'template name', data: { template data.. }
  *
 */

export module Template {

  export function handlebars(req, res) {

    console.log('template');

    // each module acts upon data.
    // filters must take care that the data 
    // looks like what this module expects. 
    // filters sit inbetween the different json schemas.
    // this module will only render the template
    // it expects a template and a dataobject.

    res.send('Hi this is the data', res.data);

  };

}
