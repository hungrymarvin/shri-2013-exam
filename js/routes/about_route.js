var AboutRoute = Ember.Route.extend({
    renderTemplate: function () {
        this.render({outlet: 'content'});
        this.render('twitter', {
            outlet: 'sidebar'});
    }
});

module.exports = AboutRoute;

