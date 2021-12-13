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

module.exports.updateCard = async function(req, res) {
    await Card.update(
        {
            pokemonName: req.body.pokemonName, //text
            healthpoints: req.body.healthpoints, //text
            pokemonType: req.body.pokemonType, //image
            pokemonImage: req.body.pokemonImage, //image
            firstMoveImage: req.body.firstMoveImage, //image
            firstMoveName: req.body.firstMoveName, //text
            firstMoveAmount: req.body.firstMoveAmount, //number
            firstMoveDamage: req.body.firstMoveDamage, //number
            secondMoveImage: req.body.secondMoveImage, //image
            secondMoveName: req.body.secondMoveName, //text
            secondMoveAmount: req.body.secondMoveAmount, //number
            secondMoveDamage: req.body.secondMoveDamage, //number
            weaknessTypeImage: req.body.weaknessTypeImage, //image
            resistanceTypeImage: req.body.resistanceTypeImage, //image
            retreatCostAmount: req.body.retreatCostAmount, //number
            retreatCostImage: req.body.retreatCostImage //image
        },
                {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
};

module.exports.renderAddForm = function(req, res) {
    const card = {
        pokemonName: "", //text
        healthpoints: "", //text
        pokemonType: "", //image
        pokemonImage: "", //image
        firstMoveImage: "", //image
        firstMoveName: "", //text
        firstMoveAmount: 1, //number
        firstMoveDamage: 10, //number
        secondMoveImage: "", //image
        secondMoveName: "", //text
        secondMoveAmount: 1, //number
        secondMoveDamage: 10, //number
        weaknessTypeImage: "", //image
        resistanceTypeImage: "", //image
        retreatCostAmount: 1, //number
        retreatCostImage: "" //image
    };
    res.render('add', {card});
};

module.exports.addCard = async function(req, res) {
    await Card.create(
        {
            pokemonName: req.body.pokemonName, //text
            healthpoints: req.body.healthpoints, //text
            pokemonType: req.body.pokemonType, //image
            pokemonImage: req.body.pokemonImage, //image
            firstMoveImage: req.body.firstMoveImage, //image
            firstMoveName: req.body.firstMoveName, //text
            firstMoveAmount: req.body.firstMoveAmount, //number
            firstMoveDamage: req.body.firstMoveDamage, //number
            secondMoveImage: req.body.secondMoveImage, //image
            secondMoveName: req.body.secondMoveName, //text
            secondMoveAmount: req.body.secondMoveAmount, //number
            secondMoveDamage: req.body.secondMoveDamage, //number
            weaknessTypeImage: req.body.weaknessTypeImage, //image
            resistanceTypeImage: req.body.resistanceTypeImage, //image
            retreatCostAmount: req.body.retreatCostAmount, //number
            retreatCostImage: req.body.retreatCostImage //image
        });
    res.redirect('/');
};

