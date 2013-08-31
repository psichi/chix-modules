/// <reference path="../../node.d.ts" />
/// <reference path="../../express.d.ts" />

var mongojs = require("mongojs");

/**
  *
  * config: { collection: 'components', db: 'exampledb' }
  *
 */

var db = mongojs('appchix'),
Component = db.collection('components');

export module rest {

  export function get(req: ExpressServerRequest, res: ExpressServerResponse) {

  };

  export function post(req: ExpressServerRequest, res: ExpressServerResponse) {
/*
      var v = request.body; 

      var schema_uri = null;
      var datasource_uri = null;
      var filter = { _id: null };

      var obj =   {
           type: v.path,
           schema: schema_uri, // Schema to validate what is inside config.
           datasource: datasource_uri,
           filters: [filter._id],
           description: "Info panel for cookie warning",
           data: v
         };

      if(v._id) {
        obj._id = v._id;
        delete v._id;
      }

      if(v.schema) obj.schema = v.schema;
      if(v.datasource) obj.datasource = v.datasource;
      if(v.filters) obj.filters = v.filters;

      Component.insert(v, function (err, res) {
         if (!err) {
          res.send.json({ success: true});
         } else {
          res.send.json({ success: false, message: err });
         }
      });
*/

  };

  export function put(req: ExpressServerRequest, res: ExpressServerResponse) {
    res.send('put');
  };

  export function list(req: ExpressServerRequest, res: ExpressServerResponse) {

      // list components
      var list = Component.find(function (err, doc) {

          if(err) {

            res.json(err);

          } else {

            res.json(doc);

          }
          
      });

  };

}
