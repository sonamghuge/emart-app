import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import FootballItem from "./footballItem";
import AppContext from "../AppContext";


 class Football extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="football-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.football.map((football,index)=>
                                        <FootballItem football={football} key={index}/>
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
Football.contextType= AppContext
export default Football
