import React from 'react'
import AppContext from '../AppContext';

class ElectronicsItem extends  React.Component {
   
    render() {
        let {electronic} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.electronic.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{electronic.prod_name}</h4>
                      <p className="card-text">{electronic.brand}</p>
                      <p className="card-text">{electronic.prod_description}</p>

                      <p className="card-text">Model no: {electronic.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${electronic.prod_price}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${electronic.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{electronic.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{electronic.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{electronic.points}</span>
                    </div>
                    
            </div>
        )
    }
}
ElectronicsItem.contextType=AppContext
export default ElectronicsItem
 