const models = require('../../models/models');
const template = require('../../../bin/template')
exports.index = (req, res) => {
    models.User.findAll().then(function (results) {
        let r = '';
        for (let i = 0; i < results.length; i++) {
            
            r += '<a href="/users/' + results[i].id + '" style=" text-decoration:none;">no.' + i + ' user name: ' + results[i].name + '<br><br>'
        }
        res.send(template.HTML('hello', r));

    }).catch(function (err) {
        return res.status(404).json({ err: 'Undefined error!' });
    });
};

exports.show = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({ err: 'Incorrect id' });
    }
    models.User.findOne({
        where: {
            id: id
        }
    }).then(user => {
        if (!user) {
            return res.status(404).json({ err: 'No User' });
        }
        return res.send(template.HTML('hi', `
        <div>user name: ${user.name}<br></div>
        <div style="display: flex; flex-direction: row; justify-content: center;">
            <form action="/users/${user.id}/put" method="post">
                <input name="name" placeholder="이름을 입력해주세요.">
                <input type="submit" value="modify">
            </form>
            <form action="/users/${user.id}/del" method="post">
                <input type="submit" value="delete">
            </form>
        </div>
        `));
    });
};


exports.create = (req, res) => {
    const name = req.body.name || '';
    if (!name.length) {
        return res.status(400).json({ err: 'Incorrect name' });
    }
    models.User.create({
        name: name
    }).then(() => res.redirect('/users'))
};



exports.update = (req, res) => {
    const newName = req.body.name || '';
    const name = models.User.name;
    const id = parseInt(req.params.id, 10);
    if (!name.length) {
        return res.status(400).json({ err: 'Incorrect name' });
    }
    models.User.update(
        { name: newName },
        { where: { id: id }, returning: true })
        .then(() => res.redirect('/users'))
        .catch(function (err) {
            return res.status(404).json({ err: 'Undefined error!' });
        })
};

exports.destroy = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({ error: 'Incorrect id' });
    }
    models.User.destroy({
        where: {
            id: id
        }
    }).then(() => res.redirect('/users'))
};