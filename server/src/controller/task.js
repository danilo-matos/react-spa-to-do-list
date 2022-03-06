exports.list = (req, h, database) => {

    return new Promise(function (resolve, reject) {
        database.dataBaseRunner.all("select * from task", [], function (err, row) {
            if (err) {
                const error = {
                    'status': 400,
                    'message': 'list task error '
                };
                reject(error);

            } else {
                const listaTasks = [];

                row.forEach(tasks => {
                    const task = {
                          'id': tasks.id
                        , 'status': tasks.status
                        , 'description': tasks.description
                        , 'dateAdded': tasks.dateAdded
                    }

                    listaTasks.push(task)
                });
                const TaskResponse = {
                    'status': 200,
                    'data': listaTasks
                };
                resolve(TaskResponse);
            }
        });
    });
}

exports.add = async (req, h, database) => {
     const task = {
        'description': req.payload.description
     };

    return new Promise(function (resolve, reject) {
        database.dataBaseRunner.run('INSERT INTO task(description) VALUES (?)'
            , [task.description], function (err) {
                if (err) {
                    const error = {
                        'status': 400,
                        'message': 'erro ao cadastrar  task'
                    }
                    reject(error);
                }
                const TaskResponse = {
                    'status': 200,
                    'data': task
                };
                resolve(TaskResponse);
            });
    });
}

