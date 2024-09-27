import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar() {
    return <>
        <nav>
            <li><Link to={'/orders'}>Orders</Link></li>
            <li><Link to={'/categories'}>Categories</Link></li>
        </nav>
    </>
}

export default Navbar