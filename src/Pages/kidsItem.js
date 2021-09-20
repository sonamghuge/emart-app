import React from 'react'
import AppContext from '../AppContext';

class KidsItem extends  React.Component {
   
    render() {
        let {kid} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.kid.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{kid.prodName}</h4>
                      <p className="card-text">{kid.brand}</p>
                      <p className="card-text">{kid.prodDescription}</p>

                      <p className="card-text">Model no: {kid.modelNo}</p>
               
                      <h5 className="card-text">Product Price:<small>${kid.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${kid.primePrice}</small></h5>
                      <span className="card-text"><small>Discount: </small>{kid.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{kid.prodQuantity}</span>
                      <span className="card-text"><small>Pointes: </small>{kid.points}</span>
                    </div>
                    
            </div>
        )
    }
}
KidsItem.contextType=AppContext
export default KidsItem
 