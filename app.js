let app = require('./config/server');

let server = app.listen(3000, function () {
   console.log('Servidor online');
});
app.set('io', require('./config/socket-io')(server));
