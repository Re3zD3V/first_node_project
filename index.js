const express = require( 'express' );
const path = require( 'path' );
const hoganMiddleware = require( 'hogan-middleware' );

const app = express();

// Setting static assets path
app.use( express.static( path.join( __dirname, 'public' ) ) );

// Setting app's view folder path
app.set( 'views', path.join( __dirname, 'views' ) );

// Setting app's view engine to mustache
app.set( 'view engine', 'mustache' );
app.engine( 'mustache', hoganMiddleware.__express );


// Importing and using app's router from routes/index.js file
const indexRouter = require( './routes/index');
app.use( '/', indexRouter );

app.listen(3000); // 3000, 5000, 8000, 8080
console.log( 'Server running on http://localhost:3000' );