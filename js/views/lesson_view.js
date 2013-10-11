var LessonView = Ember.View.extend({
    click: function (evt) {
        this.get('controller').send('select');
    }
});

module.exports = LessonView;

