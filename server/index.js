'use strict';
const Hapi = require('@hapi/hapi');
const UserRouter = require('./src/router/user');
const TaskRouter = require('./src/router/task');
const dataBaseServer = require('./src/db/db-schema/db-schema');

const init = async () => {
    await dataBaseServer.UserTable;
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    
     // Users  routers
     UserRouter.routers(server , dataBaseServer);

     // Tasks  routers
      TaskRouter.routers(server ,dataBaseServer);


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();