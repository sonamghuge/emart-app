import React from 'react'
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom'
//import Home from './Home'

export default function RoutesExample() {
    return (
        <Router>
            <div>
                <ul>
                    {/* temp */}
                    <li>
                        <Link to="/a">Home1</Link>
                    </li>
                    {/* temp */}

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                                      

                    <li>
                        <Link to="/About">About</Link>
                    </li>

                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>   
                </ul>
                
                <switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/About"><About/></Route>
                    <Route path= "/Contact"><Contact/></Route>
                </switch>
            </div>
        </Router>
    )
}
function Home(){
        return(
            <h1>This is my Home</h1>
        )
}
function About(){
        return(
            <h1>This is my About</h1>
        )
}
function Contact(){
        return(
            <h1>This is my Contact</h1>
        )
}



