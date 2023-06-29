// libs
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
// files 
const controllers = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3 * 60 * 60 * 1000, // 3 hours in milliseconds
  },
};
app.use(session(sess));

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

app.use(controllers);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
}).catch((error) => console.log("Error with sequelize link:", error));