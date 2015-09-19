/**
 * Created by John on 2015-09-19.
 */
var controllist=require('../../AngularJS模板/controllist.js');
var should=require('should');

describe('controllist',function(){
    describe('#controllist_phones',function(){
        it('在controllist_phones的scope对象中应该有3个对象',function(){
            var scope = {};
            var ctrl =  controllist(scope);
            ctrl.phones.length.should.equal(3);
        });
    });
});
