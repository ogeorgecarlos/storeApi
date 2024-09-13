import express from "express";

import "./src/database/index"

import homeRouter from "./src/routes/homeRoutes"
import produtoRoutes from "./src/routes/produtoRoutes"
import fornecedorRoutes from "./src/routes/fornecedorRoutes"
import categoryRoutes from './src/routes/categoryRoutes';

class App{
  constructor(){
    this.app = express();
    this.routes();
    this.middlewares();
  }

  routes(){
    this.app.use("/home",homeRouter)
    this.app.use("/produtos", produtoRoutes)
    this.app.use("/fornecedor", fornecedorRoutes)
    this.app.use("/category", categoryRoutes)
  }

  middlewares(){
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: true}));
  }
}

export default new App().app