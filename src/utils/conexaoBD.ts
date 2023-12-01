import knex from "knex";

// let portaBanco: unknown = process.env.DB_PORT;
//Resolver problema com a porta do knex

const objKnex = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: 5432,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD
    }
})

module.exports = objKnex;