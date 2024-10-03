import Sequelize, {Model, Op} from "sequelize";

export default class Product extends Model{
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

        isProductOrServices:{
          type: Sequelize.VIRTUAL,
          allowNull: false,
          validate:{
            isIn: ["product", "services"],
            msg: "Its mandatory to awnser this question."
          },
          comment:"A mandatory field to especify is a product or a service."
        },

        hasSize: {
          type: Sequelize.VIRTUAL,
          allowNull: false,
          validate:{
            isIn: ["yes", "no"],
            msg: "Its mandatory to awnser this question."
          }
        },

        hasColor: {
          type: Sequelize.VIRTUAL,
          allowNull: false,
          validate:{
            isIn: ["yes", "no"],
            msg: "Its mandatory to awnser this question."
          }
        },

        ean:{
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          validate:{
            isInt: true,
            msg: "The barcode must to be a number"
          },
          comment: "Barcode product",
        },

        name:{
          type: Sequelize.STRING,
          allowNull: false,
          validate:{
            len:[[Op.gte]:3],
            msg:"The name size must be at least 3 characters"
          },
          comment: "The product name"
        },

        price:{
          type: Sequelize.DECIMAL(2),
          allowNull: false,
          validate:{
            isDecimal: true,
            is: [[Op.gte]: 0],
            msg: "The price must be a Decimal value and greater than zero"
          },
          comment: "product price"
        },

        description:{
          type: Sequelize.TEXT,
          allowNull: false,
          validate:{
            notNull: true,
            msg: "All products must to have a description."
          },
          comment: "A text with the product description"
        },

        stock:{
          type: Sequelize.INTEGER,
          allowNull: false,
          validate:{
            notNull: true,
            msg: "Its mandatory to enter with the quantity"
          },
          comment: "Initial quantity of the product"
        },

        height: {
          type: Sequelize.DECIMAL(2),
          allowNull: true,
          comment: "Height value in kg"
        },

        whidth:{
          type: Sequelize.DECIMAL(2),
          allowNull: true,
          comment: "Width value in kg"
        },

        Wheight: {
          type: Sequelize.DECIMAL(3),
          allowNull: true,
          comment: "The product wheight in Kg."
        },
      },

      {
        sequelize,
        tableName: "Product",
        paranoid: true,
        underscored: true,
      },
    );

    return this;

  }

  static associate(models){
    this.belongsTo(models.Supplier)
  }
}