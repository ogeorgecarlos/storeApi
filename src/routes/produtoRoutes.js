import {Router} from "express";

import produtoController from "../controllers/produtosController"

const router = Router()

router.get("/", produtoController.index)
//get show
//post store
//put update
//delete

export default router