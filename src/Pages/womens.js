import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import WomensItem from "./womensItem";
import AppContext from "../AppContext";


 class Womens extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="womens-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.womens.map((women,index)=>
                                        <WomensItem women={women} key={index}/>
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
Womens.contextType= AppContext
export default Womens