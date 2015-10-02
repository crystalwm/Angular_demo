比如我需要需要关闭“3000”端口
1：在cmd中找到端口的pid
netstat -ano|findstr 3000
得到的结果是：
  TCP    0.0.0.0:3000           0.0.0.0:0              LISTENING       8488
2：在windows任务管理器中结束这个进程
  Ctrl+Shift+Esc打开任务管理器，然后找到pid对应的进程，然后结束这个进程就好了。
  


参考文献：
http://jingyan.baidu.com/article/8065f87fdc5908233124988b.html