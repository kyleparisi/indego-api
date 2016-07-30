const main = require('./src/main');

exports.handler = function (event, context)
{
  console.log('EVENT', event);
  var where = '';
  if (event.params.querystring.where) {
    where = event.params.querystring.where;
  }
  main(where).then(data => context.succeed(data));
}
