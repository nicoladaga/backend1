import usersManager from "../data/fs/users.fs.js";

const readOneUser = async (req, res, next) => {
    try {
        const { pid } = req.params;
        const one = await usersManager.readOne(pid);
        if (one) {
            return res.status(200).json({ response: one });
        }
        const error = new Error("Not found");
        error.statusCode = 404;
        throw error;
    } catch (error) {
        next(error);
    }
};
const readUsers = async (req, res, next) => {
    try {
        const { role } = req.query;
        const all = await usersManager.readAll(role);
        if (all.length > 0) {
            return res.status(200).json({ response: all });
        }
        const error = new Error("Not found");
        error.statusCode = 404;
        throw error;
    } catch (error) {
        next(error);
    }
};
const createUser = async (req, res, next) => {
    try {
        const data = req.body;
        const one = await usersManager.create(data);
        return res.status(201).json({ response: one });
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { uid } = req.params;
        const data = req.body;
        const one = await usersManager.updateOne(uid, data);
        return res.status(200).json({ response: one });
    } catch (error) {
        next(error);
    }
};
const destroyUser = async (req, res, next) => {
    try {
        const { uid } = req.params;
        const one = await usersManager.destroyOne(uid);
        return res.status(200).json({ response: one });
    } catch (error) {
        next(error);
    }
};

export {
    readOneUser,
    readUsers,
    createUser,
    updateUser,
    destroyUser,
}