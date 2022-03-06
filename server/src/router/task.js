const TaskController = require('../controller/task');

exports.routers = (server, database) => {
  server.route({
    method: 'GET',
    path: '/todos',
    config: {
      handler: async (request, h) => {
        return TaskController.list(request,h,database).then((value, error) => {
          if (value.status == 400) {
               return h.response(value).code(400);
          } else {
               return h.response(value).code(200);
          }
        });
      }
    }
  });

  server.route({
    method: 'PUT',
    path: '/todos',
    config: {
      handler: async (request, h) => {
        return TaskController.add(request,h,database).then((value, error) => {
          if (value.status == 400) {
               return h.response(value).code(400);
          } else {
               return h.response(value).code(200);
          }
        });
      }
    }
  });

}