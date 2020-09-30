import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import MarketingPlan from '../components/MarketingPlan';
import Advantages from '../components/Advantages';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
    return (
        <div>
            <div className='home'>
                <Hero >
                    <Banner title='100% decentralized and secure smart contract fund'>
                        <p>Fastest and easiest way to make over 4005668700
                    TRX every 90 days. <br />
            Built for You</p>
                        <Link to='/login' className='btn-primary'>
                            Join Now
                </Link>
                        <Link to='/login' className='btn-secondary'>
                            Join Now
                </Link>
                        <Link to='/login' className='btn-primary'>
                            Login
                </Link>
                    </Banner>
                </Hero>
            </div>
            <Advantages />
            <MarketingPlan />
        </div>
    )
}
