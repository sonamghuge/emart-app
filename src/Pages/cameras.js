import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import CamerasItem from "./camerasItem";
import AppContext from "../AppContext";


 class Cameras extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="cameras-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.cameras.map((camera,index)=>
                                        <CamerasItem camera={camera} key={index}/>
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
Cameras.contextType= AppContext
export default Cameras
