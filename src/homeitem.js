import React from 'react'

class HomeTtem extends  React.Component {
    render() {
        return (
            <div className="col-sm-4">
                    <div className="card">
                    <div className="">
                          <img className="img-fluid" src={this.props.product.pImagePath} alt=""/>
                    </div>
                      <hr/> 
                      <h4 className="card-title">{this.props.product.prod_name}</h4>
                      <p className="card-text">{this.props.product.brand}</p>
                      <p className="card-text">{this.props.product.prod_description}</p>

                      <p className="card-text">Model no: {this.props.product.model_no}</p>
                      <p className="card-text">{this.props.product.prod_description}</p>
                      <h5 className="card-text">Product Price:<small>${this.props.product.prod_price}</small></h5>
                      <h5 className="card-text">Prime Price:<small>${this.props.product.prime_price}</small></h5>
                      <span className="card-text"><small>Discount: </small>{this.props.product.discount}</span>
                      <span className="card-text"><small>Available Quantity: </small>{this.props.product.prod_quantity}</span>
                      <span className="card-text"><small>Pointes: </small>{this.props.product.points}</span>
                    </div>
                    
            </div>
        )
    }
}

export default HomeTtem 
 