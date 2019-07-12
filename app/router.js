module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.index.index);
    router.get('/index', controller.index.index);
    // router.get('/users', controller.users.index);
  };