import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div >
            <ul className='nav nav-tabs'>
                <li className='nav nav-item'><Link className='nav-link' to='/campuses'>Campuses</Link></li>
                <li className='nav nav-item'><Link className='nav-link' to='/students'>Students</Link></li>
                <li className='nav nav-item'><Link className='nav-link' to='/campuses/addCampus'>Add campus</Link></li>
            </ul>
        </div>
    )
}