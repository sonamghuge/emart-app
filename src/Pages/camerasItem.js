import React from 'react'
import AppContext from '../AppContext';

class CamerasItem extends  React.Component {
   
    render() {
        let {camera} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.camera.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{camera.prodName}</h4>
                      <p className="card-text">{camera.brand}</p>
                      <p className="card-text">{camera.prodDescription}</p>

                      <p className="card-text">Model no: {camera.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${camera.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${camera.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{camera.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{camera.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{camera.points}</span>
                    </div>
                    
            </div>
        )
    }
}
CamerasItem.contextType=AppContext
export default CamerasItem