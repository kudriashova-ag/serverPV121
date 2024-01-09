import mongoose from "mongoose";
mongoose.connect('mongodb+srv://kudriashovaag:web000@cluster0.ab16ifu.mongodb.net/?retryWrites=true&w=majority')
export default mongoose.connection