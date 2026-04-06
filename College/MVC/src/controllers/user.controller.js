import User from "../models/user.models.js";

const getUser = async (req, res) => {
    const userId = req.params.id;
    const data = await User.findById(userId);

    res.status(200).send({
      message: "Success",
      data,
    });
  };

const createUser = async (req, res) => {
    const userData = req.body;
    const data = await User.create(userData);

    res.status(201).send({
      message: "User created successfully",
      data,
    });
  };

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const updationData = req.body;

    const data = await User.findByIdAndUpdate(
      userId, updationData
    );

    res.status(200).send({
      message: "User updated successfully",
      data,
    });
};

const deleteUser = async (req, res) => {
    const userId = req.query.id;
    const data = await User.findByIdAndDelete(userId);

    res.status(200).json({
      message: "User deleted successfully",
      data,
    });
};

export { getUser, createUser, updateUser, deleteUser };