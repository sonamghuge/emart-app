import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import MensItems from "./mensItems";
import AppContext from "../AppContext";


 class Mens extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="mens-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.Mens.map((men,index)=>
                                        <MensItems men={men} key={index}/>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}
Mens.contextType= AppContext
export default Mens