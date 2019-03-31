const mongoose = require('mongoose');
const schema = mongoose.Schema;
const shortid = require('shortid');

const urlSchema = new schema({
  _id: {
    type: String,
    default: shortid.generate
   },
  destination: {type: String, required: true},
  visited: Number
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at"}
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;