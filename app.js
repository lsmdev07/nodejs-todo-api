var express = require('express');
const app = express();
app.get('/',(req, res)=>{
    res.send('Hello world!\n');
});

app.get('/users', (req, res)=>{
    return res.json(users);
});

//[ERROR]::id가 숫자가 아니면
app.get('/users/:id',(req, res)=>{
    const id = parseInt(req.params.id, 10);
    if(!id){
        return res.status(400).json({err: 'Incorrect id'});
    }
    let user = users.filter(user => user.id === id)[0];
    if(!user) {
        return res.status(404).json({err: 'Unknown user'});
    }
    return res.json(user);
});

//[ERROR]::없는 id이면
app.get('/users/:id', (req, res)=>{
    let user = users.filter(user => user.id === id)[0];
    if(!user){
        return res.status(404).json({err: 'Unknown user'});
    }

});

app.listen(3000,()=>{
    console.log('Example app listening on port 3000!');
})

let users = [
    {
        id: 1,
        name: 'Hyun'
    },
    {
        id: 2,
        name: 'Alice'
    },
    {
        id:3,
        name: 'Kelly'
    }
]

