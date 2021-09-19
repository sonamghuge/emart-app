import React from 'react'
import AppContext from '../AppContext';

class FashionItem extends  React.Component {
   
    render() {
        let {fashion} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.fashion.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{fashion.prod_name}</h4>
                      <p className="card-text">{fashion.brand}</p>
                      <p className="card-text">{fashion.prod_description}</p>

                      <p className="card-text">Model no: {fashion.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${fashion.prod_price}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${fashion.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{fashion.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{fashion.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{fashion.points}</span>
                    </div>
                    
            </div>
        )
    }
}
FashionItem.contextType=AppContext
export default FashionItem
 