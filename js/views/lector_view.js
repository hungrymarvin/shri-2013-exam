var LectorView = Ember.View.extend({
    click: function (evt) {
        this.get('controller').send('select');
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
});

module.exports = LectorView;

