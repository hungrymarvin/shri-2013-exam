Shri.Router.map(function() {
    this.resource("students", function () {
        this.resource("student", { path: ':student_id' });
    });


    this.resource("lessons", function () {
        this.resource("lesson", { path: ':lesson_id' });
    });
});

Shri.StudentsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('student');
    }
});

Shri.StudentRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('student', params.student_id);
    }
});

Shri.LessonsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('lesson');
    }
});

Shri.LessonRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('lesson', params.lesson_id);
    }
});