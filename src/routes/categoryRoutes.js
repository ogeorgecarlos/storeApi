import {Router} from "express";

import categoryController from "../controllers/categoryController"

const router = new Router()

router.get("/", categoryController.index)

export default router