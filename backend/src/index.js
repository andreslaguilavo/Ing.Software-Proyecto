import express from 'express'
import 'dotenv/config'
import routerCancion from './rutas/cancion.js'
import routerCarritoCompras from './rutas/carritoCompras.js'
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/cancion', routerCancion)
app.use('/carrito-compras', routerCarritoCompras)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
