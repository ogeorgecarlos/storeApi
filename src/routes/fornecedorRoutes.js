import {Router} from "express";

import fornecedorController from "../controllers/fornecedorController"

const router = Router()

router.get("/fornecedores", fornecedorController.index)

export default router