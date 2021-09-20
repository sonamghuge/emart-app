import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import ElectronicsItem from "./electronicsItem";
import AppContext from "../AppContext";

 class Electronics extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="electronics-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.electronics.map((products,index)=>
                                        <ElectronicsItem electronic={products} key={index}/>
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
Electronics.contextType= AppContext
export default Electronics