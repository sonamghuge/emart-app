import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Fashions from './Pages/fashions'
import Homes from './Pages/homes'
import Electronics from './Pages/electronics'
import Sports from './Pages/sports'
import Womens from './Pages/womens'
import Mens from './Pages/mens'
import Kids from './Pages/kids'
import AppContext from './AppContext'
import Television from './Pages/television'
import Referigerator from './Pages/referigerator'
import Washingmachine from './Pages/washingmachine'
import Mobiles from './Pages/mobiles'
import Cameras from './Pages/cameras'
import Laptops from './Pages/laptops'
import Cricket from './Pages/cricket'
import Football from './Pages/football'
import Badminton from './Pages/badminton'
import Wwatches from './Pages/wwatches'
import Wfragrances from './Pages/wfragrances'
import Beautyproducts from './Pages/beautyproducts'
import Jwellery from './Pages/jwellery'
import Mwatches from './Pages/mwatches'
import Mfragrances from './Pages/mfragrances'
import Wallets from './Pages/wallets'




import { getProducts , getFashions,getMwatches,getMfragrances,getWallets, getHome,getJwellery , getElectronics , getSport , getWomens, getMens, getKids, getTelevision,getReferigerator,getWashingmachine,getCameras,getLaptops,getMobiles, getBadminton, getFootball, getCricket,getBeautyproducts,getWwatches,getWfragrances,} from './repo'


class Routes extends React.Component {

    constructor() {
        super()
    
        this.state = {
            products:[],
            fashions:[],
            home:[],
            electronics:[],
            sport:[],
            womens:[],
            Mens:[],
            kid:[],
            television:[],
            referigerator:[],
            washingmachine:[],
            mobiles:[],
            laptops:[],
            cameras:[],
            cricket:[],
            football:[],
            badminton:[],
            wwatches:[],
            wfragrances:[],
            beautyproducts:[],
            jwellery:[],
            mwatches:[],
            mfragrances:[],
            wallets:[]
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

        getWomens().then((womens)=>{
            this.setState({
                womens
            })
        })

        getMens().then((mens)=>{
            this.setState({
                mens
            })
        })

        getKids().then((kid)=>{
            this.setState({
                kid
            })
        })

        getTelevision().then((television)=>{
            this.setState({
                television
            })
        })

        getReferigerator().then((referigerator)=>{
            this.setState({
                referigerator
            })
        })

        getWashingmachine().then((washingmachine)=>{
            this.setState({
                washingmachine
            })
        })

        getMobiles().then((mobiles)=>{
            this.setState({
                mobiles
            })
        })

        getLaptops().then((laptops)=>{
            this.setState({
                laptops
            })
        })

        getCameras().then((cameras)=>{
            this.setState({
               cameras
            })
        })

        getCricket().then((cricket)=>{
            this.setState({
               cricket
            })
        })

        getFootball().then((football)=>{
            this.setState({
               football
            })
        })

        getBadminton().then((badminton)=>{
            this.setState({
               badminton
            })
        })

        getWfragrances().then((wfragrances)=>{
            this.setState({
                wfragrances
            })
        })

        getBeautyproducts().then((beautyproducts)=>{
            this.setState({
               beautyproducts
            })
        })

        getWwatches().then((wwatches)=>{
            this.setState({
                wwatches
            })
        })

        getJwellery().then((jwellery)=>{
            this.setState({
                jwellery
            })
        })

        getMwatches().then((mwatches)=>{
            this.setState({
                 mwatches
            })
        })

        getMfragrances().then((mfragrances)=>{
            this.setState({
                mfragrances
            })
        })

        getWallets().then((wallets)=>{
            this.setState({
                wallets
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
                    <Route path="/kids" component={Kids}></Route>
                    <Route path="/television" component={Television}></Route>
                    <Route path="/referigerator" component={Referigerator}></Route>
                    <Route path="/washingmachine" component={Washingmachine}></Route>
                    <Route path="/mobiles" component={Mobiles}></Route>
                    <Route path="/laptops" component={Laptops}></Route>
                    <Route path="/cameras" component={Cameras}></Route>
                    <Route path="/cricket" component={Cricket}></Route>
                    <Route path="/football" component={Football}></Route>
                    <Route path="/badminton" component={Badminton}></Route>
                    <Route path="/wwatches" component={Wwatches}></Route>
                    <Route path="/wfragrances" component={Wfragrances}></Route>
                    <Route path="/beautyproducts" component={Beautyproducts}></Route>
                    <Route path="/jwellery" component={Jwellery}></Route>
                    <Route path="/mfragrances" component={Mfragrances}></Route>
                    <Route path="/mwatches" component={Mwatches}></Route>
                    <Route path="/wallets" component={Wallets}></Route>


                    

                </Switch>
                </AppContext.Provider>
            </div>
        )
    }
}

export default Routes  