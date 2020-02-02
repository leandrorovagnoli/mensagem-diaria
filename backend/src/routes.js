const { Router } = require('express');
const DailyMessageController = require('./controllers/DailyMessageController');

const routes = Router();

routes.get('/', DailyMessageController.index);
routes.get('/mensagem/data/:dateMessage', DailyMessageController.getByDate);
routes.post('/', DailyMessageController.store);
routes.put('/mensagem/:id', DailyMessageController.update);
routes.delete('/mensagem/data/:dateMessage', DailyMessageController.deleteByDate);
routes.delete('/mensagem/:id', DailyMessageController.deleteById);

module.exports = routes;
