import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import KidsItem from "./kidsItem";
import AppContext from "../AppContext";


 class Kids extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="kids-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.kid.map((kid,index)=>
                                        <KidsItem kid={kid} key={index}/>
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
Kids.contextType= AppContext
export default Kids