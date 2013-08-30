/// <reference path="../node.d.ts" />
/// <reference path="../express/express.d.ts" />

var mongojs = require("mongojs");

var db = mongojs('appchix'),
Component = db.collection('components');

export module rest {

  export function get(req: ExpressServerRequest, res: ExpressServerResponse) {
    res.send('get');
  };

  export function post(req: ExpressServerRequest, res: ExpressServerResponse) {
    res.send('post');
  };

  export function put(req: ExpressServerRequest, res: ExpressServerResponse) {
    res.send('put');
  };

  export function list(req: ExpressServerRequest, res: ExpressServerResponse) {
    res.send('list');
  };

}
