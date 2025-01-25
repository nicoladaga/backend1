const isValidUser = (req, res, next) => {
    try {
        const { name, lastName, password } = req.body;
        if (!name) {
            const error = new Error("name is required!");
            error.statusCode = 400;
            throw error;
        }
        if (!lastName) {
            const error = new Error("lastName is required!");
            error.statusCode = 400;
            throw error;
        }
        if (!password) {
            const error = new Error("password is required!");
            error.statusCode = 400;
            throw error;
        }
        next();
    } catch (error) {
        next(error);
    }
};

export default isValidUser;