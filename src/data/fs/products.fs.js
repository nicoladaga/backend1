import fs from "fs/promises"
import { faker } from "@faker-js/faker";

const path = "./src/data/fs/files/products.json"

class ProductsManager {
    constructor() {
        this.path = path;
        this.init();
    }
    async init() {
        try {
            await fs.access(this.path);
        } catch (error) {
            await fs.writeFile(this.path, JSON.stringify([]));
        }
    }
    async readFile() {
        try {
            let data = await fs.readFile(this.path);
            data = JSON.parse(data);
            return data;
        } catch (error) {
            throw error;
        }
    }
    async writeFile(data) {
        try {
            data = JSON.stringify(data, null, 2);
            await fs.writeFile(this.path, data);
        } catch (error) {
            throw error;
        }
    }

    async create(data) {
        try {
            const _id = faker.database.mongodbObjectId();
            const newProduct = {
                _id,
                ...data,
            };
            const dataOfFile = await this.readFile();
            dataOfFile.push(newProduct);
            await this.writeFile(dataOfFile);
            return newProduct;
        } catch (error) {
            throw error;
        }
    }

    async readAll(category) {
        try {
            let products = await this.readFile();
            if (category) {
                products = products.filter((product) => product.category === category);
            }
            return products;
        } catch (error) {
            throw error;
        }
    }

    async readOne(id) {
        try {
            const products = await this.readFile();
            const one = products.find((product) => product._id === id);
            return one;
        } catch (error) {
            throw error;
        }
    }
    async updateOne(id, newData) {
        try {
            const all = await this.readFile();
            const index = all.findIndex((product) => product._id === id);
            if (index === -1) {
                const error = new Error(`Product with ID ${id} not found`);
                error.statusCode = 404;
                throw error;
            }
            all[index] = { ...all[index], ...newData };
            await this.writeFile(all);
            return all[index];
        } catch (error) {
            throw error;
        }
    }

    async destroyOne(id) {
        try {
            const all = await this.readFile();
            const index = all.findIndex((product) => product._id === id);
            if (index === -1) {
                const error = new Error(`Product with ID ${id} not found`);
                error.statusCode = 404;
                throw error;
            }
            const [removedProduct] = all.splice(index, 1);
            await this.writeFile(all);
            return removedProduct;
        } catch (error) {
            throw error;
        }
    }

}

const productsManager = new ProductsManager();
export default productsManager;