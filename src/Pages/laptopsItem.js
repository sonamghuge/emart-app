import React from 'react'
import AppContext from '../AppContext';

class LaptopsItem extends  React.Component {
   
    render() {
        let {laptop} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.laptop.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{laptop.prodName}</h4>
                      <p className="card-text">{laptop.brand}</p>
                      <p className="card-text">{laptop.prodDescription}</p>

                      <p className="card-text">Model no: {laptop.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${laptop.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${laptop.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{laptop.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{laptop.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{laptop.points}</span>
                    </div>
                    
            </div>
        )
    }
}
LaptopsItem.contextType=AppContext
export default LaptopsItem