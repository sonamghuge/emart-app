import React from 'react'
import AppContext from '../AppContext';

class BadmintonItem extends  React.Component {
   
    render() {
        let {badminton} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.badminton.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{badminton.prodName}</h4>
                      <p className="card-text">{badminton.brand}</p>
                      <p className="card-text">{badminton.prodDescription}</p>

                      <p className="card-text">Model no: {badminton.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${badminton.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${badminton.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{badminton.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{badminton.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{badminton.points}</span>
                    </div>
                    
            </div>
        )
    }
}
BadmintonItem.contextType=AppContext
export default BadmintonItem