import { Router } from "express";
import {
    // readOneUser,
    // readUsers,
    // createUser,
    // updateUser,
    // destroyUser,
    create,
    read,
    readById,
    updateById,
    destroyById
} from "../../controllers/users.controller.js";
import isValidUser from "../../middlewares/isValidUser.mid.js"
const usersRouter = Router();

//fs
// usersRouter.get("/:uid", readOneUser);
// usersRouter.get("", readUsers);
// usersRouter.post("", isValidUser, createUser);
// usersRouter.put("/:uid", updateUser);
// usersRouter.delete("/:uid", destroyUser);

//mongo
usersRouter.get("/:uid", readById);
usersRouter.get("", read);
usersRouter.post("", isValidUser, create);
usersRouter.put("/:uid", updateById);
usersRouter.delete("/:uid", destroyById);

export default usersRouter;