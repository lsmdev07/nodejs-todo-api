const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req, res)=>{
    return res.json(users);
});

//[GET]::해당 id 값 return
router.get('/:id',(req, res)=>{
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
//[POST]::user 추가
router.post('/', (req, res)=>{
    const name = req.body.name || '';
    if(!name.length){
        return res.status(400).json({err: 'Incorrect name'});
    }
    const id = users.reduce((maxId, user)=>{
        return user.id > maxId? user.id:maxId;
    },0)+1;

    const newUser = {
        id:id,
        name: name
    };
    users.push(newUser);
    return res.status(201).json(newUser);
});

//[DEL]::해당 id 값 delete
router.delete('/:id',(req, res)=>{
    const id = parseInt(req.params.id, 10);
    if(!id){
        return res.status(400).json({error:'Incorrect id'});
    }
    const userIdx = users.findIndex(user=>user.id===id);
    if(userIdx === -1){
        return res.status(404).json({error: 'Unknown user'});
    }
    users.splice(userIdx, 1);
    res.status(204).send();
});

//[ERROR]::404 NOT FOUND
router.get('/:id', (req, res)=>{
    let user = users.filter(user => user.id === id)[0];
    if(!user){
        return res.status(404).json({err: 'Unknown user'});
    }

});

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


module.exports = router;