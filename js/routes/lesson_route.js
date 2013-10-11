var LessonRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('lesson', params.lesson_id);
    },
    renderTemplate: function () {
        this.render('lesson_profile', { outlet: 'content'});
    }
});

module.exports = LessonRoute;

