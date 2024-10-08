import { Course } from "../models/courseModel.js";
import { Review } from "../models/reviewModel.js";

export const addReview = async (req, res) => {
    try {
        const { courseId, rating, comment } = req.body;
        const userId = req.user.id;

        // Validate if the course exists
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        
        if(rating>5 || rating <1 ){
           return res.status(400).json({ message: "Please provide a proper rating"});
        }

        // Create or update the review
        const review = await Review.findOneAndUpdate(
            { userId, courseId },
            { rating, comment },
            { new: true, upsert: true }
        );

        // Optionally, you can update the course's average rating here

        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};



const getCourseReviews = async (req, res) => {
    try {
        const { courseId } = req.params;



        const reviews = await Review.find({ courseId })
            .populate("userId", "name")
            .sort({ createdAt: -1 });

        if (!reviews.length) {
            return res.status(404).json({ message: "No reviews found for this course" });
        }

        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};



const deleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const userId = req.user.id;

        const review = await Review.findOneAndDelete({ _id: reviewId, userId });

        if (!review) {
            return res.status(404).json({ message: "Review not found or not authorized" });
        }

        res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};



const getAverageRating = async (req, res) => {
    try {
        const { courseId } = req.params;

        const reviews = await Review.find({ courseId });
        if (!reviews.length) {
            return res.status(404).json({ message: "No reviews found for this course" });
        }

        const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

        res.status(200).json({ averageRating });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};