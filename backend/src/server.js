import  express  from "express";
import cors from 'cors';
import { verifyConnection } from "./database/connection.js";
import { routers } from "./routes/index.routes.js";
import { corsOptions } from "./middlewares/corsOptions.js";
const app = express();
const port = 3333



app.use(cors(corsOptions))
app.use(express.json())
app.use(routers)


app.listen(port, ()=>{
    verifyConnection()
    console.log(`Servidor ligado na porta ${port}`)
})