import React from 'react';
import Header from './Component/Header'
import Body from './Component/Body'
import Footer from './Component/Footer'
import { Link } from 'react-router-dom';


class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Body/>
                <Footer/>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                     <li>
                        <Link to="/About">About  </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Home;