import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import JwelleryItem from "./jwelleryItem";
import AppContext from "../AppContext";


 class Jwellery extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="jwellery-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.jwellery.map((jwellery,index)=>
                                        <JwelleryItem jwellery={jwellery} key={index}/>
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
Jwellery.contextType= AppContext
export default Jwellery
