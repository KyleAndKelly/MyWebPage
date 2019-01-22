
#执行过程

@npm init //安装依赖包

@node app.js或者 pm2 start app.js --watch//执行

#项目结构

package.json放置程序基本信息 依赖项
node——modules放的是依赖包 （一开始是没有这个的需要用户自己通过 npm init来安装）


views放模板引擎 也就是文本会变化的html文件
public是静态资源文件夹，放置界面的javascript文件 to-dolist.js作为交互 styles.css作为界面美化
上述两个文件夹构成了前端界面（前端三大件 css+js+html）



controllers文件夹放的是路由文件 针对页面不同请求(post get delete)下执行的不同操作
			由于数据的存放用到了数据库 所以引入了mongoose模块

app.js是整个程序的入口文件 过程是
 先导入express模块和路由脚本 设置模板引擎 引入静态文件
在执行路由操作 监听3000端口 输出控制台日志

更详细的内容看代码中的注释



