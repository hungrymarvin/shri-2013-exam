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

        var students = store.find('student');
        $.getJSON('js/data/students.json').then(function (data) {
            $(data).each(function () {
                var student = store.getById('student', this.id);
                if (student.get('isEmpty')) {
                    student = store.createRecord('student', this);
                    student.save();
                }
            })

        })

        var lessons = store.find('lesson');
        $.getJSON('js/data/lessons.json').then(function (data) {
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

Shri.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo('about');
    }
});

Shri.AboutRoute = Ember.Route.extend({
    renderTemplate: function () {
        this.render({outlet: 'content'});
        this.render('twitter', {
            outlet: 'sidebar'});
    }
})

Shri.StudentsRoute = Ember.Route.extend({
    renderTemplate: function () {
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
        this.render('student_profile', { outlet: 'content'});
    }

});

Shri.LessonsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('lesson');
    },
    renderTemplate: function () {
        this.render({ outlet: 'sidebar'});
    }

});

Shri.LessonRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('lesson', params.lesson_id);
    },
    renderTemplate: function () {
        this.render('lesson_profile', { outlet: 'content'});
    }
});