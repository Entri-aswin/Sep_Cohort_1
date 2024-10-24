import { cloudinaryInstance } from "../config/cloudinaryConfig.js";
import { Course } from "../models/courseModel.js";
import { handleImageUpload } from "../utils/cloudinary.js";

export const findAllCourses = async (req, res, next) => {
    try {
        const courseList = await Course.find();

        res.json({ message: "course list fetched", data: courseList });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};

export const fetchCourseDetails = async (req, res, next) => {
    try {
        const { courseId } = req.params;
        

        const courseDetails = await Course.findOne({ _id: courseId });

        res.json({ message: "course details fetched", data: courseDetails });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};

export const createCourse = async (req, res, next) => {
    try {
        let imageUrl;
        const { title, description, duration, price, image } = req.body;
        console.log("image====", req.file);

        if (req.file) {
            const cloudinaryRes = await cloudinaryInstance.uploader.upload(req.file.path);
            imageUrl= cloudinaryRes.url;
            // imageUrl = await handleImageUpload(req.file.path)
        }

        console.log(imageUrl,'====imageUrl');
        
        const newCourse = new Course({ title, description, duration, price, image: imageUrl });
        await newCourse.save();

        res.json({ message: "course created successfully", data: newCourse });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


export const updateCourse = async (req, res, next) => {
    try {

        const {courseId} = req.params;
        const { title, description, duration, price, image } = req.body;
        let imageUrl;

        const isCourseExist = await Course.findById(courseId);
        if(!isCourseExist){
           return res.status(404).json({message:"course not found"})
        }

        console.log("image====", req.file);

        if (req.file) {
            const cloudinaryRes = await cloudinaryInstance.uploader.upload(req.file.path);
            imageUrl= cloudinaryRes.url;
            // imageUrl = await handleImageUpload(req.file.path)
        }

        console.log(imageUrl,'====imageUrl');

        const courseUpdated = await Course.findByIdAndUpdate(courseId,{ title, description, duration, price, image:imageUrl },{new:true})

        res.json({ message: "course updated successfully", data: courseUpdated });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


export const deleteCourse = async (req, res, next) => {
    try {

        const {courseId} = req.params;
        const courseDetails = await Course.findByIdAndDelete(courseId)

        if(!courseDetails){
            return res.status(404).json({message:"course not found"})
        }

        res.json({ message: "course deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


