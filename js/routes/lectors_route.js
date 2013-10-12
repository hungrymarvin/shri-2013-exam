var LectorsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('lector');
    },
    renderTemplate: function () {
        this.render({ outlet: 'sidebar'});
    }
});

module.exports = LectorsRoute;

