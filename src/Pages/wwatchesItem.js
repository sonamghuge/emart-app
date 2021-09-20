import React from 'react'
import AppContext from '../AppContext';

class WwatchesItem extends  React.Component {
   
    render() {
        let {wwatche} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.wwatche.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{wwatche.prodName}</h4>
                      <p className="card-text">{wwatche.brand}</p>
                      <p className="card-text">{wwatche.prodDescription}</p>

                      <p className="card-text">Model no: {wwatche.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${wwatche.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${wwatche.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{wwatche.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{wwatche.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{wwatche.points}</span>
                    </div>
                    
            </div>
        )
    }
}
WwatchesItem.contextType=AppContext
export default WwatchesItem