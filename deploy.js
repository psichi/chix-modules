var Publisher, filter, publisher, cb;

Publisher = require('aws-publisher');

publisher = new Publisher({
    bucket: 'components.robberthalff.com',
    key: process.env.AWS_KEY,
    secret: process.env.AWS_SECRET,
    region: 'us-west-2'
});


filter = function(f, stat) {
  return stat.isDirectory() || /\.(js|ts|json|html|jpg|gif|png|css)$/.test(f);
};

cb = function(res) {
  console.log('we are done!');
}

publisher.publishDir({
    origin: 'chix',
    dest: 'chix',
    filter: filter
}, cb);
