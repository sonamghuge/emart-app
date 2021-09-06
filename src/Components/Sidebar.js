import React from "react";
import {Link} from 'react-router-dom'

class Sidebar extends React.Component{
    render(){
        return(
            <div>
                <div className="card p-3">
                    <h5>My CATAGORIES</h5>
                    <ul className="list-unstyled p-0 m-0">
                        <li>
                            <Link to="/fashions">
                                <div className="d-inline-flex">
                                    <div className="icon-wrap">
                                        <i className="header-icon fas fa-tshirt"></i>
                                    </div>
                                    <div className="text-wrap">
                                        Fashion
                                    </div>
                                </div>    
                            </Link>
                        </li>

                        <li>
                            <Link to="/homeappliance">
                                <div className="d-inline-flex">
                                    <div className="icon-wrap">
                                        <i className="header-icon fas fa-home"></i>
                                    </div>
                                    <div className="text-wrap">
                                        Home Appliances
                                    </div>
                                </div>    
                            </Link>
                        </li>

                        <li>
                            <Link to="/electronics">
                                <div className="d-inline-flex">
                                    <div className="icon-wrap">
                                        <i className="header-icon fas fa-mobile-alt"></i>
                                    </div>
                                    <div className="text-wrap">
                                        Electronics
                                    </div>
                                </div>    
                            </Link>
                        </li>

                        <li>
                            <Link to="/sports">
                                <div className="d-inline-flex">
                                    <div className="icon-wrap">
                                        <i className="header-icon fas fa-ball"></i>
                                    </div>
                                    <div className="text-wrap">
                                        Sports
                                    </div>
                                </div>    
                            </Link>
                        </li>

                        <li>
                            <Link to="/womenacc">
                                <div className="d-inline-flex">
                                    <div className="icon-wrap">
                                        <i className="header-icon fas fa-ring"></i>
                                    </div>
                                    <div className="text-wrap">
                                        Women Accessories
                                    </div>
                                </div>    
                            </Link>
                        </li>

                        <li>
                            <Link to="/menacc">
                                <div className="d-inline-flex">
                                    <div className="icon-wrap">
                                        <i className="header-icon fas fa-ring"></i>
                                    </div>
                                    <div className="text-wrap">
                                        Men Accessories
                                    </div>
                                </div>    
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;