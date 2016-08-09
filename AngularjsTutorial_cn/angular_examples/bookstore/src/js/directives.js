/**
 * Created by John on 2015-10-15.
 */
myModule.directive('checkusername',function(){
    return {
        restrict:'A',
        scope:{
            username:'=',
            isvalidusername:'='
        },
        link:function postLink(scope,iElement,iAttr){
            iElement.bind("blur",function(){

                var pattern =/^[a-zA-Z0-9_]+$/;
                var str=scope.username;
                if((typeof str!=="undefined") && pattern.test(str)){
                    //验证成功
                    scope.isvalidusername='Y';
                    iElement.parent().addClass('has-success');
                    iElement.parent().addClass('has-feedback');
                    iElement.after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
                }
                else if((typeof str!=="undefined") ){
                    //验证不成功
                    scope.isvalidusername='N';
                    iElement.parent().addClass('has-error');
                    iElement.parent().addClass('has-feedback');
                    iElement.after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>  ');
                }
                else{
                    //没有输入，
                    scope.isvalidusername='N';

                }
            });
            //???????????????????
            iElement.bind("focus",function(){
                iElement.parent().hasClass('has-success')?iElement.parent().removeClass('has-success'):"";
                iElement.parent().hasClass('has-error')?iElement.parent().removeClass('has-error'):"";
                iElement.parent().hasClass('has-feedback')?iElement.parent().removeClass('has-feedback'):"";
                iElement.next('span')?iElement.next('span').remove():"";

            });
        }
    };
});

myModule.directive('checkemail',function(){
    return {
        restrict:'A',
        scope:{
            password:'=',
            isvalidpwd:'='
        },
        link:function postLink(scope,iElement,iAttr){
            iElement.bind("blur",function(){

                var pattern =/^([a-zA-Z0-9! @ # $ % ?_]){6,16}$/;
                var str=scope.password;
                if((typeof str!=="undefined") && pattern.test(str)){
                    //验证成功
                    scope.isvalidpwd='Y';
                    iElement.parent().addClass('has-success');
                    iElement.parent().addClass('has-feedback');
                    iElement.after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
                }
                else if((typeof str!=="undefined") ){
                    //验证不成功
                    scope.isvalidpwd='N';
                    iElement.parent().addClass('has-error');
                    iElement.parent().addClass('has-feedback');
                    iElement.after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>  ');
                }
                else{
                    //没有输入，
                    scope.isvalidpwd='N';

                }
            });
            //???????????????????
            iElement.bind("focus",function(){
                iElement.parent().hasClass('has-success')?iElement.parent().removeClass('has-success'):"";
                iElement.parent().hasClass('has-error')?iElement.parent().removeClass('has-error'):"";
                iElement.parent().hasClass('has-feedback')?iElement.parent().removeClass('has-feedback'):"";
                iElement.next('span')?iElement.next('span').remove():"";

            });
        }
    };
});