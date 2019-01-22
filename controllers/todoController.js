var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mongoose = require('mongoose');

mongoose.connect('mongodb://iamkyle:ccc07932806399@ds059702.mlab.com:59702/kylechen');//链接mlab中的MongoDB数据库

var todoSchema = new mongoose.Schema({item: String}); //创建数据库的每一个导入数据的模板  这是item: String}类型的数据

var Todo = mongoose.model('Todo', todoSchema);//以上面这个todoSchema为模板 创建名为Todo的数据库操作对象 程序操作它就可以操作数据库



module.exports = function(app) {


//下面这个函数是相应/todo页面下的get请求  req代表收到的请求数据 
  app.get('/todo', function(req, res) {
    Todo.find({}, function(err, data) {//查找数据库中已存的所有数据 传给data 如果有错则报错err
      if (err) throw err;
      res.render('todo', { todos: data });//将html模板渲染起来 并替代数据todos
    });
  });


//下面这个函数是相应/todo页面下的post请求  req代表收到的请求数据 
  app.post('/todo', urlencodedParser, function(req, res) {
    var itemOne = Todo(req.body).save(function(err, data) {
      if (err) throw err;
      res.json(data);//把data作为响应发送
    });
  });



//下面这个函数是相应/todo/:item页面下的delete请求  req代表收到的请求数据 
  //app.delete('/todo/:item', function(req, res) {

   // Todo.find({item: req.params.item.replace(/-/g, " ")}).remove(function(err, data) {
    //  if (err) throw err;
    //  res.json(data);
    //});
  //});
//}
