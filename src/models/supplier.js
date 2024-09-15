import Sequelize, {Model} from "sequelize"

export default class Fornecedor extends Model{
  static init(sequelize){
    super.init(
      {
        id:{
          type: Sequelize.INTEGER,
          unique: true,
          autoIncrement: true,
          require: true
        },
        nome:{
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey:true,
          require: true,
        },
        phone:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        email:{
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: "Categoria"
      }

    )
  }
}