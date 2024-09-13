import Sequelize, {Model} from "sequelize"

export default class Fornecedor extends Model{
  static init(sequelize){
    super.init(
      {
        nome:{
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey:true
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