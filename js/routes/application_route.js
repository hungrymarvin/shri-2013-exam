var ApplicationRoute = Ember.Route.extend({
    model: function () {
        var store = this.get('store');

        var students = store.find('student');
        $.getJSON('data/students.json').then(function (data) {
            $(data).each(function () {
                var student = store.getById('student', this.id);
                if (student === null || student.get('isEmpty')) {
                    student = store.push('student', this);
                    student.save();
                }
            })

        })

        var lectors = store.find('lector');
        $.getJSON('data/lectors.json').then(function (data) {
            $(data).each(function () {
                var lector = store.getById('lector', this.id);
                if (lector === null || lector.get('isEmpty')) {
                    lector = store.push('lector', this);
                    lector.save();
                }
            })
        })

        var lessons = store.find('lesson');
        $.getJSON('data/lessons.json').then(function (data) {
            $(data).each(function () {
                var lesson = store.getById('lesson', this.id);
                if (lesson === null || lesson.get('isEmpty')) {
                    lesson = store.push('lesson', this);
                    lesson.save();
                }
            })
        })

        var lectors = store.find('lector');
        $.getJSON('data/lectors.json').then(function (data) {
            $(data).each(function () {
                var lector = store.getById('lector', this.id);
                if (lector === null || lector.get('isEmpty')) {
                    lector = store.createRecord('lector', this);
                    lector.save();
                }
            })
        })
    }
});

module.exports = ApplicationRoute;

