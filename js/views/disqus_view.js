var DisqusView = Ember.View.extend({
    tagName: 'div',
    elementId: 'disqus_thread',

    didInsertElement: function () {
        var id = this.get('controller.model').id
        try {
            $.ajaxSetup({
                cache: true
            });
            $.getScript("http://shrialbum.disqus.com/embed.js", function () {
                DISQUS.reset({
                    reload: true,
                    config: function () {
                        this.page.identifier = "lesson" + id;
                        this.page.url = "http://myalin.ru/shri/#lessons/" + id;
                    }
                });
            });

        }
        catch (e) {
            console.log(e.message);
        }
    }
});

module.exports = DisqusView;

