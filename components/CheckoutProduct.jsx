import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../src/slices/basketSlice'

const CheckoutProduct = ({ id, title, price, description, category, image, hasPrime, rating }) => {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id, title, price, description, category, image, hasPrime, rating
        }

        // Sending the product as an action to the REDUX store... the basket slice
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {
        // Remove item from REDUX store
        dispatch(removeFromBasket({ id }));
    }

    return (
        <div className='grid grid-cols-5'>
            <Image src={image} width={200} height={200} objectFit="contain" />
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="GBP" />
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img src="https://links.papareact.com/fdw" alt="" className="w-12" />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-end">
                <button className="button" onClick={addItemToBasket} >Add to Basket</button>
                <button className="button" onClick={removeItemFromBasket} >Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct