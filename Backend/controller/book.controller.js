import Book from "../model/book.model.js";

const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const addBook = async (req, res) => {
  try {
    const { name, price, category, image, title } = req.body;
    const newBook = new Book({
      name,
      price,
      category,
      image,
      title,
    });

    await newBook.save();
    res.json({ success: true, message: "Book Added" });
  } 
  catch (error) {
    console.error("Add Book Error:", error);
    res.json({ success: false, message: "Error adding book" });
  }
};

const removeBook = async (req, res) => {
  try {
    const book = await Book.findById(req.body.id);
    if (!book) {
      return res.json({ success: false, message: "Book not found" });
    }
    await Book.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Book Removed" });
  } catch (error) {
    console.error("Remove Book Error:", error);
    res.json({ success: false, message: "Error removing book" });
  }
};

export { getBook, addBook, removeBook };
