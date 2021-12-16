const {Pokemon} = require('../models');
const types = ['Electric', 'Water', 'Ground', 'Rock', 'Grass', 'Poison', 'Fighting', 'Dragon', 'Fire'];

module.exports.viewAll = async function(req, res) {
    let searchTypes = ['Any'];
    for (let i = 0; i<types.length; i++) {
        searchTypes.push(types[i]);
    }
    let cardTable;
    let searchType = req.query.elementType || 'Any';
    let searchRandom = req.query.random || false;

    if (searchType === 'Any') {
        cardTable = await Pokemon.findAll();
    } else {
        cardTable = await Pokemon.findAll( {
            where: {
                elementType: searchType
            }
        });
    }
    if (cardTable.length > 0 && searchRandom) {
        let randomIndex = getRandomInt(cardTable.length);
        cardTable = [cardTable[randomIndex]];
    }

    res.render('index', {cardTable, types:searchTypes, searchType, searchRandom});
};

module.exports.renderEditForm = async function(req, res) {
    const card = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {card})
};

module.exports.updateCard = async function(req, res) {
    await Pokemon.update(
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
            retreatCostImage: req.body.retreatCostImage, //image
            elementType: req.body.elementType //text
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
        retreatCostImage: "", //image
        elementType: "" //text
    };
    res.render('add', {card});
};

module.exports.addCard = async function(req, res) {
    await Pokemon.create(
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
            retreatCostImage: req.body.retreatCostImage, //image
            elementType: req.body.elementType //text
        });
    res.redirect('/');
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

