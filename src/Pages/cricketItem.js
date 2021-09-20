import React from 'react'
import AppContext from '../AppContext';

class CricketItem extends  React.Component {
   
    render() {
        let {cricket} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.cricket.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{cricket.prodName}</h4>
                      <p className="card-text">{cricket.brand}</p>
                      <p className="card-text">{cricket.prodDescription}</p>

                      <p className="card-text">Model no: {cricket.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${cricket.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${cricket.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{cricket.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{cricket.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{cricket.points}</span>
                    </div>
                    
            </div>
        )
    }
}
CricketItem.contextType=AppContext
export default CricketItem