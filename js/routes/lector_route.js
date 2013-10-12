var LectorRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('lector', params.lector_id);
    },
    renderTemplate: function () {
        this.render('lector_profile', { outlet: 'content'});
    }
});

module.exports = LectorRoute;

