// require other, dependencies here, ie:
// require('./vendor/moment');

require('../vendor/jquery');
require('../vendor/handlebars');
require('../vendor/ember');
require('../vendor/ember-data'); // delete if you don't want ember-data

var App = Ember.Application.create();

App.Store = require('./store'); // delete if you don't want ember-data

App.initializer({
    name: "preload_lectors",
    after: 'store',

    initialize: function (container) {
        App.deferReadiness();

        var store = container.lookup('store:main');
        var lectors = store.find('lector');

        Ember.$.getJSON('data/lectors.json').then(function (data) {
            $(data).each(function () {
                var lector = store.getById('lector', this.id);
                if (lector === null || lector.get('isEmpty')) {
                    lector = store.push('lector', this);
                    lector.save();
                }
            });

            App.advanceReadiness();
        })
    }
})

App.initializer({
    name: "preload_students",
    after: 'store',

    initialize: function (container) {
        App.deferReadiness();

        var store = container.lookup('store:main');
        var students = store.find('student');

        Ember.$.getJSON('data/students.json').then(function (data) {
            $(data).each(function () {
                var student = store.getById('student', this.id);
                if (student === null || student.get('isEmpty')) {
                    student = store.push('student', this);
                    student.save();
                }
            })

            App.advanceReadiness();
        })
    }
})

App.initializer({
    name: "preload_lessons",
    after: 'store',

    initialize: function (container) {
        App.deferReadiness();

        var store = container.lookup('store:main');
        var lectors = store.find('lector');

        Ember.$.getJSON('data/lessons.json').then(function (data) {
            $(data).each(function () {
                var lesson = store.getById('lector', this.id);
                if (lesson === null || lesson.get('isEmpty')) {
                    lesson = store.push('lesson', this);
                    lesson.save();
                }
            })

            App.advanceReadiness();
        })
    }
})

module.exports = App;

