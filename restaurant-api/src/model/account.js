import mongoose from 'mongoose';
const Schema = mongoose.Schema({
    email: String,
    password: String
});

module.exports = mongoose.model('Account', Account);