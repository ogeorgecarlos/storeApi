import Sequelize, {Model, Op} from "sequelize";

export default class Produto extends Model{
  static init(sequelize){
    super.init(
      {
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          comment: "Product id to the Store"
        },
        ean:{
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          comment: "Barcode product",
          validate:{
            //args:
            //msg:
          },
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false,
          validate:{
            len:[[Op.gte]:3]
          }
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