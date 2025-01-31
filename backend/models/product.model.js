import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
}, {
  timestamps: true // automatically create fields for when the document was created and last updated (createdAt, updatedAt)
});

const Product = mongoose.model("Product", productSchema);

export default Product;
