import Sequelize from "sequelize";

import configDataBase from "../config/database"

import Product from "../models/Product"
import Supplier from '../models/supplier';

import configProductSupplier from "../config/associationsdb/Product_Supllier"


//modelo para criacao de novas instancias banco de dados.
class newConnection{
  constructor(configDataBase){
    this.sequelize = new Sequelize(configDataBase);
  }

  async testConnection(connection){
    try{
      await connection.authenticate()
      console.log("Sucesso na conexão")
    }catch{
      console.log("Erro na conexão")
    }
  }
}

//main connection
const connection = new newConnection(configDataBase);

//models to init
const models = [Supplier, Product]

//Initializing models
models.forEach(model=> model.init(connection.sequelize));

//relations
models.forEach(model => model.associate && model.associate(connection.sequelize.models));

//loggin models
connection.sequelize.sync({force: true});

//console.log(connection.sequelize.models)

export default connection.sequelize