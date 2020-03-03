const app = require('../app/app');
const port = 3000;
const syncDatabase = require('./sync-database');
const template = require('./template');
const controller = require('../app/api/users/user.controller');
app.get('/', (req, res)=>{
    res.send(template.HTML('main', `
    <form action="/users" method="post">
        <input name="name" placeholder="이름을 입력해주세요.">
        <input type="submit" value="submit">
    </form>
    <div>
        <a href="/users" style="text-decoration: none;">유저 목록 보기</a>
    </div>
    `));
});

app.listen(port, ()=>{
    console.log('Tutorial app listening on port 3000');
    syncDatabase().then(()=>{
        console.log("Database snc");
    })
})