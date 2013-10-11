var IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo('about');
    }
});

module.exports = IndexRoute;

