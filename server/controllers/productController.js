const Product = require('../../models/Product')
const Sequelize = require('sequelize')


exports.get = (req, res) => {
    console.log('start finding')
    Product.findAll()
        .then(products => {
            console.log('these are the products' + products)
            res.send(products)
        })
        .catch(err => console.log(err))

};
exports.post = (req, res) => {
    let { id, name, description, category, image, price } = req.body;
    let errors = [];

    if (!id) {
        errors.push({ text: 'please add an id' })
    }
    if (!name) {
        errors.push({ text: 'please add a name' })
    }
    if (!category) {
        errors.push({ text: 'please add a category' })
    }
    if (!description) {
        errors.push({ text: 'please add a description' })
    }
    if (!image) {
        errors.push({ text: 'please add an image' })
    }
    if (!price) {
        errors.push({ text: 'please add a price' })
    }

};


exports.postOne = (req, res) => {

};


exports.getOne = (req, res) => {
    const { id } = req.params
    Product.findAll({ where: { id } })
        .then(product => {
            console.log('these are the products' + product)
            res.send(product)
        })
        .catch(err => console.log(err))

};
