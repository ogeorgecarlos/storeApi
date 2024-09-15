import {Model, DataTypes} from sequelize;

export default class Sale extends Model{
  static init(sequelize){
    super.init(
    {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      products:{
        type: DataTypes.ARRAY,
        allowNull: false,
        require: true
      },
      saleType:{
        type: DataType.STRING,
        allowNull: false,
        require: true,
        Comment: "aceppt two values `NV` and `VR`",
        //validate
      },
      paymentWay:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        comment: "Must enter with payments way",
        //validate
      },

      //descontos? por produto?
    },
    {
      sequelize,
      tableName: "Sale"
    }
  )
  }
}