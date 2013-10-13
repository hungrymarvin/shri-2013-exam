var DisqusView = Ember.View.extend({
    tagName: 'div',
    elementId: 'disqus_thread',

    didInsertElement: function(){
        var arr = window.location.hash.split('/');
        var id = arr[arr.length-1];
        try{
        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.identifier = "lesson"+id;
                this.page.url = "http://myalin.ru/shri/#!"+id;
            }
        });
        }
        catch (e)
        {
            console.log(e.message);
        }
    }
});

module.exports = DisqusView;

