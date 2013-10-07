Shri.LessonController = Ember.ObjectController.extend({
    actions: {
        select: function() {
            var lesson = this.get('model');
            this.transitionToRoute('lesson', lesson);
        }
    }
});