import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import BeautyproductsItem from "./beautyproductsItem";
import AppContext from "../AppContext";


 class Beautyproducts extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="beautyproducts-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.beautyproducts.map((beautyproduct,index)=>
                                        <BeautyproductsItem beautyproduct={beautyproduct} key={index}/>
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
Beautyproducts.contextType= AppContext
export default Beautyproducts
