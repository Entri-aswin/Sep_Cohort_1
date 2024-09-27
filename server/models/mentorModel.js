import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            enum: ["mentor", "admin"],
            default: 'mentor'
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },
        profilePic: {
            type: String,
            default: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
        },
        qualification:{
            type:String
        },
        courses: [{ type: mongoose.Types.ObjectId, ref: "Course" }],
    },
    { timestamps: true }
);

export const Mentor = mongoose.model("Mentor", mentorSchema);
