import React from 'react'
import AppContext from '../AppContext';

class MwatchesItem extends  React.Component {
   
    render() {
        let {mwatche} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.mwatche.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{mwatche.prodName}</h4>
                      <p className="card-text">{mwatche.brand}</p>
                      <p className="card-text">{mwatche.prodDescription}</p>

                      <p className="card-text">Model no: {mwatche.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${mwatche.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${mwatche.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{mwatche.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{mwatche.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{mwatche.points}</span>
                    </div>
                    
            </div>
        )
    }
}
MwatchesItem.contextType=AppContext
export default MwatchesItem