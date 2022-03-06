exports.list = (req, h, database) => {

    return new Promise(function (resolve, reject) {
        database.dataBaseRunner.all("select * from user", [], function (err, row) {
            if (err) {
                console.log(err);
                const error = {
                    'status': 400,
                    'message': 'list users error '
                };
                reject(error);

            } else {
                const listaUsuarios = [];

                row.forEach(usuario => {
                    const user = {
                        'id': usuario.id
                        ,'name': usuario.name
                        , 'surname': usuario.surname,
                    }

                    listaUsuarios.push(user)
                });
                const UserResponse = {
                    'status': 200,
                    'data': listaUsuarios
                };
                resolve(UserResponse);
            }
        });
    });
}

exports.add = async (req, h, database) => {
    const user = {
        'name': req.payload.name,
        'surname': req.payload.surname,
        'password': req.payload.password
    };

    return new Promise(function (resolve, reject) {
        database.dataBaseRunner.run('INSERT INTO user(name, surname, password) VALUES (?,?,?)'
            , [user.name, user.surname, user.password], function (err) {
                if (err) {
                    const error = {
                        'status': 400,
                        'message': 'erro ao cadastrar usuario'
                    }
                    reject(error);
                }
                const UserResponse = {
                    'status': 200,
                    'data': user
                };
                resolve(UserResponse);
            });
    });
}



