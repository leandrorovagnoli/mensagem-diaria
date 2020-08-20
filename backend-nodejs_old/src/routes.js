const { Router } = require('express');
const DailyMessageController = require('./controllers/DailyMessageController');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/', DailyMessageController.index);
routes.get('/mensagem/data/:dateMessage', DailyMessageController.getByDate);
routes.post('/', DailyMessageController.store);
routes.post('/users/', UserController.userTokenStore);
routes.put('/mensagem/:id', DailyMessageController.update);
routes.delete('/mensagem/data/:dateMessage', DailyMessageController.deleteByDate);
routes.delete('/mensagem/:id', DailyMessageController.deleteById);

module.exports = routes;
