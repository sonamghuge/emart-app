import React from 'react'
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom'
import Home from './Home'

export function Routes() {
    return (
        <Router>
            <div>
                <ul>
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
                    <Router path="/"><Home/></Router>
                    <Router path="/About"><About/></Router>
                    <Router path= "/Contact"><Contact/></Router>
                </switch>
            </div>
        </Router>
    )
}
function Home(){
return(){
    <h1>This is my home</h1>
}
}
// export default Routes


