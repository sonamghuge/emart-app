import React from 'react'

class HomeTtem extends  React.Component {
   
    render() {
        let {product} =this.props;
        return (
            <div className="col-sm-3 mb-4">
                    <div className="card p-3">
                    <div className="text-center">
                          <img className="img-fluid" src={this.props.product.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{product.prod_name}</h4>
                      <p className="card-text">{product.brand}</p>
                      <p className="card-text">{product.prod_description}</p>

                      <p className="card-text">Model no: {product.model_no}</p>
               
                      <h5 className="card-text">Product Price:<small>${product.prod_price}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${product.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{product.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{product.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{product.points}</span>
                    </div>
                    
            </div>
        )
    }
}

export default HomeTtem 
 