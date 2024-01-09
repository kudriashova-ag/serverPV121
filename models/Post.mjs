import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    rate: {type: Number}
})

const Post = mongoose.model('Post', schema)

export default Post