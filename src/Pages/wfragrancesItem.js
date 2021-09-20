import React from 'react'
import AppContext from '../AppContext';

class WfragrancesItem extends  React.Component {
   
    render() {
        let {wfragrance} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.wfragrance.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{wfragrance.prodName}</h4>
                      <p className="card-text">{wfragrance.brand}</p>
                      <p className="card-text">{wfragrance.prodDescription}</p>

                      <p className="card-text">Model no: {wfragrance.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${wfragrance.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${wfragrance.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{wfragrance.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{wfragrance.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{wfragrance.points}</span>
                    </div>
                    
            </div>
        )
    }
}
WfragrancesItem.contextType=AppContext
export default WfragrancesItem