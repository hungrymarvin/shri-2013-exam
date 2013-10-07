Shri.Router.map(function () {
    this.resource("students", function () {
        this.resource("student", { path: ':student_id' });
    });


    this.resource("lessons", function () {
        this.resource("lesson", { path: ':lesson_id' });
    });

    this.resource("about");
});

Shri.ApplicationRoute = Ember.Route.extend({
    model: function () {
        var store = this.get('store');

        $.getJSON('js/data/students.json').then(function (data) {
            $(data).each(function () {
                var student = store.createRecord('student', this);
                student.save();
            })
        })

        $.getJSON('js/data/lessons.json').then(function (data) {
            $(data).each(function () {
                var lesson = store.createRecord('lesson', this);
                lesson.save();
            })
        })

    }
});

Shri.AboutRoute = Ember.Route.extend({
    renderTemplate: function(){
        this.render({outlet:'content'});

    }
})

Shri.StudentsRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render({ outlet: 'sidebar' });
    },
    model: function () {
        return this.store.find('student');
    }
});

Shri.StudentRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('student', params.student_id);
    },
    renderTemplate: function () {
        this.render('student_profile',{ outlet:'content'});
    }

});

Shri.LessonsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('lesson');
    },
    renderTemplate: function () {
        this.render({ outlet:'content'});
    }

});

Shri.LessonRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('lesson', params.lesson_id);
    }
});