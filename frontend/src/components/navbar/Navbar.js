import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './navbar.module.css'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { logout } from '../../redux/authSlice'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const {products} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

 const handleLogin = () => {
    // dispatch(logout())
    navigate('/login')
  }
  // const handleLogout = () => {
  //   dispatch(logout())
  //   navigate('/login')
  // }

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/' className={classes.title}>
          <span style={{color:'black'}}>Feed</span><span style={{fontSize:"30"}}>me</span>
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
          <li className={classes.listItem}>
              <Link to='/'>Accueil</Link>
            </li>
            <li className={classes.listItem}>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            {/* <li className={classes.listItem}>
              <a href="#contacts">Contact</a>
            </li> */}
            <li className={classes.listItem}>
              <Link to="/Restaurents"> Restaurant</Link>
              </li>

              <li className={classes.listItem}>
              <Link to="/Patessiries"> Pâtisserie</Link>
    
   </li>
          </ul>
          
        </div>
        <div className={classes.right}>
          
          <Link to='/cart' className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>{products.length}</div>
          </Link>
         
          {/* <button onClick={handleLogout} className={classes.logout}>Logout</button> */}
          <button onClick={handleLogin} className={classes.logout}>Login </button>

        </div>
      </div>
    </div>
  )
}

export default Navbar