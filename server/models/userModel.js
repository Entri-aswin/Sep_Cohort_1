import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
	 name: {
      type: String,
      required: true,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 30,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    mobile:{
		    type:String,
		    required:true
		},
    profiePic:{
		   type:String,
		    default: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
    },

  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

