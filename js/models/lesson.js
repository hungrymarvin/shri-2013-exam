Shri.Lesson = DS.Model.extend({
    name: DS.attr('string'),
    link: DS.attr('string'),
    lector_id: DS.attr('number'),
    video_url: DS.attr('string'),
    slides_url: DS.attr('string')
});

Shri.Lesson.FIXTURES = [
    {
        id: '1',
        name: 'LessonName1',
        lector_id: 1,
        url: 'yandex.ru'
    },
    {
        id: '2',
        name: 'LessonName2',
        lector_id: 1,
        url: 'yandex.ru'
    },
    {
        id: '3',
        name: 'LessonName3',
        lector_id: 1,
        url: 'yandex.ru'
    }
];
