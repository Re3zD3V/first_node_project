const express = require( 'express' );
const router = express.Router();

router.get( '/', ( req, res, next ) => {
	res.render( 'home', null );

});

router.get( '/json', ( req, res, next ) => {
	const data = {
		greetings : 'HELLO !'
	};
	res.json( data );
});

router.get( '/home', ( req, res, next ) => {
	res.send( 'Hello from Routes folder !' );
});

module.exports = router;