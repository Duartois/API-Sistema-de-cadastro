import express from "express";
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import cors from 'cors'

// middlewares
import auth from './middlewares/auth.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)

app.listen(3000, () => console.log("Servidor Rodando"))


// UserName
//matheusdugoncalves

//Password
//5EviGTl01vlvEgWn
