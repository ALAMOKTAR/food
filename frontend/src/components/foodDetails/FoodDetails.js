import React from 'react'
import classes from './foodDetails.module.css'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { addProduct } from '../../redux/cartSlice'

const FoodDetails = ({type,title,desc,price,img,review,category}) => {
  const [foodDetails, setFoodsDetails] = useState('')
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const {id} = useParams()
  const {token} = useSelector((state) => state.auth)
  const {products} = useSelector((state) => state.cart)
  console.log(products)

  useEffect(() => {
     const fetchFoodDetails = async() => {
      const res = await fetch(`http://localhost:5000/product/find/:id`, {
      })
      const data = await res.json()
      setFoodsDetails(data)
     }
     fetchFoodDetails()
  }, [id])

  const changeQuantity = (command) => {
    if(command === 'dec'){
       if(quantity === 1) return
       setQuantity(prev => prev - 1)
    } else if(command === 'inc'){
       setQuantity(prev => prev + 1)
    }
  }

  const addToCart = () => {
    dispatch(addProduct({...foodDetails, quantity}))
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
       
          <img src={img}/>
       
      
          
          
          
          
          </div>
            <h3>Category: </h3>
            <span>{category}</span>
          <h2 className={classes.title}>{title}</h2>
          
            <div>Description: </div>
            <p>
              {desc}
            </p>
          
          <div className={classes.quantity}>
            <button disabled={quantity === 1} onClick={() => changeQuantity('dec')}>-</button>
            <span className={classes.quantityNumber}>{quantity}</span>
            <button onClick={() => changeQuantity('inc')}>+</button>
          </div>
          <div className={classes.price}>
            Price: <span>$</span> {price}
          </div>
          <button onClick={addToCart} className={classes.addToCart}>Add To Cart <AiOutlineShoppingCart /></button>
        </div>
      
    
  )
}

export default FoodDetails