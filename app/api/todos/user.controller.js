const models = require('../../models/models');
const template = require('../../../bin/template')
exports.index = (req, res) => {
    models.Todo.findAll().then(function (results) {
        let r = '';
        for (let i = 0; i < results.length; i++) {
            
            r += `<a href="/todos/${results[i].id}" style=" text-decoration:none;">
            no.${i}  할 일: ${results[i].title}/
            세부 설명: ${results[i].sub_title}/
            중요도: ${results[i].importance}
             <br><br>`
        }
        res.send(template.HTML( r));

    }).catch(function (err) {
        return res.status(404).json({ err: 'Undefined error!' });
    });
};

exports.show = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({ err: 'Incorrect id' });
    }
    models.Todo.findOne({
        where: {
            id: id
        }
    }).then(user => {
        if (!user) {
            return res.status(404).json({ err: 'No User' });
        }
        return res.send(template.HTML( `
        <div>title: ${user.title}<br></div>
        <div style="display: flex; flex-direction: row; justify-content: center;">
            <form action="/todos/${user.id}/put" method="post">
                <input name="title" value="${user.title}">
                <input name="sub_title" value="${user.sub_title}">
                <input name="importance" value="${user.importance}">
                <input type="submit" value="modify">
            </form>
            <form action="/todos/${user.id}/del" method="post">
                <input type="submit" value="delete">
            </form>
        </div>
        `));
    });
};


exports.create = (req, res) => {
    const title = req.body.title || '';
    const sub_title = req.body.sub_title || '';
    const importance = req.body.importance || 3;
    if (!title.length) {
        
        return res.send(`<script>if(confirm("할 일을 입력해주세요!")) {
            window.location.href = "/"
        }</script>`);
    }
    models.Todo.create({
        title: title,
        sub_title: sub_title,
        importance: importance
    }).then(() => res.redirect('/todos'))
};



exports.update = (req, res) => {
    const newTitle = req.body.title || '';
    const newSubTitle = req.body.sub_title;
    const newImportance = req.body.importance;
    const name = models.Todo.title;
    const id = parseInt(req.params.id, 10);
    // if (!name.length) {
    //     return res.status(400).json({ err: 'Incorrect name' });
    // }
    models.Todo.update(
        { 
            title: newTitle,
            sub_title: newSubTitle,
            importance: newImportance
         },
        { where: { id: id }, returning: true })
        .then(() => res.redirect('/todos'))
        .catch(function (err) {
            return res.status(404).json({ err: 'Undefined error!' });
        })
};

exports.destroy = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({ error: 'Incorrect id' });
    }
    models.Todo.destroy({
        where: {
            id: id
        }
    }).then(() => res.redirect('/todos'))
};