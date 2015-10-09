/**
 * Created by R9K0H46 on 2015/10/9.
 */
/**
 *
 * */

var appModule=angular.module('app',['ui.router']);

appModule.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.when("","PageTab");
    $stateProvider.state('PageTabe',{
        url:'/PageTab',
        templateUrl:'PageTab.html'
    }).state('PageTabe.Page1',{
        url:'/Page1',
        templateUrl:'Page1.html'
    }).state('PageTabe.Page2',{
        url:'/Page2',
        templateUrl:'Page2.html'
    }).state('PageTabe.Page3',{
        url:'/Page3',
        templateUrl:'Page3.html'
    });
});

