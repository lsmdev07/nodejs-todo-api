const app = require('../app/app');
const port = 3000;
const syncDatabase = require('./sync-database');
const template = require('./template');
const controller = require('../app/api/todos/user.controller');
app.get('/', (req, res)=>{
    res.send(template.HTML( `
    <form action="/todos" method="post">
    <div>
        나의 할 일: <input name="title" placeholder="일정을 입력해주세요."><br>
        세부 설명: <input name="sub_title" placeholder="설명을 입력해주세요."><br>
        중요도: <input name="importance" placeholder="중요도를 입력해주세요."><br>
        <input type="submit" value="submit">
    </div>
    </form>
    <div>
        <a href="/todos" style="text-decoration: none;">할 일 보기</a>
    </div>
    `));
});

app.listen(port, ()=>{
    console.log('Tutorial app listening on port 3000');
    syncDatabase().then(()=>{
        console.log("Database snc");
    })
})