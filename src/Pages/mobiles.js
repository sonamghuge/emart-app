import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import MobilesItem from "./mobilesItem";
import AppContext from "../AppContext";


 class Mobiles extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="mobiles-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.mobiles.map((mobile,index)=>
                                        <MobilesItem mobile={mobile} key={index}/>
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
Mobiles.contextType= AppContext
export default Mobiles
