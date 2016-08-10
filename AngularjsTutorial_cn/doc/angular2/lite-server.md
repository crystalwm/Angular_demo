#### lite-server
1.��node-server��Ϊ��������ʱ��ʹ��
2.��HTML��JavaScript�޸ĵ�ʱ������ˢ��ҳ��
3.`injects CSS changes using sockets`
4.��·���Ҳ�����ʱ����һ��fallbackҳ��

#### Why
1.BrowserSync��������Ҫ�Ŀ��ٵġ��������Ŀ���������
2.`BrowserSync��ȱ��`
  ��angularJS��·���йأ�NodeJS��Ҳ����·�ɡ�
3.lite-server����BrowserSync�����ϵİ�װ

#### Installation and Usage
```
$ npm install lite-server --save-dev
```

```
# Inside package.json...
  "scripts": {
    "dev": "lite-server"
  },
```

```
$ npm run dev
```

#### Global Installation
```
$ npm install -g lite-server

# To run:
$ lite-server
```

#### Custom Configuration
1.lite-server��Ĭ����Ϊ
  1.1 �ӵ�ǰ�ļ�����������
  1.2 �������
  1.3 ʹ��HTML5 ·�ɵ�index.html
2.����lite-server����BrowserSync����˿�����дĬ�����ã�ͨ��bs-config.json����bs-config.js��
  2.1 ����ָ�������ļ����ڵ�Ŀ¼
  ```
  lite-server -c configs/my-bs-config.js
  ```
  ���������µ��޸�
  ```
  {
    "port": 8000,
    "files": ["./src/**/*.{html,htm,css,js}"],
    "server": { "baseDir": "./src" }
  }
  ```
3.����и��Ӹ��ӵ��޸����󣬿��Բ鿴reference

#### Testing
���������˵��˵Ĳ��Ե�ʱ�����ǿ��ܲ�ϣ��log���߳������ǿ�����Ҫ��ֹ������򿪴��ڣ�
���ǿ�����`bs-config.js`�ļ��н������á�
```javscript
 open: false
  logLevel: "silent",
  server: {
    middleware: {
      0: null
    }
  }
```


#### Known Issues
BrowserSync�����Զ���⵽css�ļ��ı仯������������Angualr2��css��embedded��

#### problem
1. lite-server command not found
   lite-server ��Ҫȫ�ְ�װ�����ῴ��ȫ�ְ�װ֮���Ƿ�������ͬ�����⡣





reference:
https://github.com/johnpapa/lite-server
https://github.com/johnpapa/lite-server/issues/9

