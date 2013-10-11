var StudentsRoute = Ember.Route.extend({
    renderTemplate: function () {
        this.render({ outlet: 'sidebar' });
    },
    model: function () {
        return this.store.find('student');
    }
});

module.exports = StudentsRoute;

