import Sequelize, {Model} from "sequelize"

export default class Categoria extends Model{
  static init(sequelize){
    super.init(
      {
        nome:{
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true
        }
      },
      {
        sequelize,
        tableName: "Categoria"
      }
    )
  }
}