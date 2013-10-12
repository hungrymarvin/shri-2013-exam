Ember.Handlebars.helper('formatDate', function(date) {
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    date = new Date(date);
    var result = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " года";
    return result;
});

