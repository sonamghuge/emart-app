import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import TelevisionItem from "./televisionItem";
import AppContext from "../AppContext";


 class Television extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="television-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.television.map((television,index)=>
                                        <TelevisionItem television={television} key={index}/>
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
Television.contextType= AppContext
export default Television
