export default {

  product:{
    through: {
    model: "Produto_Supplier",
    paranoid: true,
    },

    foreignKey:{
    name: "Product_id_test",
    allowNull: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    },

    otherKey:{
    name:"Supplier_id_test",
    allowNull: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    },
  },

  supplier:{
    through: {
    model: "Produto_Supplier",
    paranoid: true,
    },

    foreignKey:{
    name: "Supplier_id_test",
    allowNull: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    },

    otherKey:{
    name:"Product_id_test",
    allowNull: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    },
  }
  
}