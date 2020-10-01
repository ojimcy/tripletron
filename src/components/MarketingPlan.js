import React, { Component } from 'react'
import Triple from '../images/triple-tron-earnings.png'

export default class MarketingPlan extends Component {
    render() {
        return (
            <>
                <section className="services">
                    <h1>The magic happens in 4 simple steps</h1>
                    <div className="services-center">
                        <article className="service">
                            <span>1</span>
                            <h6>Step One</h6>
                            <p>Register an account with just 500 TRX</p>
                        </article>

                        <article className="service">
                            <span>2</span>
                            <h6>Step Two</h6>
                            <p>Get 3 people to register under you</p>
                        </article>

                        <article className="service">
                            <span>3</span>
                            <h6>Step Three</h6>
                            <p><b>Encourage/help</b> them to bring three(3) each</p>
                        </article>

                        <article className="service">
                            <span>4</span>
                            <h6>Step Four</h6>
                            <p>Upgrade to the next level once you have made enough fund</p>
                        </article>
                    </div>
                </section>
                <div className='earning-box'>
                
                <h3>Here is the magic calculation</h3>
                <img src={Triple} alt='TripleTron earning plan' className='img img-responsive' />
                
                <p>
                    <a href='/start' className='btn-prim'>
                        Join Now
                    </a>
                    <a href='/start' className='btn-sec'>
                        Login
                    </a>
                </p>
            </div>
            </>
        )
    }
}


