module.exports.startChat = function (application, req, res) {
    let body = req.body;

    req.assert('nickname', 'O Nome ou Apelido é obrigatório').notEmpty();
    req.assert('nickname', 'O Nome ou Apelido deve conter entre 3 e 15 caracteres').len(3,15);

    let errors = req.validationErrors();
    if(errors) {
        res.render('index', {validation: errors});
        return;
    }
    application.get('io').emit('msgClient', {nickname: body.nickname, msg: 'Acabou de entrar no chat'});

    res.render('chat', {nickname: body.nickname});
};