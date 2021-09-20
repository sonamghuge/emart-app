import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import WashingmachineItem from "./washingmachineItem";
import AppContext from "../AppContext";


 class Washingmachine extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="washingmachine-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.washingmachine.map((washingmachine,index)=>
                                        <WashingmachineItem washingmachine={washingmachine} key={index}/>
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
Washingmachine.contextType= AppContext
export default Washingmachine
