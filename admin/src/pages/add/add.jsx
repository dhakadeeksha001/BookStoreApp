
import React, { useState } from 'react';
import './Add.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { url } from '../../assets/assets';

const AddBook = () => {
  const [data, setData] = useState({
    name: '',
    title: '',
    price: '',
    category: 'Fiction',
    image: '',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!data.image) {
      toast.error('Image URL is required');
      return;
    }

    try {
      const response = await axios.post(`${url}/books/add`, data);

      if (response.data.success) {
        toast.success(response.data.message);
        setData({ name: '', title: '', price: '', category: 'Fiction', image: '' });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Failed to add book');
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-product-name flex-col">
          <p>Book Name</p>
          <input
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            placeholder="Enter book name"
            required
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Title</p>
          <input
            name="title"
            onChange={onChangeHandler}
            value={data.title}
            type="text"
            placeholder="Enter title"
            required
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Image URL</p>
          <input
            name="image"
            onChange={onChangeHandler}
            value={data.image}
            type="text"
            placeholder="Enter image URL"
            required
          />
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Category</p>
            <select name="category" onChange={onChangeHandler} value={data.category}>
              <option value="Fiction">Fiction</option>
              <option value="Education">Education</option>
              <option value="Comics">Comics</option>
              <option value="Biography">Biography</option>
              <option value="Children">Children</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Price</p>
            <input
              name="price"
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              placeholder="Enter price"
              required
            />
          </div>
        </div>

        <button type="submit" className="add-btn">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;

