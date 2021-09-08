import React from 'react';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import './homeAssets/home.css'
import slide1 from './homeAssets/slide1.jpg'
import slide2 from './homeAssets/slide2.jpg'
import slide3 from './homeAssets/slide3.jpg'
import payment from './homeAssets/payment.png'
import return1 from './homeAssets/return1.png'
import trust from './homeAssets/trust.png'
import { Link } from 'react-router-dom';
import HomeTtem from './homeitem';
import axios from 'axios';

class Home extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 animals:[]
            }
        }
        
        // componentDidMount(){
        //     axios.get()
        // }

        componentDidMount(){
            axios.get('http://localhost:4000/')
            .then(res => {
                const animals =res.data;
                this.setState({animals});
            })
        }
    

    render(){
        return(
            <div>
                <Navbar/>
                <section className="first-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar />
                            </div>
                            <div className="col-sm-8">
                                <div className="card">
                                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={slide1} alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={slide2} alt="Second slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={slide3} alt="Third slide"/>
                                        </div>
                                    </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                </div>

                                </div>
                            </div>           
                        </div>
                    </div>
                </section>

                <section className="second-section my-3 py-3 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="text-center">
                                    <img className="mb-3" src={payment} alt="paymentIcon"/>
                                    <div className="">
                                        <h4>Easy Payment</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="text-center">
                                    <img className="mb-3" src={return1} alt="returnIcon"/>
                                    <div className="">
                                        <h4>Easy Return</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="text-center">
                                    <img className="mb-3" src={trust} alt="trustIcon"/>
                                    <div className="">
                                        <h4>Trusted Quality</h4>
                                        <p>The product trusted quality</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 

                <section className="third-section">
                   <div className="row">
                   <HomeTtem name='Goat' color='red'/>
                   <HomeTtem name='dog' />
                   <HomeTtem name='cat' color='black'/>
                   </div>
                </section>
                <Footer/>
                 
            </div>
        )
    }
}
export default Home;