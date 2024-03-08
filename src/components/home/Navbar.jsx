import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [ showOpen, setShowOpen ] = useState(false);

    const toggleMenuOpen = () => {
        setShowOpen(!showOpen);
    }

    return (
        <div className="bg-gray-500 py-8 px-6">
            <div className="flex justify-between">
                <div>
                    <Link to="/">
                        <h1 className="text-white font-bold text-2xl">Varun</h1>
                    </Link>
                </div>
                {showOpen && (
                    <div>
                        
                    </div>
                )}
                <div>
                    <ul className="hidden md:flex space-x-4 text-white text-xl">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Help</li>
                        <Link to="/my-cart">
                            <li>My Cart</li>
                        </Link>
                        <li>Log in</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar