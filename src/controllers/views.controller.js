// import productsManager from "../data/fs/products.fs.js";
import productsManager from "../data/products.mongo.js";
import cartsManager from "../data/carts.mongo.js";

const indexView = async (req, res, next) => {
    try {
        const all = await productsManager.read();

        const processedProducts = all.map(product => ({
            ...product,
            _id: product._id.toString(),
        }));


        const data = {
            title: "Home",
            products: processedProducts,
        };
        return res.status(200).render("index", data);
    } catch (error) {
        next(error);
    }
};

const productView = async (req, res, next) => {
    try {

        const { pid } = req.params;
        // const one = await productsManager.readOne(pid);
        const one = await productsManager.readById(pid)
        const data = {
            title: "Product Detail",
            product: one,
        };
        return res.status(200).render("product", data);
    } catch (error) {
        next(error);
    }
};
const cartView = async (req, res, next) => {
    // const { user_id } = req.params
    const all = await cartsManager.totalToPay("67bc900f041a7f6b1d476d6f");

    // const processedCarts = all.map(cart => ({
    //     ...cart,
    //     _id: cart._id.toString(),
    // }));

    try {
        const data = {
            title: "Cart",
            cart: all
        };
        return res.status(200).render("cart", data);
    } catch (error) {
        next(error);
    }
};
const registerView = (req, res, next) => {
    try {
        const data = {
            title: "Real Register",
        };
        return res.status(200).render("realRegister", data);
    } catch (error) {
        next(error);
    }
};

const loginView = (req, res, next) => {
    try {
        const data = {
            title: "Login"
        }
        return res.status(200).render("login", data)
    } catch (error) {
        next(error)
    }
}

const addProductView = (req, res, next) => {
    try {
        const data = {
            title: "Real Product",
        };
        return res.status(200).render("realTimeProducts", data);
    } catch (error) {
        next(error);
    }
};

const profileView = (req, res, next) => {
    try {
        const data = {
            title: "Profile",
        };
        return res.status(200).render("profile", data);
    } catch (error) {
        next(error);
    }
};

export { indexView, productView, cartView, profileView, registerView, addProductView, loginView };
