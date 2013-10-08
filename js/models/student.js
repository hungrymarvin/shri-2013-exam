Shri.Student = DS.Model.extend({
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

Shri.Student.FIXTURES = [
    {
        id: '1',
        first_name: 'first_name',
        last_name: 'last_name',
        city: 'city',
        about: 'about',
        link_photo: 'link_photo',
        link_facebook: 'link_facebook',
        link_vk: 'link_vk',
        link_gihub: 'link_gihub',
        link_yaru: 'link_yaru'
    },
    {
        id: '2',
        first_name: 'first_name',
        last_name: 'last_name',
        city: 'city',
        about: 'about',
        link_photo: 'link_photo',
        link_facebook: 'link_facebook',
        link_vk: 'link_vk',
        link_gihub: 'link_gihub',
        link_yaru: 'link_yaru'
    },
    {
        id: '3',
        first_name: 'first_name',
        last_name: 'last_name',
        city: 'city',
        about: 'about',
        link_photo: 'link_photo',
        link_facebook: 'link_facebook',
        link_vk: 'link_vk',
        link_gihub: 'link_gihub',
        link_yaru: 'link_yaru'
    }
];

