import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import WwatchesItem from "./wwatchesItem";
import AppContext from "../AppContext";


class Wwatches extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="wwatches-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.wwatches.map((wwatche,index)=>
                                        <WwatchesItem wwatche={wwatche} key={index}/>
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
Wwatches.contextType= AppContext
export default Wwatches
