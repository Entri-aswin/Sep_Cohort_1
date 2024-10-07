import { Course } from "../models/courseModel.js";

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
        const { title, description, duration, price, image } = req.body;
        console.log('image====',req.file);
        

        const newCourse = new Course({ title, description, duration, price, image });
        await newCourse.save()

        res.json({ message: "course created successfully", data: newCourse });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};
