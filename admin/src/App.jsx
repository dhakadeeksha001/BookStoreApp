// import React from 'react'
// import Navbar from "./components/Navbar/Navbar";
// import Sidebar from "./components/Sidebar/Sidebar";
// import { Route, Routes } from "react-router-dom";
// import Add from './pages/add/add'
// import List from "./pages/List/List";
// import Orders from "./pages/orders/orders";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';


// const App = () => {
//   return (
//     <div className='app'>
//       <ToastContainer />
//       <Navbar />
//       <hr />
//       <div className="app-content">
//         <Sidebar />
//         <Routes>
//           <Route path="/add" element={<Add />} />
//           <Route path="/list" element={<List />} />
//           {/* <Route path="/orders" element={<Orders />} /> */}
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes, Navigate } from "react-router-dom"; // ⬅️ import Navigate
import Add from './pages/add/add'
import List from "./pages/List/List";
import Orders from "./pages/orders/orders";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/add" />} /> {/* ⬅️ redirect to /add */}
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          {/* <Route path="/orders" element={<Orders />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
