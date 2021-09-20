import React from 'react'
import AppContext from '../AppContext';

class WashingmachineItem extends  React.Component {
   
    render() {
        let {washingmachine} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.washingmachine.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{washingmachine.prodName}</h4>
                      <p className="card-text">{washingmachine.brand}</p>
                      <p className="card-text">{washingmachine.prodDescription}</p>

                      <p className="card-text">Model no: {washingmachine.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${washingmachine.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${washingmachine.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{washingmachine.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{washingmachine.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{washingmachine.points}</span>
                    </div>
                    
            </div>
        )
    }
}
WashingmachineItem.contextType=AppContext
export default WashingmachineItem