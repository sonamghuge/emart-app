import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Fashions from './Pages/fashions'
import AppContext from './AppContext'
import { getProducts , getFashions} from './repo'

class Routes extends React.Component {

    constructor() {
        super()
    
        this.state = {
            products:[] ,
            fashions:[]
        }
    }
    
    componentDidMount(){

        getProducts().then((products)=>{
            this.setState({
                products
            })
        });

        getFashions().then((fashions)=>{
            this.setState({
                fashions
            })
        })


    }

    render() {
        return (
            <div>
                <AppContext.Provider value={this.state}>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/fashions" component={Fashions}></Route>
                </Switch>
                </AppContext.Provider>
            </div>
        )
    }
}

export default Routes  