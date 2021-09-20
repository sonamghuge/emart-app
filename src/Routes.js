import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Fashions from './Pages/fashions'
import Homes from './Pages/homes'
import Electronics from './Pages/electronics'
import Sports from './Pages/sports'
import Womens from './Pages/womens'
import Mens from './Pages/mens'
import AppContext from './AppContext'
import { getProducts , getFashions, getHome , getElectronics , getSport , getWomen, getMen} from './repo'

class Routes extends React.Component {

    constructor() {
        super()
    
        this.state = {
            products:[] ,
            fashions:[] ,
            home:[],
            electronics:[],
            sport:[],
            women:[],
            Men:[]
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

        getHome().then((home)=>{
            this.setState({
                home
            })
        })

        getElectronics().then((electronics)=>{
            this.setState({
                electronics
            })
        })

        getSport().then((sport)=>{
            this.setState({
                sport
            })
        })

        getWomen().then((women)=>{
            this.setState({
                women
            })
        })

        getMen().then((men)=>{
            this.setState({
                men
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
                    <Route path="/homes" component={Homes}></Route>
                    <Route path="/electronics" component={Electronics}></Route>
                    <Route path="/sports" component={Sports}></Route>
                    <Route path="/womens" component={Womens}></Route>
                    <Route path="/mens" component={Mens}></Route>
                </Switch>
                </AppContext.Provider>
            </div>
        )
    }
}

export default Routes  