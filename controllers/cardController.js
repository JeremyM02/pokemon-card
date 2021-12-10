const {Pokemon} = require('../models');


module.exports.viewAll = async function(req, res) {
    const cards = await Pokemon.findAll();
    res.render('index', {cards});
};

module.exports.renderEditForm = async function(req, res) {
    const card = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {card})
};

