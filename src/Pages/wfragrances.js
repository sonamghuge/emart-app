import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import WfragrancesItem from "./wfragrancesItem";
import AppContext from "../AppContext";


 class Wfragrances extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="wfragrances-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.wfragrances.map((wfragrance,index)=>
                                        <WfragrancesItem wfragrance={wfragrance} key={index}/>
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
Wfragrances.contextType= AppContext
export default Wfragrances
