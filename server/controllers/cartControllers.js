import { Cart } from "../models/cartModel.js";
import { Course } from "../models/courseModel.js";

export const getCart = async (req, res, next) => {
    try {
        const { user } = req;
        const cart = await Cart.findOne({ userId: user.id }).populate("courses.courseId");

        if (!cart) {
            return res.status(404).json({ message: "cart is empty" });
        }

        res.json({ message: "cart details fetched", data: cart });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};

export const getCartItems = async (req, res, next) => {
    try {
        const { user } = req;
        const cart = await Cart.findOne({ userId: user.id }).populate("courses.courseId");

        if (!cart) {
            return res.status(404).json({ message: "cart is empty" });
        }

        res.json({ message: "cart details fetched", data: cart.courses });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};

export const addCourseToCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { courseId } = req.body;

        // Find the course to ensure it exists and fetch its price
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        // Find the user's cart or create a new one if it doesn't exist
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, courses: [] });
        }

        // Check if the course is already in the cart
        const courseExists = cart.courses.some((item) => item.courseId.equals(courseId));
        if (courseExists) {
            return res.status(400).json({ message: "Course already in cart" });
        }

        // Add the course to the cart
        cart.courses.push({
            courseId,
            price: course.price,
        });

        // Recalculate the total price
        cart.calculateTotalPrice();

        await cart.save();

        res.status(200).json({ message: "added to cart", data: cart });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const removeCourseFromCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { courseId } = req.body;

        // Find the user's cart
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        console.log("courseId====", courseId, typeof courseId);

        // Remove the course from the cart
        cart.courses = cart.courses.filter((item) => !item?.courseId == courseId);

        // Recalculate the total price
        cart.calculateTotalPrice();

        // Save the cart
        await cart.save();

        res.status(200).json({ message: "course removed from cart", data: cart });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
