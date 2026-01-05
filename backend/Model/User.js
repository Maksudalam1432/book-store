import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6
    },

    number: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
