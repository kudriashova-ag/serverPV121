import jwt from 'jsonwebtoken';
import User from '../models/User.mjs'
import bcrypt from 'bcrypt'


const register = async (req, res) => { 
    const user = await User.findOne({ email: req.body.email });
    if (user) { 
        return res.status(400).json({
            status: 'error',
            message: 'User already exists'
        });
    }

    try {
        const user = new User(req.body);
        await user.save();
        res.json(user);
    }
    catch (err) {
        res.status(400).json(err);
    }
}


const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'User not Found'
        });
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
        return res.status(404).json({
            status: 'error',
            message: 'Password incorrect'
        });
    }


    const token = jwt.sign(
        {userId: user._id},
        'Random',
        {expiresIn: "24h"}
    )
    
    res.json({
        message: 'Login success',
        token,
        user
    });
}

const getAuthUser = async (req, res) => {
    const { userId } = req.user;
    const user = await User.findById(userId);
    if (user) {
        return res.json({
            email: user.email,
            name: user.name
        });
    }
    else { 
        return res.status(404).json({
            status: 'error',
            message: 'User not found'
        });
    }
}


export default { register, login, getAuthUser }