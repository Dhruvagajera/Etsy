const app = require("./app");

const port = process.env.PORT || 3001;

//Allow Access Control
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//     res.setHeader('Cache-Control', 'no-cache');
//     next();
// });

// //use cors to allow cross origin resource sharing
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.listen(port, () => {
    console.log('server is up and running on port ' + port);
})