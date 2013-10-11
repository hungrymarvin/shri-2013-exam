var StudentRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('student', params.student_id);
    },
    renderTemplate: function () {
        this.render('student_profile', { outlet: 'content'});
    }
});

module.exports = StudentRoute;

