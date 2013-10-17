var TwitterView = Ember.View.extend({
    didInsertElement: function () {
        try {
            $.ajaxSetup({
                cache: true
            });
            $.getScript("http://platform.twitter.com/widgets.js")
        }
        catch (e) {
            console.log(e.message);
        }
    }
});

module.exports = TwitterView;

