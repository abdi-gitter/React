import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: this.props.initialCount
        }
    }

    increment = (e)=>{
        console.log(e.target)
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    decrement = (e)=>{
        console.log(e.target)
        this.setState({
            count: this.state.count - 1
        })
        console.log(this.state.count)
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter