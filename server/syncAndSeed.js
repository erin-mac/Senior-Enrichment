const { db, Manager, Product } = require('./db')
const Sequelize = require('sequelize')

const syncAndSeed = () => {
    return db.sync({ force: true })
        .then(() => {
            return Promise.all([
                Manager.create({ name: 'Moe' }),
                Manager.create({ name: 'Larry' }),
                Manager.create({ name: 'Curly' }),
                Product.create({ name: 'bar', managerId: 1 }),
                Product.create({ name: 'bazz' }),
                Product.create({ name: 'foo', managerId: 2 })
            ]);
        });
};

module.exports = syncAndSeed