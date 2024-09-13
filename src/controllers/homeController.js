class homeController{
  index(req,res){
    return res.json({home:"Você está na home"})
  }
}

export default new homeController()