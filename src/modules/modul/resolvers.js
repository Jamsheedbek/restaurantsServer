const { Restaurants, Branches, Foods, Categories, Orders } = require('./model');

module.exports = {
    Query: {
        categories: async () => {
            return await Categories.findAll();
        },

        restaurantsForAdmin: async () => {
            return await Restaurants.findAll();
        },

        restaurantsForClient: async (_, { id }) => {
            return await Restaurants.findAll({
                where: {
                    categoryId: id,
                },
            });
        },

        branchesForAdmin: async () => {
            return await Branches.findAll();
        },

        branchesForClient: async (_, { id }) => {
            return await Branches.findAll({
                where: {
                    restaurantId: id,
                },
            });
        },

        foodsForAdmin: async () => {
            return await Foods.findAll();
        },

        foodsForClient: async (_, { id }) => {
            return await Foods.findAll({
                where: {
                    branchId: id,
                },
            });
        },

        orders: async () => {
            return await Orders.findAll();
        },
    },

    Mutation: {
        newCategory: async (_, { category }) => {
            return await Categories.create({ category });
        },

        newRestaurant: async (_, { name, categoryId }) => {
            return await Restaurants.create({ name, categoryId });
        },

        updateRestaurant: async (_, { name, id }) => {
            await Restaurants.update(
                { name },
                {
                    where: {
                        id: id,
                    },
                }
            );

            return 'Updated';
        },

        deleteRestaurant: async (_, { id }) => {
            await Restaurants.destroy({
                where: {
                    id: id,
                },
            });

            return 'Deleted';
        },

        newBranch: async (_, { name, restaurantId }) => {
            return await Branches.create({ name, restaurantId });
        },

        updateBranch: async (_, { name, id }) => {
            await Branches.update(
                { name },
                {
                    where: {
                        id: id,
                    },
                }
            );

            return 'Updated';
        },

        deleteBranch: async (_, { id }) => {
            await Branches.destroy({
                where: {
                    id: id,
                },
            });

            return 'Deleted';
        },

        newFood: async (_, { name, price, count = 0, branchId }) => {
            return await Foods.create({ name, price, count, branchId });
        },

        updateFood: async (_, { name, price, id }) => {
            await Foods.update(
                { name, price },
                {
                    where: {
                        id: id,
                    },
                }
            );

            return 'Updated';
        },

        deleteFood: async (_, { id }) => {
            await Foods.destroy({
                where: {
                    id: id,
                },
            });

            return 'Deleted';
        },

        newOrder: async (
            _,
            { food, count, allPrice, branchId, holder, phone }
        ) => {
            return await Foods.create({
                food,
                count,
                allPrice,
                branchId,
                holder,
                phone,
            });
            return 'Your order has been accepted';
        },
    },
};
