var LessonsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('lesson');
    },
    renderTemplate: function () {
        this.render({ outlet: 'sidebar'});
    }
});

module.exports = LessonsRoute;

