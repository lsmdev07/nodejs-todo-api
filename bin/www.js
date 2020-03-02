const app = require('../app/app');
const port = 3000;
const syncDatabase = require('./sync-database');

app.listen(port, ()=>{
    console.log('Tutorial app listening on port 3000');
    syncDatabase().then(()=>{
        console.log("Database snc");
    })
})