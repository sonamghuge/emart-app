import React from 'react';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Link } from 'react-router-dom';


class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Footer/>
                 
            </div>
        )
    }
}
export default Home;