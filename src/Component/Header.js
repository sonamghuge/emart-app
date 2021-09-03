import React from 'react';

class Body extends React.Component{
    render(){
        return(
            <div>
            <div className ="container">
                <div className="row">
                    <div className="col-2 bg-light">
                        <h1>This is col 2</h1>
                    </div>
                    <div className="col-4 bg-dark">
                        <h1>This is col 4</h1>
                    </div>
                    <div className="col-6 bg-light">
                        <h1>This is col 6</h1>
                    </div>
                  </div>
                  </div>     
            <div class="m-auto bg-dark">
                <h1>Margin and padding</h1>
            </div>
              <ol className="list-unstyled list-inline">
                  <li className="list-inline-item">home</li>
                  <li className="list-inline-item">about</li>
                  <li className="list-inline-item">contact</li>
                  <li className="list-inline-item">blog</li>
              </ol>
              </div>  
              
        )
    }
}
export default Body;