const hbs = require('hbs')

hbs.registerHelper('list', (items, options) => {

    var out = "";
    for (var i = 0, l = items.length; i < l; i++) {
        out = out + "<li>" + options.fn(items[i]) + "</li>";
    }
    return out;
})