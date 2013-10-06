Shri.Router.map(function() {
    this.resource("students", function () {
        this.resource("student", { path: ':student_id' });
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