import { Router } from "express";
import {
    indexView,
    productView,
    cartView,
    profileView,
    registerView,
    addProductView
} from "../controllers/views.controller.js";

const viewsRouter = Router();

viewsRouter.get("/", indexView);
viewsRouter.get("/product/:pid", productView);
// viewsRouter.get("/cart", cartView);
viewsRouter.get("/register", registerView);
viewsRouter.get("/addProducts", addProductView)
// viewsRouter.get("/profile/:uid", profileView);

export default viewsRouter;
