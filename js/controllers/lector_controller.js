var LectorController = Ember.ObjectController.extend({
    isSelected: false,
    lessons: '',
    actions: {
        select: function() {
            var lector = this.get('model');
            this.transitionToRoute('lector', lector);
        }
    }
});

module.exports = LectorController;

