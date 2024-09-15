import Sequelize, {Model} from "sequelize";

export default class Produto extends Model{
  static init(sequelize){
    super.init(
      {
        id:{
          type: Sequelize.INTEGER,
          primaryKey: false,
          autoIncrement: true,
          allowNull: false
        },
        ean:{
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        price:{
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        description:{
          type: Sequelize.STRING,
          allowNull: false,
          size:{
            type: Sequelize.STRING,
            allowNull: false
          },
          color:{
            type: Sequelize.STRING,
            allowNull: false
          }
        }
      },
      {
        sequelize,
        tableName: "Produto"
      },
    );
    //return this;
  }
}