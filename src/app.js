const express = require('express');
const app = express();
const morgar = require('morgan');


//configurations
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middleware
app.use(morgar('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require('./routes/index.js'));


//Starting Server

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
})