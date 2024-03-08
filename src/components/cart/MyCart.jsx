import React from 'react'

const MyCart = () => {
    return (
        <div className="bg-white h-screen">
            <div className="flex">
                <div className="md:w-1/2 py-10 px-4">
                    <h2 className="text-center font-bold text-3xl mb-4">My Cart</h2>
                    <div className="h-auto w-full border-2 border-gray-900 rounded-lg p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://hips.hearstapps.com/hmg-prod/images/orange-1558624428.jpg" alt="fruit" className="h-full w-32 border border-gray-900" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-xl">Orange</h2>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                    <button className="bg-green-500 text-white rounded-lg px-4 text-lg font-bold">-</button>
                                    <button className="bg-green-500 w-full rounded-lg text-center text-white font-semibold text-lg uppercase px-6">Add To Cart</button>
                                    <button className="bg-green-500 text-white rounded-lg px-4 text-lg font-bold">+</button>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 py-10">
                    <h2 className="text-center font-bold text-3xl">Order Summary</h2>
                </div>
            </div>
        </div>
    )
}

export default MyCart