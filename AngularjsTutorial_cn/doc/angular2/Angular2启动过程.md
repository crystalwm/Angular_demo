#### ����

1����http://localhost:3000/multi-heroes.html�ļ��ع��̡�
1.1 ��������multi-heroes.html��script��ǩ�����ص�����js�ļ���
1.2 ����system.config.js�еĺ�����һ��������ִ�к�������˻�ִ����������е����ݣ�����`System.config()`
    1.2.1 ����map���ԵĴ���
    �������map�����������ö����ϵ�ÿ������p�����Ҷ�ȡ������p��Ӧ��ֵv��
    ```
    loader.map[p] = v;
    ```
    1.2.2 ����packages����Ĵ���
    �������packages�����������ö����ϵ�ÿһ������p��
    ���һ����coreResolve������loader�����Ͻ�������p���õ�props
    ͨ������p��packages��ȡ������ֵpkg
    ͨ��pkg���󣬽��Ϸ���packages���Լ��ص�
    ```
    extendMeta(loader.packages[prop], pkg);
    ```

Ӧ������
```
 <script src="node_modules/systemjs/dist/system.src.js"></script>
```

![dd](./img/System01.jpg)


��system.config.js�ļ���
1.��HTMLҳ����import����һ��multiapp��component.����System.map�����в������component���ڵ��ļ���app
2.Ȼ����System.packages�ļ����²�����app�ļ�������������ļ�����һ��
3.Ȼ�����и��ļ��е�main�ļ��������û��main�ļ��Ļ���ֱ�ӵ�ִ�и��ļ���

��ע
���component���ڵ�����·������systemjs.config.js�ļ��н������õġ�
