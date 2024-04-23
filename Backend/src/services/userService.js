const userModel = require("../models/user");

const createUser = async (user) => {
    try {
        const newUser = await userModel.create(user);
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
};

const findUsers = async () => {
    try {
        return await userModel.find();
    } catch (error) {
        throw new Error(error);
    }
};

const findUserById = async (id) => {
    try {
        return await userModel.findById(id);
    } catch (error) {
        throw new Error(error);
    }
};

const findUserByEmail = async (email) => {
    try {
        return await userModel.findOne({ email });
    } catch (error) {
        throw new Error(error);
    }
};

const updateUser = async (id, info) => {
    try {
        return await userModel.findByIdAndUpdate(id, info);
    } catch (error) {
        throw new Error(error);
    }
};

const suspendUser = async (id) => {
    try {
        return await userModel.findByIdAndUpdate(id, { suspended: true });
    } catch (error) {
        throw new Error(error);
    }
};

const unsuspendUser = async (id) => {
    try {
        return await userModel.findByIdAndUpdate(id, { suspended: false });
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    createUser,
    findUsers,
    findUserById,
    findUserByEmail,
    updateUser,
    suspendUser,
    unsuspendUser,
};