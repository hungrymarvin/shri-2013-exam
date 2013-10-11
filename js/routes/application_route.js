var ApplicationRoute = Ember.Route.extend({
    model: function () {
        var store = this.get('store');

        var students = store.find('student');
        $.getJSON('data/students.json').then(function (data) {
            $(data).each(function () {
                var student = store.getById('student', this.id);
                if (student.get('isEmpty')) {
                    student = store.createRecord('student', this);
                    student.save();
                }
            })

        })

        var lessons = store.find('lesson');
        $.getJSON('data/lessons.json').then(function (data) {
            $(data).each(function () {
                var lesson = store.getById('lesson', this.id);
                if (lesson.get('isEmpty')) {
                    lesson = store.createRecord('lesson', this);
                    lesson.save();
                }
            })
        })
    }
});

module.exports = ApplicationRoute;

