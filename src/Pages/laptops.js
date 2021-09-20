import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import LaptopsItem from "./laptopsItem";
import AppContext from "../AppContext";


 class Laptops extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="laptops-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.laptops.map((laptop,index)=>
                                        <LaptopsItem laptop={laptop} key={index}/>
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
Laptops.contextType= AppContext
export default Laptops
