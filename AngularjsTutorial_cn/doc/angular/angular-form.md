��ǰ�˵�ҳ����form��grid������ʮ����Ҫ����������������ܶණ���Ļ�����

## from��

1��������ݰ�
2����֤��element eg input select etc
3����ʾ������Ϣ
4������form����֤
5�������ύû����֤ͨ���ı�
6�������ֹ����ύ


### angularjs�е�form
�����form�Ѿ�����ԭ����HTML��������Angular�Լ���ָ���ˣ�

http://docs.ngnice.com/api/ng/directive/form

**���˼��**
��ͳ�ı��ύ��ҳ���ύ֮������ҳ�����¼��ء�
Query�ύ����������$('form').submit()��


**angularJS�����˼��**
���ύ֮����Ҫ��javascript����һЩ�߼��жϡ�
���form�������û��action���ԵĻ���angularJS����ֹĬ����Ϊ��������action���Ե�ʱ�����⣩


### �ڱ���ʲôʱ��Ӧ��ʹ��ngSubmit��ʲôʱ��Ӧ��ʹ��ngClick?

* If a form has only one input field then hitting enter in this field triggers form submit (ngSubmit)
* if a form has 2+ input fields and no buttons or input[type=submit] then hitting enter doesn't trigger submit
* if a form has one or more input fields and one or more buttons or input[type=submit] then hitting enter in any of 
the input fields will trigger the click handler on the first button or input[type=submit] (ngClick) and a submit
 handler on the enclosing form (ngSubmit)
 
 
 ### Ng-cloak���angularJS�е���˸
 
 ### ���ύ�Ŀ���
 ngSubmitָ����ֹ�˱���Ĭ����Ϊ���������󵽷������������¼���ҳ�棩�����Ǳ��к���`action data-action x-action`���Ե�ʱ��
 �Ͳ��ᷢ���������Ρ�
 
 **��jquery�еı���֤�Ĺ���**
 1�����ύ��ť��click�¼�
 2�������鲻ͨ����ʱ����ֹĬ����Ϊ�����������󵽷������������¼���ҳ�棩
 
 **��angularJS������**
 ��һ�������ʽ��`window.location.assign(getRedirectUrl());`
 �Լ��о����Ǻܺã���Ϊ�����ӵĻ���������ת��ʲôҳ����δ����ǿ����ڿͻ��˿����ġ�
 
 �������Ӧ�ò���Ψһ�Ľ��������
 

 �ο����ף�
 http://damoqiongqiu.iteye.com/blog/1920191
 https://scotch.io/tutorials/angularjs-form-validation
 http://www.cnblogs.com/whitewolf/p/3545203.html
 

 








