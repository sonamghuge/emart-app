import React from 'react'
import AppContext from '../AppContext';

class ReferigeratorItem extends  React.Component {
   
    render() {
        let {referigerator} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.referigerator.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{referigerator.prodName}</h4>
                      <p className="card-text">{referigerator.brand}</p>
                      <p className="card-text">{referigerator.prodDescription}</p>

                      <p className="card-text">Model no: {referigerator.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${referigerator.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${referigerator.primePrice}</small></h5>
                      <span className="card-text"><small>Discount: </small>{referigerator.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{referigerator.prodQuantity}</span>
                      <span className="card-text"><small>Pointes: </small>{referigerator.points}</span>
                    </div>
                    
            </div>
        )
    }
}
ReferigeratorItem.contextType=AppContext
export default ReferigeratorItem