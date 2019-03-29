const mongoose = require('mongoose');
const schema = mongoose.Schema;

const urlSchema = new schema({
  //TODO: create short object_id
  destination: {type: String, required: true},
  visited: Number
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at"}
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;