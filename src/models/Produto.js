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
            isInt: true,
            msg: "The barcode must to be a number"
          },
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false,
          validate:{
            len:[[Op.gte]:3],
            msg:"The name size must be at least 3 characters"
          }
        },
        price:{
          type: Sequelize.DECIMAL(2),
          allowNull: false,
          validate:{
            isDecimal: true,
            is: [[Op.gte]: 0],
            msg: "The price must be a Decimal value and greater than zero"
          }
        },
        description:{
          type: Sequelize.TEXT,
          allowNull: false,
          validate:{
            notNull: true,
            msg: "All products must to have a description."
          }
        },
        /*
        Incluir atributos que pdem ou nao existir para o produto, por exemplo
        se o produto tem ou nao uma cor a ser especificada
        se o produto tem ou nao dimensoes a serem especificadas
        se o produto tem ou nao classificação energetica a ser especificada
        ... etc
        */
      },
      {
        sequelize,
        tableName: "Produto",
        paranoid: true,
        underscored: true,
      },
    );
    //return this;
  }
}