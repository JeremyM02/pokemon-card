const {Pokemon} = require('../models');
module.exports.viewAll = async function(req, res) {
    const cards = await Pokemon.findAll();
    res.render('index', {cards});
};