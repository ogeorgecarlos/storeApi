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
      }
    },
    {
      sequelize,
      tableName: "Sale"
    }
  )
  }
}