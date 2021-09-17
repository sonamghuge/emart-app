import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import AppContext from './AppContext'
import {getAnimals} from './repo'

class Routes extends React.Component {

    constructor() {
        super()
    
        this.state = {
            animals:[] 
        }
    }
    
    componentDidMount(){

        getAnimals().then((animals)=>{
            this.setState({
                animals
            })
        })
    }

    render() {
        return (
            <div>
                <AppContext.Provider value={this.state}>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                </Switch>
                </AppContext.Provider>
            </div>
        )
    }
}

export default Routes  