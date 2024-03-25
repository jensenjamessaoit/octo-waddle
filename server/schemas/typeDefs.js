const typeDefs = `
    type User {
        _id: ID
        email: String;
        username: String
        password: String
        goals: [Goal]!
    }

    type Goal {
        _id: ID
        goal: String
        status: String
        todoList: [Task]!
    }

    type Task {
        _id: ID
        task: String
        status: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        goal(username: String): [Goal]
    }

    type Mutation {
        addGoal(goal: String!): Goal
    }
`;

module.exports = typeDefs;
