import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import HomeItem from "./homeItem";
import AppContext from "../AppContext";

 class Homes extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="homes-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.homes.map((home,index)=>
                                        <HomeItem home={home} key={index}/>
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
Homes.contextType= AppContext
export default Homes