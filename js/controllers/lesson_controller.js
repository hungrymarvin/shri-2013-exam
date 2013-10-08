Shri.LessonController = Ember.ObjectController.extend({
    actions: {
        select: function() {
            var lesson = this.get('model');
            this.transitionToRoute('lesson', lesson);

            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = "newidentifier"+lesson.id;
                    this.page.url = "http://example.com/#!"+lesson.id;
                }
            });
        }
    }
});