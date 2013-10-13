var LectorRoute = Ember.Route.extend({
    setupController: function (controller, lector) {
        var lessonsId = lector.get('all_lectures');
        var lessons = [];
        for (var i = 0; i < lessonsId.length; i++) {
            lessons.push(this.store.find('lesson', lessonsId[i]));
        }
        controller.set('lessons', lessons);
        controller.set('model', lector);
    },
    model: function (params) {
        return this.store.find('lector', params.lector_id);
    },
    renderTemplate: function () {
        this.render('lector_profile', { outlet: 'content'});
    }
});

module.exports = LectorRoute;

