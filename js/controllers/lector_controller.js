var LectorController = Ember.ObjectController.extend({
    isSelected: false,
    lessons: '',
    style: function() {
        return "background-image:url('" + this.get('model').get('photo_url')+"')";
    }.property(this),
    actions: {
        select: function() {
            var lector = this.get('model');
            this.transitionToRoute('lector', lector);
        }
    }
});

module.exports = LectorController;

