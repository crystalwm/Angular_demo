var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var util=require('util');

    jasmine.loadConfigFile('../support/jasmine.json');



    jasmine.onComplete(function(passed) {
        if(passed) {
            console.log('All specs have passed');
        }
        else {
            console.log('At least one spec has failed');
        }
    });



jasmine.execute(['spec/jasmine_examples/PlayerSpec.js'], 'a spec name');