import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Reciclagem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})


export async function verifyConnection() {
    try {
        await sequelize.authenticate()
        console.log('conexão bem sucedida !')

    } catch (error) {
        console.log('Erro', error)

    }
}

export {sequelize}