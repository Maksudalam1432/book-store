import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    author: {
      type: String,
    },

    category: {
      type: String,
    }, 

    price: {
      type: Number,
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", BookSchema);

export default Book;
