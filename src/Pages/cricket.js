import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import CricketItem from "./cricketItem";
import AppContext from "../AppContext";


 class Cricket extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="cricket-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.cricket.map((cricket,index)=>
                                        <CricketItem cricket={cricket} key={index}/>
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
Cricket.contextType= AppContext
export default Cricket
