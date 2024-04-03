const mongoose = require("mongoose");

const testsSchema = new mongoose.Schema(
  {
    
  },
);

const testsModel = mongoose.model("tests", testsSchema);
module.exports = testsModel;
