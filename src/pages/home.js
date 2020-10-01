import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import MarketingPlan from '../components/MarketingPlan';
import Advantages from '../components/Advantages';
import LevelPrice from '../components/LevelPrice';


export default function Home() {
    return (
        <div>
            <div className='home'>
                <Hero >
                    <Banner title='100% decentralized and secure smart contract fund'>
                        <p>Earn Unlimited Number To TRX Every 90 Days Using The Power Of 3.
                        <br />You Only Need To Refer 3 And Encourage/Help Them To Do The Same</p>
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
            <LevelPrice />
        </div>
    )
}
