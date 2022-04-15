const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const aws = require('aws-sdk')

const { generateUploadURL } = require ('./s3')

// {{!-- hn new --}}
const app = express();
const PORT = process.env.PORT || 3001;
// handlebars stuff
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL()
    res.send({url})
})









app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('front'))
app.use(routes);

// ---------------------------------------------------------


// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
 
// // parse application/json
// app.use(bodyParser.json())

// // DB
// const knex = require('knex')({
//     client: 'sqlite3',
//     connection: {
//         filename: "./img.db"
//     },
//     useNullAsDefault: true
// });

// app.get('/', async (req, res) => {
//     res.send('Hello vro!')
// })


// ---------------------------------------------------------













sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Wahoo! App Now listening at port 3001'));
});

