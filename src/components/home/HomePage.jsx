import React, { useState } from 'react'
import cardData from './cardData'

const HomePage = () => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (productId) => {
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };
            updatedItems[productId] = (updatedItems[productId] || 0) + 1;
            return updatedItems;
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems }
            if (updatedItems[productId] > 0) {
                updatedItems[productId] -= 1;
            }
            return updatedItems;
        });
    };

    return (
        <div className=" h-auto p-10">
            <h2 className="text-5xl font-bold py-6 text-center">Products</h2>
            <div className="flex flex-wrap md:justify-start justify-center gap-6">
                {cardData.map(product => (
                    <div key={product.id}>
                        <div className="bg-white drop-shadow-xl h-86 w-72 rounded-lg">
                            <div>
                                <img src={product.imageUrl} alt="orange" className="h-60 w-full" />
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center px-2">
                                    <p className="font-bold text-lg">{product.productName}</p>
                                    <p className="font-bold text-lg">&#8377; {product.price}</p>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <button onClick={() => removeFromCart(product.id)} className="bg-green-500 text-white rounded-lg px-4 text-lg font-bold">-</button>
                                    <button className="bg-green-500 w-full rounded-lg text-center text-white font-semibold text-lg uppercase">{cartItems[product.id] || 0}</button>
                                    <button onClick={() => addToCart(product.id)} className="bg-green-500 text-white rounded-lg px-4 text-lg font-bold">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage