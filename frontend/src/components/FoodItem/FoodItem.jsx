import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc , id }) => {

    const {url,currency} = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={url+"/images/"+image} alt="" />
                {}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p> 
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">{currency}{price}&nbsp;﷼</p>
            </div>
        </div>
    )
}

export default FoodItem
