var StudentController = Ember.ObjectController.extend({
    isEditing: false,
    actions: {
        edit: function () {
            this.set('isEditing', true);
        },

        doneEditing: function () {
            this.set('isEditing', false);
            this.get('model').save();
        },

        select: function () {
            var student = this.get('model');
            this.transitionToRoute('student', student);
        }
    }
});

module.exports = StudentController;

