import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import MarketingPlan from '../components/MarketingPlan';
import Advantages from '../components/Advantages';


export default function Home() {
    return (
        <div>
            <div className='home'>
                <Hero >
                    <Banner title='100% decentralized and secure smart contract fund'>
                        <p>Fastest and easiest way to make over 4005668700
                        TRX every 90 days.
            Built for You</p>
                        <Link to='/login' className='btn-prim'>
                            Join Now
                </Link>
                        <Link to='/login' className='btn-sec'>
                            Video
                </Link>
                        <Link to='/login' className='btn-prim'>
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
