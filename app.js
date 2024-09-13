import express from "express";

import "./src/database/index"

import homeRouter from "./src/routes/homeRoutes"
import produtoRoutes from "./src/routes/produtoRoutes"
import fornecedorRoutes from "./src/routes/fornecedorRoutes"

class App{
  constructor(){
    this.app = express();
    this.routes();
    this.middlewares();
  }

  routes(){
    this.app.use("/",homeRouter)
    this.app.use("/", produtoRoutes)
    this.app.use("/", fornecedorRoutes)
  }

  middlewares(){
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: true}));
  }
}

export default new App().app