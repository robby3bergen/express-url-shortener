const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    username: String,
    password: String
},{
    timestamps: { createdAt: "created_at", updatedAt: "updated_at"}
});

const User = mongoose.model("User", userSchema);

module.exports = User;