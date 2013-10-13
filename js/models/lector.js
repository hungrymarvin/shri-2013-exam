var Lector = DS.Model.extend({
    yatech: DS.attr('string'),
    name: DS.attr('string'),
    about: DS.attr('string'),
    photo_url: DS.attr('string'),
    all_lectures: DS.attr()

});

module.exports = Lector;

