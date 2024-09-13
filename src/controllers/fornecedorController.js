class fornecedorController{
  index(req, res){
    return res.json({message: "controller fornecedores"})
  }
}

export default new fornecedorController()