Shri.Lesson = DS.Model.extend({
    name: DS.attr('string'),
    link: DS.attr('string')
});

Shri.Lesson.FIXTURES = [
    {
        id: '1',
        name: 'LessonName1',
        link: 'yandex.ru'
    },
    {
        id: '2',
        name: 'LessonName2',
        link: 'yandex.ru'
    },
    {
        id: '3',
        name: 'LessonName3',
        link: 'yandex.ru'
    }
];
