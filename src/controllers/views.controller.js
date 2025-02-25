// import productsManager from "../data/fs/products.fs.js";
import productsManager from "../data/products.mongo.js";

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
const cartView = (req, res, next) => {
    try {
        const data = {
            title: "Cart",
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

export { indexView, productView, cartView, profileView, registerView, addProductView };
