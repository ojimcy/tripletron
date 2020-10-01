import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function LevelPrice() {
    return (
        <div className='level-price'>
            <h1>level prices</h1>
            <Container>
                <div className='level-price-center'>
                    <Row>
                        <Col md='4' >
                            <div className='col'>
                                <h3>LEVEL 1</h3>
                                <h4>500 TRX</h4>
                            </div>

                        </Col>
                        <Col md='4'>
                            <div className='col'>
                                <h3>LEVEL 2</h3>
                                <h4>2000 TRX</h4>
                            </div>
                        </Col>
                        <Col md='4' >
                            <div className='col'>
                                <h3>LEVEL 3</h3>
                                <h4>20000 TRX</h4>
                            </div>
                        </Col>
                    </Row>

                </div>
                <div className='level-price-center'>
                    <Row>
                        <Col md='4' >
                            <div className='col'>
                                <h3>LEVEL 1</h3>
                                <h4>500 TRX</h4>
                            </div>

                        </Col>
                        <Col md='4'>
                            <div className='col'>
                                <h3>LEVEL 2</h3>
                                <h4>2000 TRX</h4>
                            </div>
                        </Col>
                        <Col md='4' >
                            <div className='col'>
                                <h3>LEVEL 3</h3>
                                <h4>20000 TRX</h4>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
    )
}