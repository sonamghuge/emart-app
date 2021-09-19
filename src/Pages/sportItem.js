import React from 'react'
import AppContext from '../AppContext';

class SportItem extends  React.Component {
   
    render() {
        let {sport} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.sport.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{sport.prod_name}</h4>
                      <p className="card-text">{sport.brand}</p>
                      <p className="card-text">{sport.prod_description}</p>

                      <p className="card-text">Model no: {sport.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${sport.prod_price}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${sport.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{sport.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{sport.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{sport.points}</span>
                    </div>
                    
            </div>
        )
    }
}
SportItem.contextType=AppContext
export default SportItem
 