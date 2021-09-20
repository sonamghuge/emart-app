import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import WalletsItem from "./walletsItem";
import AppContext from "../AppContext";


 class Wallets extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section className="wallets-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.wallet.map((wallet,index)=>
                                        <WalletsItem wallet={wallet} key={index}/>
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
Wallets.contextType= AppContext
export default Wallets
