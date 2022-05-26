const { gql } = require('apollo-server-express');

module.exports = gql`
    scalar Date

    type Categories {
        id: ID!
        category: String!
    }

    type Restaurants {
        id: ID!
        name: String!
        categoryId: ID!
        branches: [Branches!]!
        createdAt: Date!
        updatedAt: Date!
    }

    type Branches {
        id: ID!
        name: String!
        restaurantId: ID!
        foods: [Foods!]!
        createdAt: Date!
        updatedAt: Date!
    }

    type Foods {
        id: ID!
        name: String!
        branchId: ID!
        price: Int!
        createdAt: Date!
        updatedAt: Date!
    }

    type Orders {
        id: ID!
        food: String!
        count: Int!
        allPrice: Int!
        branchId: ID!
        holder: String!
        phone: String!
    }

    type Query {
        categories: [Categories!]!
        restaurantsForAdmin: [Restaurants!]!
        restaurantsForClient(id: ID!): [Restaurants!]!
        branchesForAdmin: [Branches!]!
        branchesForClient(id: ID!): [Branches!]!
        foodsForAdmin: [Foods!]!
        foodsForClient(id: ID!): [Foods!]!
        orders: [Orders!]!
    }

    type Mutation {
        newCategory(category: String!): Categories
        newRestaurant(name: String!, categoryId: ID!): Restaurants!
        updateRestaurant(name: String!, id: ID!): String!
        deleteRestaurant(id: ID!): String!
        newBranch(name: String!, restaurantId: ID!): Branches!
        updateBranch(name: String!, id: ID!): String!
        deleteBranch(id: ID!): String!
        newFood(name: String!, price: Int!, branchId: ID!): Foods!
        updateFood(name: String!, price: Int!, id: ID!): String!
        deleteFood(id: ID!): String!
        newOrder(
            food: String!
            count: Int!
            allPrice: Int!
            branchId: ID!
            holder: String!
            phone: String!
        ): Orders!
    }
`;
