import React from 'react'
import AppContext from '../AppContext';

class TelevisionItem extends  React.Component {
   
    render() {
        let {television} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.television.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{television.prodName}</h4>
                      <p className="card-text">{television.brand}</p>
                      <p className="card-text">{television.prodDescription}</p>

                      <p className="card-text">Model no: {television.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${television.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${television.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{television.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{television.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{television.points}</span>
                    </div>
                    
            </div>
        )
    }
}
TelevisionItem.contextType=AppContext
export default TelevisionItem