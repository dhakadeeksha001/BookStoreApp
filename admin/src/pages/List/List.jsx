import React, { useEffect, useState } from 'react'
import './List.css'
import { url, currency } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/books`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Internal Error");
      }
    } catch (err) {
      toast.error("Failed to fetch books");
    }
  };

  const removeBook = async (bookId) => {
    try {
      const response = await axios.post(`${url}/books/remove`, {
        id: bookId
      });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error("Internal Error");
      }
    } catch (err) {
      toast.error("Failed to remove book");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Books List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>     </b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Remove</b>
        </div>
        {list.map((item) => (
          <div key={item._id} className='list-table-format'>
            <img src={item.image}/>
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p className='cursor' onClick={() => removeBook(item._id)}>x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
