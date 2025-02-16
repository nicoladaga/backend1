import { socketServer } from "../../index.js";
import usersManager from "../data/fs/users.fs.js";
import productsManager from "../data/fs/products.fs.js";

async function socketHelper(socket) {
    console.log("Cliente conectado SOCKET ID: " + socket.id);

    const users = await usersManager.readAll();
    const products = await productsManager.readAll();

    /* socket emite SOLO al socket id */
    socket.emit("users", users);
    socket.emit("products", products);

    socket.on("new user", async (data) => {
        await usersManager.create(data);
        const users = await usersManager.readAll();
        /* socketServer emite a TODOS los sockets */
        socketServer.emit("users", users);
    });

    socket.on("new product", async (data) => {
        await productsManager.create(data);
        const products = await productsManager.readAll();
        /* socketServer emite a TODOS los sockets */
        socketServer.emit("products", products);
    });
    socket.on("delete product", async (productId) => {
        await productsManager.destroyOne(productId);
        const products = await productsManager.readAll();
        socketServer.emit("products", products);
    });

}

export default socketHelper;
