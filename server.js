const express = require ('express')
const fs = require ('fs')
const Contenedor = require ('./contenedor.js')

const app = express();
let c1=new Contenedor();
// let datos = new Contenedor(JSON.parse(producto));

const PORT = process.env.PORT || 8080;

app.get("/productos", (req, res)=>{

    const readProduct = async () => {
        try {
          let x=await c1.getAll()
            res.send(x)
         
        } catch (err) {
          throw err;
        }
      };
      
        readProduct();
})
app.get("/productoRandom/:id",async (req, res)=>{

let i=Number(req.params.id)  
let x = await c1.getById(i) 
res.send(x)

 })

app.listen(PORT, ()=>{
    console.log("Server on port 8080")
})