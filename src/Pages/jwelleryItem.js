import React from 'react'
import AppContext from '../AppContext';

class JwelleryItem extends  React.Component {
   
    render() {
        let {jwellery} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.jwellery.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{jwellery.prodName}</h4>
                      <p className="card-text">{jwellery.brand}</p>
                      <p className="card-text">{jwellery.prodDescription}</p>

                      <p className="card-text">Model no: {jwellery.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${jwellery.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${jwellery.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{jwellery.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{jwellery.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{jwellery.points}</span>
                    </div>
                    
            </div>
        )
    }
}
JwelleryItem.contextType=AppContext
export default JwelleryItem