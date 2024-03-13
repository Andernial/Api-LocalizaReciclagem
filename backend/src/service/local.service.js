import { LocalEntity } from "../entities/LocalColeta.entities.js";


export class LocalService {
    async createLocalService(name, public_place, number, complement, neighborhood, city, state, zip_code) {
        try {
            await LocalEntity.sync()

            const newLocation = await LocalEntity.create({
                name, public_place, number, complement, neighborhood, city, state, zip_code
            })
           
            return newLocation

        } catch (error) {
            return error
        }
    }

    async showLocalByCityService(city) {
        try {
            await LocalEntity.sync()
            const cityExists = await LocalEntity.findAll({
                where: {
                    city
                }
            })


            if (!cityExists) {
                return 'não encontrada'
            }

            return cityExists
        } catch (error) {
            return error
        }
    }

    async showAllLocalsService() {
        try {
            await LocalEntity.sync()
            const locations = await LocalEntity.findAll()
            return locations
        } catch (error) {
            return error
        }
    }

    async updadeLocationItemsService(id, name, public_place, number, complement, neighborhood, city, state, zip_code) {
        try {
            await LocalEntity.sync()
            const localExists = await LocalEntity.findByPk(id)

            if (!localExists) {
                return 'não encontrada'
            }

            const params = {

                name: name !== undefined ? name : localExists.name,
                public_place: public_place !== undefined ? public_place : localExists.public_place,
                number: number !== undefined ? number : localExists.number,
                complement: complement !== undefined ? complement : localExists.complement,
                neighborhood: neighborhood !== undefined ? neighborhood : localExists.neighborhood,
                city: city !== undefined ? city : localExists.city,
                state: state !== undefined ? state : localExists.state,
                zip_code: zip_code !== undefined ? zip_code : localExists.zip_code
            }


            await LocalEntity.update(params, {
                where: {
                    id
                }
            })
            
            return await LocalEntity.findByPk(id)


        } catch (error) {
            return error
        }
    }
    async deleteLocationService(id){
        try {
            await LocalEntity.sync()
            const localExist = await LocalEntity.findByPk(id)

            if(!localExist){
                return 'não encontrada'
            }
            await LocalEntity.destroy({
                where:{
                    id
                }
            })

            return 'destroyed'
        } catch (error) {
            console.log(error)
            return error
        }
    }

}

