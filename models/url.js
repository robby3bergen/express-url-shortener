const mongoose = require('mongoose');
const schema = mongoose.Schema;

const shortPathSchema = new schema({
    shortPath: {type: String, required: true, unique: true},
    destinationUrl: {type: String, required: true},
    visited: int
},{
    timestamps: { createdAt: "created_at", updatedAt: "updated_at"}
});

const ShortPath = mongoose.model("ShortPath", shortPathSchema);

module.exports = ShortPath;