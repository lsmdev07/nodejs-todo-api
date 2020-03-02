var express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/users', require('./api/users'));
app.get('/',(req, res)=>{
    res.send('Hello world!\n');
});


app.listen(3000,()=>{
    console.log('Example app listening on port 3000!');
})

module.exports = app;