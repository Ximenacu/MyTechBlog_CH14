// libs
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const path = require('path');
// files 
const routes = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars.js engine 
const hbs = exphbs.create();

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
// la extensión de los archivos de nuestra view, sera 'handlebars'
app.set('view engine', 'handlebars'); 

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// router.get('/', async (req, res) => {
//   // Send the rendered Handlebars.js template back as the response
//   res.render('main');
// });


// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
}).catch((error) => console.log("Error with sequelize link:", error));