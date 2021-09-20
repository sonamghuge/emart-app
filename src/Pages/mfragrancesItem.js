import React from 'react'
import AppContext from '../AppContext';

class MfragrancesItem extends  React.Component {
   
    render() {
        let {mfragrance} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.mfragrance.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{mfragrance.prodName}</h4>
                      <p className="card-text">{mfragrance.brand}</p>
                      <p className="card-text">{mfragrance.prodDescription}</p>

                      <p className="card-text">Model no: {mfragrance.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${mfragrance.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${mfragrance.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{mfragrance.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{mfragrance.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{mfragrance.points}</span>
                    </div>
                    
            </div>
        )
    }
}
MfragrancesItem.contextType=AppContext
export default MfragrancesItem