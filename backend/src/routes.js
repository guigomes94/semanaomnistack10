const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/', async (req, res) => {
  return res.json({message: 'Dev Radar'});
});

//devs
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

//search
routes.get('/search', SearchController.index);

module.exports = routes;