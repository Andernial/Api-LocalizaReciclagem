import { Router } from "express"
import { LocalRouter } from "./localColeta.route.js"

const routers = Router()



routers.use('/city', LocalRouter)


export{ routers }