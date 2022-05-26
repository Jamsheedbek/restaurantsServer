const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    'postgres://cqsxwkvc:9i6ohxAwZ4oh1y1NDBf8sWgMUbSW_Ipy@jelani.db.elephantsql.com/cqsxwkvc'
);

const Categories = sequelize.define('categories', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    category: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
    },
});

const Restaurants = sequelize.define('restaurants', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        validate: {
            min: 4,
        },
    },
});

const Branches = sequelize.define('branches', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
    },
});

const Foods = sequelize.define('foods', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});

const Orders = sequelize.define('buyurtmalar', {
    food: {
        type: DataTypes.STRING(64),
        allowNull: false,
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    allPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    branchId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    holder: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Categories.hasMany(Restaurants);
Restaurants.belongsTo(Categories);

Restaurants.hasMany(Branches, { onDelete: 'cascade' });
Branches.belongsTo(Restaurants);

Branches.hasMany(Foods, { onDelete: 'cascade' });
Foods.belongsTo(Branches);

module.exports = {
    Categories,
    Restaurants,
    Branches,
    Foods,
    Orders,
    sequelize,
};
