var Lesson = DS.Model.extend({
    name: DS.attr('string'),
    link: DS.attr('string'),
    lector_id: DS.belongsTo('lector'),
    video_url: DS.attr('string'),
    slides_url: DS.attr('string'),
    date : DS.attr('string')

});

module.exports = Lesson;

