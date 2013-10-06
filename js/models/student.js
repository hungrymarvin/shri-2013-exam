Shri.Student = DS.Model.extend({
    name: DS.attr('string'),
    lastName: DS.attr('string')
});

Shri.Student.FIXTURES = [
    {
        id: '1',
        name: 'Name1',
        lastName: 'LastName1'
    },
    {
        id: '2',
        name: 'Name2',
        lastName: 'LastName2'
    },
    {
        id: '3',
        name: 'Name3',
        lastName: 'LastName2'
    }
];
