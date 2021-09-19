import React from 'react'
import AppContext from '../AppContext';

class HomeItem extends  React.Component {
   
    render() {
        let {home} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.home.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{home.prod_name}</h4>
                      <p className="card-text">{home.brand}</p>
                      <p className="card-text">{home.prod_description}</p>

                      <p className="card-text">Model no: {home.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${home.prod_price}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${home.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{home.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{home.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{home.points}</span>
                    </div>
                    
            </div>
        )
    }
}
HomeItem.contextType=AppContext
export default HomeItem
 