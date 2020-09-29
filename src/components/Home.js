import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
// import Banner from './Banner'

export default function Home() {
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt='Logo' />
                <span style={{ marginTop: '5px' }}>Tron</span>
            </div>

            <div className='header'>
                <h2>100% decentralized and secure <br /> smart contract fund</h2>
                <p>Fastest and easiest way to make over 5000000 TRX every 90 days.
        <br />Built for You</p>
                <Link to='/login' className='btn-primary'>
                    Join Now
                </Link>
            </div>
        </div>
    )
}
