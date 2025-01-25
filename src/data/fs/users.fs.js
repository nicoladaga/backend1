import fs from "fs/promises";
import { faker } from "@faker-js/faker";

const path = "./src/data/fs/files/users.json"

class UsersManager {
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
            const newUser = {
                _id,
                ...data,
            };
            const dataOfFile = await this.readFile();
            dataOfFile.push(newUser);
            await this.writeFile(dataOfFile);
            return newUser;
        } catch (error) {
            throw error;
        }
    }
    async readAll(role) {
        try {
            let users = await this.readFile();
            if (role) {
                users = users.filter((user) => user.role === role);
            }
            return users;
        } catch (error) {
            throw error;
        }
    }
    async readOne(id) {
        try {
            const users = await this.readFile();
            const one = users.find((user) => user._id === id);
            return one;
        } catch (error) {
            throw error;
        }
    }
    async updateOne(id, newData) {
        try {
            const all = await this.readFile();
            const index = all.findIndex((user) => user._id === id);
            if (index === -1) {
                const error = new Error(`User with ID ${id} not found`);
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
            const index = all.findIndex((user) => user._id === id);
            if (index === -1) {
                const error = new Error(`User with ID ${id} not found`);
                error.statusCode = 404;
                throw error;
            }
            const [removedUser] = all.splice(index, 1);
            await this.writeFile(all);
            return removedUser;
        } catch (error) {
            throw error;
        }
    }

}

const usersManager = new UsersManager();
export default usersManager;