const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const port = 3000;
app.use( bodyParser.urlencoded( { extended: true } ) );
app.listen( port, ()=>{
    console.log( 'server up on:', port );
})

app.post( '/', ( req, res )=>{
    console.log( 'POST received:', req.body );
    res.send( 'meow' );
})