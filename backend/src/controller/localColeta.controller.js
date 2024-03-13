import { LocalService } from "../service/local.service.js"
import { ERROS, SUCESS } from "../shared/messages.js"

const instanceServiceLocal = new LocalService();

const createLocal = async (req, res) => {

    const { name, public_place, number, complement, neighborhood, city, state, zip_code } = req.body

    const newLocal = await instanceServiceLocal.createLocalService(name, public_place, number, complement, neighborhood, city, state, zip_code)

    if (newLocal.name === 'SequelizeValidationError') {
        return res.status(400).json({ error: `erro ${ERROS.MISSING_DATA}` })
    }

    if (newLocal.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ error: `local ${ERROS.ALREADY_EXISTS}` })
    }

    res
        .status(201)
        .json({ message: `local ${SUCESS.CREATED}`, local: newLocal })



}

const showLocalByCity = async (req, res) => {

    const { city } = req.query

    const local = await instanceServiceLocal.showLocalByCityService(city)


    if(local === 'não encontrada'){
        return res.json({ message: `local ${ERROS.NOT_FOUND}`})
    }

   

    res
        .status(201)
        .json({ local })



}

const showAlllocalColeta = async (req, res) => {

        const locations = await instanceServiceLocal.showAllLocalsService()

        if(!locations.length){
            return res.json({ message: `locais ${ERROS.NOT_FOUND} + s`})
        }
        res
            .status(201)
            .json({ locations })

  
}

const updateLocalsItems = async (req,res) =>{
    const { id } = req.params
    const { name, public_place, number, complement, neighborhood, city, state, zip_code } = req.query
    const update = await instanceServiceLocal.updadeLocationItemsService(id, name, public_place, number, complement, neighborhood, city, state, zip_code)

    if(update === 'não encontrada'){
        return res.json({ message: `local ${ERROS.NOT_FOUND}`})
    }

    if (update.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ error: `dados ${ERROS.ALREADY_EXISTS}` })
    }

    res
    .status(201)
    .json({ update })


}

const deleteLocal= async (req,res) => {
    const { id } = req.params
    const deletedLocal = await instanceServiceLocal.deleteLocationService(id)

    if(deletedLocal === 'não encontrada'){
        return res.status(404).json({ message: `local ${ERROS.NOT_FOUND}`})
    }
    res
    .status(201)
    .json({ message: `local ${SUCESS.DELETED}` })
}





export { createLocal, showAlllocalColeta, showLocalByCity, updateLocalsItems, deleteLocal }