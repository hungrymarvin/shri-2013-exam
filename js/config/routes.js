var App = require('./app');

App.Router.map(function() {
    this.resource("students", function () {
        this.resource("student", { path: ':student_id' });
    });

    this.resource("lessons", function () {
        this.resource("lesson", { path: ':lesson_id' });
    });

    this.resource("about");
});

