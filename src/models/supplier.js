import Sequelize, {Model,Op} from "sequelize"

export default class Supplier extends Model{
  static init(sequelize, product){
    super.init(
      {
        id:{
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },

        name:{
          type: Sequelize.STRING,
          allowNull: false,
          require: true,
          validate:{
            len:[[Op.gte]: 3],
            msg: "Is mandatory enter the supplier name"
          }
        },

        PrincipalPhoneNumber:{
          type: Sequelize.INTEGER,
          allowNull: false,
          require: true,
          validate:{
            is: {
            args: /(9[1236][0-9]) ?([0-9]{3}) ?([0-9]{3})/,
            msg: "The phone number is not Valid"
            },
            notNull:{
              args: true,
              msg: "The principal phone number must to be informed"
            }
          }
        },

        phoneNumber:{
          type: Sequelize.INTEGER,
          validate:{
            is: {
              args: /(9[1236][0-9]) ?([0-9]{3}) ?([0-9]{3})/,
              msg: "The phone number is not Valid"
            },
          }
        },

        email:{
          type: Sequelize.STRING,
          allowNull: false,
          require: true, //mas se  o allowNull já é false, o require não é implicitamente true?
          validate:{
            isEmail: true,
            msg: "Enter a correct email"
          }
        },
      },

      {
        sequelize,
        tableName: "Supplier",
        underscored: true,
        paranoid: true,
      },
    )
    return this
  }

  static associate(models){
    this.hasMany(models.Product);
  }
}