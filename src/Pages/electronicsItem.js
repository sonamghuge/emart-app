import React from 'react'
import AppContext from '../AppContext';
import Electronics from './electronics';


class ElectronicsItem extends  React.Component {
   
    render() {
        let {electronic} =this.props;
     
        return (
            
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.electronic.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{electronic.prodPrice}</h4>
                      <p className="card-text">{electronic.brand}</p>
                      <p className="card-text">{electronic.prodDescription}</p>

                      <p className="card-text">Model no: {electronic.modelNo}</p>
               
                      <h5 className="card-text">Product Price:<small>${electronic.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${electronic.primePrice}</small></h5>
                      <span className="card-text"><small>Discount: </small>{electronic.Discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{electronic.prodQuantity}</span>
                      <span className="card-text"><small>Pointes: </small>{electronic.Points}</span>
                    </div>
                    
            </div>
        )
    }
}
ElectronicsItem.contextType=AppContext
export default ElectronicsItem
 