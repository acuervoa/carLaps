const hbs = require('hbs');

hbs.registerHelper('table', (collection) => {

    console.log(JSON.parse(collection))

});