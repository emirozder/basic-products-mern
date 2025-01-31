import mongoose from 'mongoose';
import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error get products: ", error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

export const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error create product: ", error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ success: false, message: 'Invalid product id' });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, product, { new: true });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log("Error update product: ", error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ success: false, message: 'Invalid product id' });
  }

  try {
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ success: true, message: 'Product is deleted' });
  } catch (error) {
    console.log("Error delete product: ", error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}