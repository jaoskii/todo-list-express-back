var express = require('express');
var router = express.Router();
var fs = require('fs');
const todos = fs.readFileSync('temp_db/todo.json', 'utf8');

//FETCH ALL TODO  
router.get('/v1/todo', function(req, res, next) {
  let todo_list = JSON.parse(todos);
  let return_data = {'msg': 'TODOs Fetched', 'data':todo_list };
  res.send(return_data);
});

//ADD TODO
router.post('/v1/todo/add', async function(req, res, next) {
  var todo_list = JSON.parse(todos);
  todo_list.push(req.body);
  
  await fs.writeFile("./temp_db/todo.json", JSON.stringify(todo_list), "utf8",  err => {
      if (err) throw err;
      console.log("Done writing");
      let return_data = {'msg': 'New TODO Added', 'data': ''};
      res.send(return_data);
  });
});

//UPDATE TODO SPECIFIC
router.post('/v1/todo/update/:index', async function(req, res, next) {
  var todo_list = JSON.parse(todos);
  Object.keys(req.body).forEach((key) => {
    todo_list[req.params.index][key] = req.body[key];
  })

  await fs.writeFile("./temp_db/todo.json", JSON.stringify(todo_list), "utf8",  err => {
      if (err) throw err;
      console.log("Done writing");
      let return_data = {'msg': 'TODO Added Updated', 'data': req.body};
      res.send(return_data);
  });
});

//DELETE TODO SPECIFIC
router.post('/v1/todo/delete/:index', async function(req, res, next) {
  var todo_list = JSON.parse(todos);
  todo_list.splice(req.params.index, 1);

  await fs.writeFile("./temp_db/todo.json", JSON.stringify(todo_list), "utf8",  err => {
      if (err) throw err;
      console.log("Done writing");
      let return_data = {'msg': 'TODO Removed', 'data': req.body};
      res.send(return_data);
  });
});

//TODO TAG AS DONE
router.post('/v1/todo/tag-done/:index', async function(req, res, next) {
  var todo_list = JSON.parse(todos);
  todo_list[req.params.index]['status'] = req.body['status'];

  await fs.writeFile("./temp_db/todo.json", JSON.stringify(todo_list), "utf8",  err => {
      if (err) throw err;
      console.log("Done writing");
      let return_data = {'msg': 'TODO Status Updated', 'data': req.body};
      res.send(return_data);
  });
});

module.exports = router;
