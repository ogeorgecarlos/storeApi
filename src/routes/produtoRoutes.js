import {Router} from "express";

import produtoController from "../controllers/produtosController"

const router = Router()

router.get("/all", produtoController.index)

export default router