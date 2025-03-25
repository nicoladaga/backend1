import cartsManager from "../data/carts.mongo.js";

const addProductToCart = async (req, res, next) => {
    try {
        const { product_id, user_id, quantity } = req.body;
        const one = await cartsManager.addProductToCart(
            product_id,
            user_id,
            quantity
        );
        res.status(201).json({
            method: req.method,
            url: req.url,
            response: one,
        });
    } catch (error) {
        next(error);
    }
};
const readProductsFromUser = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        const all = await cartsManager.readProductsFromUser(user_id);
        if (all.length > 0) {
            return res.status(200).json({
                method: req.method,
                url: req.url,
                response: all,
            });
        }
        const error = new Error("Not Found!");
        error.statusCode = 404;
        throw error;
    } catch (error) {
        next(error);
    }
};
const updateQuantity = async (req, res, next) => {
    try {
        const { cart_id } = req.params;
        const { quantity } = req.body;
        const one = await cartsManager.updateQuantity(cart_id, quantity);
        if (one) {
            return res.status(200).json({
                method: req.method,
                url: req.url,
                response: one,
            });
        }
        const error = new Error("Not Found!");
        error.statusCode = 404;
        throw error;
    } catch (error) {
        next(error);
    }
};
const removeProductFromCart = async (req, res, next) => {
    try {
        const { cart_id } = req.params;
        const one = await cartsManager.removeProductFromCart(cart_id);
        if (one) {
            return res.status(200).json({
                method: req.method,
                url: req.url,
                response: one,
            });
        }
        const error = new Error("Not Found!");
        error.statusCode = 404;
        throw error;
    } catch (error) {
        next(error);
    }
};

const totalToPay = async (req, res, next) => {

    try {
        const { uid } = req.params
        const total = await cartsManager.totalToPay(uid)
        return res.status(200).json({
            method: req.method,
            url: req.url,
            response: total
        })
    } catch (error) {
        next(error)
    }
}

export {
    addProductToCart,
    readProductsFromUser,
    updateQuantity,
    removeProductFromCart,
    totalToPay
};
