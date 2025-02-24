import { Router } from "express";
import {
    create,
    read,
    readById,
    updateById,
    destroyById
} from "../../controllers/products.controller.js";
import isValidProduct from "../../middlewares/isValidProduct.mid.js";

const productsRouter = Router();
//fs
// productsRouter.get("/:pid", readOneProduct);
// productsRouter.get("", readProducts);
// productsRouter.post("", isValidProduct, createProduct);
// productsRouter.put("/:pid", updateProduct);
// productsRouter.delete("/:pid", destroyProduct);

//mongo
productsRouter.get("", read);
productsRouter.post("", isValidProduct, create);
productsRouter.get("/:pid", readById);
productsRouter.put("/:pid", updateById);
productsRouter.delete("/:pid", destroyById);
export default productsRouter;