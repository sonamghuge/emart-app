import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import SportItem from "./sportItem";
import AppContext from "../AppContext";

 class Sports extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="sports-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.sports.map((sport,index)=>
                                        <SportItem sport={sport} key={index}/>
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
Sports.contextType= AppContext
export default Sports