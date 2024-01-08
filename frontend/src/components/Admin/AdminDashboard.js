import React from 'react'
import Sidebar from '../Sidebar'
import { Route, Routes } from 'react-router'
import About from './About'
import Analytics from './Analytics'
import ProductList from './ProductList'
import './Admindashboard.css'
import Create from './Create'
import UserList from './UserList'
const AdminDashboard = () => {
  return (
    <div className='dashboard'>
        <Sidebar>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/create-product" element={<Create/>} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </div>
  )
}

export default AdminDashboard
