/**
 * Created by John on 2015-10-15.
 */
myModule.directive('checkusername',function(){
    return {
        restrict:'A',
        link:function postLink(scope,iElement,iAttr){

            console.log(scope.userName);
            iElement.bind("blur",function(){

                var pattern =/([a-zA-Z0-9]|[_])+/;
                var str=scope.userName;
                if(pattern.test(str)){
                    //添加上成功的标识
                    iElement.parent().addClass('has-success');
                    iElement.parent().addClass('has-feedback');
                    iElement.after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
                }
                else{
                    //添加上失败的标识
                    iElement.parent().addClass('has-error');
                    iElement.parent().addClass('has-feedback');
                    iElement.after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>  ');
                }
            });
            //获取焦点的时候清楚样式
            iElement.bind("focus",function(){
                iElement.parent().hasClass('has-success')?iElement.parent().removeClass('has-success'):"";
                iElement.parent().hasClass('has-error')?iElement.parent().removeClass('has-error'):"";
                iElement.parent().hasClass('has-feedback')?iElement.parent().removeClass('has-feedback'):"";
                iElement.next('span')?iElement.next('span').remove():"";

            });
        }
    };
});