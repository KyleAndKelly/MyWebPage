$(document).ready(function() {
    //回去复习jQuery 选择器
    //这里是找到html中的form节点  用on函数来绑定submit事件 ：submit事件即当<form>提交时触发
    $('form').on('submit', function(event) {  
        event.preventDefault();
        var item = $('form input'); //item读取输入框中的值
        var todo = { item: item.val().trim() };//去掉左边和右边空格得到一个对象传递给todo

        $.ajax({ //ajax操作 
            type: 'POST', //发送一个post请求到服务器中
            url: '/todo',//这个请求对应的路由是/todo 所以在服务器脚本中程序就知道该找那个函数去处理
            data: todo,//todo数据作为post请求传递给服务器 在服务器中会传递给路由操作下的post操作函数app.post（todoController查看） 
            success: function(data) {

                location.reload();//浏览器刷新 ，再次向服务器发送get请求
            }
        });

        return false;

    });


    //这里是找到html中的li节点  用on函数来绑定click事件 ：click事件即当<li>被点击时触发
    //$('li').on('click', function() {
     //   var item = $(this).text().trim().replace(/ /g, "-");//去掉尾部的空格并在其内部空格用-作替换
    //    $.ajax({
     //       type: 'DELETE', //发送一个post请求到服务器中
     //       url: '/todo/' + item,//这个请求对应的路由是'/todo/' + item  所以在服务器脚本中程序就知道该找那个函数去处理
     //       success: function(data) {
           
      //          location.reload(); //浏览器刷新 ，再次向服务器发送get请求
      //      }
     //   });
   // });

});
