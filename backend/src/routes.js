const { Router } = require('express');
const DailyMessageController = require('./controllers/DailyMessageController');

const routes = Router();

routes.get('/', DailyMessageController.index);
routes.post('/', DailyMessageController.store);
routes.put('/', DailyMessageController.update);
routes.delete('/', DailyMessageController.delete);

module.exports = routes;
