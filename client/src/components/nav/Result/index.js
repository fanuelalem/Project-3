import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        console.log(this.props,'result props')
        return (
            <div style={{margin:'200px 0 0 0'}}>
                <h3>{this.props.result.name}</h3>
            </div>
        )
    }
}
