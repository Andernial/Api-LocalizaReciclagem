import { Router } from "express"
import { createLocal, deleteLocal, showAlllocalColeta, showLocalByCity, updateLocalsItems } from "../controller/localColeta.controller.js";
const LocalRouter = Router()


LocalRouter.post('/add-location', createLocal)

LocalRouter.get('/by-city',showLocalByCity)

LocalRouter.get('/all-location', showAlllocalColeta)

LocalRouter.put('/update-location/:id', updateLocalsItems)

LocalRouter.delete('/delete-location/:id',deleteLocal )






export { LocalRouter }