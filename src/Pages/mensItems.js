import React from 'react'
import AppContext from '../AppContext';

class MensItems extends  React.Component {
   
    render() {
        let {men} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.men.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{men.prodName}</h4>
                      <p className="card-text">{men.brand}</p>
                      <p className="card-text">{men.prodDescription}</p>

                      <p className="card-text">Model no: {men.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${men.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${men.primePrice}</small></h5>
                      <span className="card-text"><small>Discount: </small>{men.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{men.prodQuantity}</span>
                      <span className="card-text"><small>Pointes: </small>{men.points}</span>
                    </div>
                    
            </div>
        )
    }
}
MensItems.contextType=AppContext
export default MensItems
 