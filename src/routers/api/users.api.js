import { Router } from "express";
import {
    readOneUser,
    readUsers,
    createUser,
    updateUser,
    destroyUser,
} from "../../controllers/users.controller.js";
import isValidUser from "../../middlewares/isValidUser.mid.js"
const usersRouter = Router();

usersRouter.get("/:uid", readOneUser);
usersRouter.get("", readUsers);
usersRouter.post("", isValidUser, createUser);
usersRouter.put("/:uid", updateUser);
usersRouter.delete("/:uid", destroyUser);

export default usersRouter;