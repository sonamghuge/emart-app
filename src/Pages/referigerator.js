import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import ReferigeratorItem from "./referigeratorItem";
import AppContext from "../AppContext";


 class Referigerator extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="referigerator-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.referigerator.map((referigerator,index)=>
                                        <ReferigeratorItem referigerator={referigerator} key={index}/>
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
Referigerator.contextType= AppContext
export default Referigerator
