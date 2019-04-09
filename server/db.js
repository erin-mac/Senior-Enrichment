const Sequelize = require('sequelize');
const db = new Sequelize(
    process.env.DATABASE_URL ||
    'postgres://localhost:5432/acme-product-managers', {
        logging: false
    }
);

const Manager = db.define('manager', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Product.belongsTo(Manager)

module.exports = {
    db,
    Manager,
    Product
}