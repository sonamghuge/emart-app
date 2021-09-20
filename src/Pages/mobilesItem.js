import React from 'react'
import AppContext from '../AppContext';

class MobilesItem extends  React.Component {
   
    render() {
        let {mobile} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.mobile.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{mobile.prodName}</h4>
                      <p className="card-text">{mobile.brand}</p>
                      <p className="card-text">{mobile.prodDescription}</p>

                      <p className="card-text">Model no: {mobile.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${mobile.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${mobile.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{mobile.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{mobile.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{mobile.points}</span>
                    </div>
                    
            </div>
        )
    }
}
MobilesItem.contextType=AppContext
export default MobilesItem