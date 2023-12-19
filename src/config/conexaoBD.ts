import knex from "knex";

// let portaBanco: unknown = process.env.DB_PORT;
//Resolver problema com a porta do knex
// Reconfigurar variaveis de ambiente
export const objKnex = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        port: 5432,
        database: 'mercadots',
        password: '123456'
    }
})

