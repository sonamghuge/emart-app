import React from 'react'
import AppContext from '../AppContext';

class FootballItem extends  React.Component {
   
    render() {
        let {football} =this.props;
        return (
            <div className="col-sm-4 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.football.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{football.prodName}</h4>
                      <p className="card-text">{football.brand}</p>
                      <p className="card-text">{football.prodDescription}</p>

                      <p className="card-text">Model no: {football.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${football.prodPrice}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${football.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{football.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{football.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{football.points}</span>
                    </div>
                    
            </div>
        )
    }
}
FootballItem.contextType=AppContext
export default FootballItem