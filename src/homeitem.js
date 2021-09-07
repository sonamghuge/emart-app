import React from 'react'

class HomeTtem extends  React.Component {
    render() {
        return (
            <div>
                    <div className="card p-5">
                        <h1>{this.props.name}</h1>
                        <h1>{this.props.color}</h1>
                    </div>
                    
            </div>
        )
    }
}

export default HomeTtem
