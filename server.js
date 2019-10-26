const express = require('express');
const app = express();
const exphbs = require('express-handlebars');


const routeshtml = require('./app/routing/htmlRoutes');
const routesApi = require('./app/routing/apiRoutes');


app.use(express.static('app/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.engine("handlebars", exphbs({
//     defaultLayout: "main", 
//     layoutsDir: __dirname + '/views/pages/',
//     partialsDir: __dirname + '/views/partials/'
// }));
app.set("view engine", "handlebars")



app.use(routeshtml);
app.use(routesApi);



app.get('/*', (req, res) => {
    res.render('home');
});


// app.get('/aaa/aaa', (req, res) => {
//     res.sendFile(__dirname + '/app/public/js/index.js');
// });



var PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("server started on port " + PORT);
});