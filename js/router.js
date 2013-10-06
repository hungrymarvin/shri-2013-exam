Shri.Router.map(function() {
    this.resource("students", function () {
        this.resource("student", { path: ':student_id' });
    });


    this.resource("lessons", function () {
        this.resource("lesson", { path: ':lesson_id' });
    });
});

Shri.ApplicationRoute = Ember.Route.extend({
    model: function() {
        var store = this.get('store');
        $.getJSON('js/data/students.json').then(function(data){
            $(data.students).each(function(i){
                var student = store.createRecord('student', this);
                student.id = i+1;
                student.save();
            })
        })
    }
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