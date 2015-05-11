module.exports = {
    create: function(sucesso, erro, args) {
        var opcoes = {};
        opcoes.dir = args[2];
        opcoes.land = args[3];
        opcoes.body = args[4];
        opcoes.tag = args[5];
        opcoes.icon = args[6];
        opcoes.data = args[7];

        if (args[0] !== '') {
            if (window.Notification && Notification.permission === "granted") {
                

                var n = new Notification(args[0], opcoes);
                sucesso("Toast Executado");

            } else if (window.Notification && Notification.permission !== "denied") {
                Notification.requestPermission(function(status) {
                    if (Notification.permission !== status) {
                        Notification.permission = status;
                    }

                    // If the user said okay
                    if (status === "granted") {
                        var n = new Notification(args[0],opcoes);
                        sucesso("Toast Executado");

                    } else {
                        erro('Não executou');
                    }
                });
            } else{
            	erro('Ser perminssão, liberar no manifest');
            }
        }
    }
};

require("cordova/exec/proxy").add("Toast", module.exports);