import bcrypt from 'bcrypt'
import { generateToken } from '../utils/token.js';
import { Mentor } from '../models/mentorModel.js';

export const mentorSignup = async (req, res, next) => {
    try {
        const { name, email, password, mobile, profilePic } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "all fields required" });
        }
        const isMentorExist = await Mentor.findOne({ email });

        if (isMentorExist) {
            return res.status(400).json({ message: "user already exist" });
        }

        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        const newMentor = new Mentor({ name, email, password: hashedPassword, mobile, profilePic });
        await newMentor.save();

        const token = generateToken(newMentor._id,'mentor');

        res.cookie("token", token);

        res.json({ success: true, message: "mentor account created successfully" });
    } catch (error) {
        console.log(error);
    res.status(error.statusCode || 500).json(error.message || 'Internal server error')        
    }
};

export const mentorLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "all fields are required" });
        }

        const isMentorExist = await Mentor.findOne({ email });
        if (!isMentorExist) {
            return res.status(404).json({ success: false, message: "mentor does not exist" });
        }

        const passwordMatch = bcrypt.compareSync(password, isMentorExist.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "user not autherized" });
        }

        const token = generateToken(isMentorExist._id,'mentor');

        res.cookie("token", token);
        res.json({ success: true, message: "menotr login successfull" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || 'Internal server error')
    }
};


export const mentorProfile = async (req, res, next) => {
    try {

        const {user}=req

        const userData = await Mentor.findById(user.id).select('-password')

        res.json({ success: true, message: "user profile fetched", userData });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || 'Internal server error')
    }
};
export const mentorLogout = async (req, res, next) => {
    try {

        res.clearCookie('token')
        res.json({ success: true, message: "user logged out" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || 'Internal server error')
    }
};
export const checkMentor = async (req, res, next) => {
    try {

        res.json({ success: true, message: "mentor autherized" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || 'Internal server error')
    }
};

