import Sequelize, {Model} from "sequelize"

export default class Categoria extends Model{
  static init(sequelize){
    super.init(
      {
        id:{
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false
        },
        nome:{
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true
        },
      },
      {
        sequelize,
        tableName: "Categoria"
      }
    )
  }
}