var express = require('express');
var router = express.Router();

//FETCH ALL TODO  
router.get('/v1/todo', function(req, res, next) {
  res.send('FETCH ALL TODO');
});

//ADD TODO
router.post('/v1/todo/add', function(req, res, next) {
  res.send('ADD A NEW TODO');
});

//UPDATE TODO SPECIFIC
router.post('/v1/todo/update/:index', function(req, res, next) {
  res.send('UPDATE TODO');
});

//DELETE TODO SPECIFIC
router.post('/v1/todo/delete/:index', function(req, res, next) {
  res.send('DELETE TODO');
});

//TODO TAG AS DONE
router.post('/v1/todo/tag-done/:index', function(req, res, next) {
  res.send('TAG AS DONE');
});

module.exports = router;
