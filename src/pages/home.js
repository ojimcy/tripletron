import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Services from '../components/Services';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
    return (
        <div>
            <Hero className='room'>
                <Banner title='100% decentralized and secure smart contract fund'>
                    <h1></h1>
                    <p>Fastest and easiest way to make over 4005668700
                    TRX every 90 days. <br />
            Built for You</p>
                    <Link to='/login' className='btn-primary'>
                        Join Now
                </Link>
                    <Link to='/login' className='btn-primary'>
                        Join Now
                </Link>
                    <Link to='/login' className='btn-primary'>
                        Login
                </Link>
                </Banner>
            </Hero>
            <Services />
        </div>
    )
}
