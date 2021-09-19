import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import MenItem from "./menItem";
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
                                        this.context.mens.map((men,index)=>
                                        <MenItem men={men} key={index}/>
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