import React from 'react'
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
                        <p>Earn unlimited number to TRX every 90 days using the power of 3. <br />
                        You only need to refer 3 and encourage/help them to do the same.</p>
                        <a href='/start' className='btn-prim'>
                            Join Now
                        </a>
                        <a href='/start' className='btn-sec'>
                            Login
                        </a>
                        <a href='https://tronscan.org/#/contract/TGTRQZb2SPLtEgHYeYihcKVU48UvvDz2Wh/code' target='_blank' className='btn-prim'>
                            Tronscan
                        </a>
                    </Banner>
                </Hero>
            </div>
            <LevelPrice />
            <MarketingPlan />
            <Advantages />
        </div>
    )
}
