import React from 'react'
import AppContext from '../AppContext';

class WalletsItem extends  React.Component {
   
    render() {
        let {wallet} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.wallet.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{wallet.prodName}</h4>
                      <p className="card-text">{wallet.brand}</p>
                      <p className="card-text">{wallet.prodDescription}</p>

                      <p className="card-text">Model no: {wallet.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${wallet.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${wallet.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{wallet.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{wallet.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{wallet.points}</span>
                    </div>
                    
            </div>
        )
    }
}
WalletsItem.contextType=AppContext
export default WalletsItem