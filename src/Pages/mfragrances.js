import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import MfragrancesItem from "./mfragrancesItem";
import AppContext from "../AppContext";


 class Mfragrances extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="mfragrances-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.mfragrances.map((mfragrance,index)=>
                                        <MfragrancesItem mfragrance={mfragrance} key={index}/>
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
Mfragrances.contextType= AppContext
export default Mfragrances
