var exec = require('cordova/exec'),
platform = require('cordova/platform');


module.exports = {
    criarToast: function(mensagem, sucesso, error, opcao) {

        var dir = opcao.dir,
            lang = opcao.lang,
            body = opcao.body,
            tag = opcao.tag,
            icon = opcao.icon,
            data = opcao.data,
            duration = opcao.duration;

        exec(sucesso, error, "Toast", "create", [mensagem, duration, dir, lang, body, tag, icon, data]);
    }
}