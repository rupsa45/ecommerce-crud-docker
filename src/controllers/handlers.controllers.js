import {
  create,
  deleteById,
  find,
  findById,
  updateById,
} from "../db/queries.js";
export const getAllProducts = async (req, res) => {
  try {
    const products = await find();
    if (products && products.length > 0) {
      res.status(200).json(products);
      console.log("Products found:", products);
    } else {
      res.status(404).json({ message: "No products found" });
      console.log("No products found");
    }
  } catch (error) {
    console.log(error);
  }
};
export const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await findById(id);
    if (product) {
      res.status(200).json(product);
      console.log("Product found:", product);
    } else {
      res.status(404).json({ message: "Product not found" });
      console.log("Product not found for ID:", id);
    }
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  const { title, description, price } = req.body;
  if (!title || !description || !price) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  try {
    const product = await create(title, description, price);
    res.status(201).json({ product });
  } catch (error) {
    console.log(error);
  }
};
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const { title, description, price } = req.body;
  if (!title || !description || !price) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  try {
    const product = await updateById(title, description, price ,id);
    if (product) {
      res.status(200).json({product});
    } else {
      res.status(404).json({ message: "Product not found" });
      console.log("Product not found for ID:", id);
    }
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await deleteById(id);
    if (product) {
      res.status(200).json({ message: "prodcut deleted successfuly" });
    } else {
      res.status(404).json({ message: "Product not found" });
      console.log("Product not found for ID:", id);
    }
  } catch (error) {
    console.log(error);
  }
};
