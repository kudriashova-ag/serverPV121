import Post from "../models/Post.mjs"

const all = async (req, res) => {
    const posts = await Post.find({});
    res.json(posts);
}

const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        res.json(post);
    }
    catch {
        res.status(404).json({
            result: 'error',
            message: 'Post not found'
        })
    }
}

const add = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.json(post);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

const update = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findByIdAndUpdate(id, req.body);
        res.json({
            status: 'success',
            message: 'Post updated'
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'error',
            message: 'Post not Found'
        });
    }

}

const remove = async (req, res) => {
    const id = req.params.id;
    try {
        await Post.findByIdAndDelete(id);
        res.json({
            status: 'success',
            message: 'Post deleted'
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'error',
            message: 'Post not Found'
        });
    }
}


export default { all, getById, add, update, remove }