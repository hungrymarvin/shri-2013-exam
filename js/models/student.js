var Student = DS.Model.extend({
    first_name: DS.attr('string'),
    last_name: DS.attr('string'),
    city: DS.attr('string'),
    about: DS.attr('string'),
    link_photo: DS.attr('string'),
    link_facebook: DS.attr('string'),
    link_vk: DS.attr('string'),
    link_gihub: DS.attr('string'),
    link_yaru: DS.attr('string')
});

module.exports = Student;

