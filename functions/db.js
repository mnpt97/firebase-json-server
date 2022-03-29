var countriesRoute = require('../db/min_countries.json')
var germanCitiesRoute = require('../db/german_cities.json')

module.exports = function() {
    return {
        countries_min : countriesRoute,
        german_cities : germanCitiesRoute
    // and so on
    }
}