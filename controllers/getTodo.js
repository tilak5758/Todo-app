const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    // fetch all todo items from database
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Todo List fetched successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server error",
    });
  }
};

exports.getTodoId = async (req, res) => {
  try {
    //extract todo item basis on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    //data forgiven id not found
    if (!todo) {
      return res.status(200).json({
        success: false,
        message: "No Data found with Given Id",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data successfully fetched`,
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
