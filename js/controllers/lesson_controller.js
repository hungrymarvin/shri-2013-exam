var LessonController = Ember.ObjectController.extend({
    isSelected: false,
    actions: {
        select: function() {
            var lesson = this.get('model');
            this.transitionToRoute('lesson', lesson);

            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = "lesson"+lesson.id;
                    this.page.url = "http://myalin.ru/shri/#!"+lesson.id;
                }
            });
        }
    }
});

module.exports = LessonController;

