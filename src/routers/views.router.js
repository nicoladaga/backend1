import { Router } from "express";
import {
    indexView,
    productView,
    cartView,
    registerView,
    addProductView,
    loginView
} from "../controllers/views.controller.js";

const viewsRouter = Router();

viewsRouter.get("/", indexView);
viewsRouter.get("/product/:pid", productView);
viewsRouter.get("/register", registerView);
viewsRouter.get("/addProducts", addProductView)
viewsRouter.get("/users/login", loginView)
viewsRouter.get("/carts/users/:user_id", cartView);



export default viewsRouter;
