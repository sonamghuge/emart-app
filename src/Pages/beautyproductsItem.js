import React from 'react'
import AppContext from '../AppContext';

class BeautyproductsItem extends  React.Component {
   
    render() {
        let {beautyproduct} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.beautyproduct.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{beautyproduct.prodName}</h4>
                      <p className="card-text">{beautyproduct.brand}</p>
                      <p className="card-text">{beautyproduct.prodDescription}</p>

                      <p className="card-text">Model no: {beautyproduct.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${beautyproduct.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${beautyproduct.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{beautyproduct.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{beautyproduct.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{beautyproduct.points}</span>
                    </div>
                    
            </div>
        )
    }
}
BeautyproductsItem.contextType=AppContext
export default BeautyproductsItem