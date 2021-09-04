import React from 'react';
import Header from './Component/Header'
import Body from './Component/Body'
import Footer from './Component/Footer'
import Routes from './Routes'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Body/>
                <Footer/>
                <Routes/>
            </div>
        )
    }
}
export default Home;