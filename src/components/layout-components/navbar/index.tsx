import React from 'react'
import { Link } from 'react-router-dom'

function index() {
    return <>
        <nav>
            <li><Link to={'/orders'}>Orders</Link></li>
        </nav>
    </>
}

export default index