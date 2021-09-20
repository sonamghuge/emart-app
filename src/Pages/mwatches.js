import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import MwatchesItem from "./mwatchesItem";
import AppContext from "../AppContext";



 class Mwatches extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="mwatches-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.mwatches.map((mwatche,index)=>
                                        <MwatchesItem mwatche={mwatche} key={index}/>
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
Mwatches.contextType= AppContext
export default Mwatches
