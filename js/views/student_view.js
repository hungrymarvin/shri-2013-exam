Shri.StudentView = Ember.View.extend({
    click: function (evt) {
        this.get('controller').send('select');
    }

});