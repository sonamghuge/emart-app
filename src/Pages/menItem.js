import React from 'react'
import AppContext from '../AppContext';

class MenItem extends  React.Component {
   
    render() {
        let {men} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.men.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{men.prod_name}</h4>
                      <p className="card-text">{men.brand}</p>
                      <p className="card-text">{men.prod_description}</p>

                      <p className="card-text">Model no: {men.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${men.prod_price}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${men.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{men.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{men.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{men.points}</span>
                    </div>
                    
            </div>
        )
    }
}
MenItem.contextType=AppContext
export default MenItem
 