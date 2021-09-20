import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import BadmintonItem from "./badmintonItem";
import AppContext from "../AppContext";


 class Badminton extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="badminton-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.badminton.map((badminton,index)=>
                                        <BadmintonItem badminton={badminton} key={index}/>
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
Badminton.contextType= AppContext
export default Badminton
