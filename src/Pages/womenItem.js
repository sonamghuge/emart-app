import React from 'react'
import AppContext from '../AppContext';

class WomenItem extends  React.Component {
   
    render() {
        let {women} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.women.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{women.prod_name}</h4>
                      <p className="card-text">{women.brand}</p>
                      <p className="card-text">{women.prod_description}</p>

                      <p className="card-text">Model no: {women.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${women.prod_price}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${women.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{women.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{women.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{women.points}</span>
                    </div>
                    
            </div>
        )
    }
}
WomenItem.contextType=AppContext
export default WomenItem
 