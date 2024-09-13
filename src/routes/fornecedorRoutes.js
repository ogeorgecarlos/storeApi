import {Router} from "express";

import fornecedorController from "../controllers/fornecedorController"

const router = Router()

router.get("/", fornecedorController.index)
//get show
//post store
//put update
//delete

export default router