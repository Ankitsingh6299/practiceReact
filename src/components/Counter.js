import React,{Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    updateCount(){
        /* this.setState({
            count:this.state.count+1
        },() => {
            console.log("Callback value :",this.state.count)
        }) */
        this.setState(prevState => ({
            count: prevState.count+1
        }))
    }
    updateFive(){
        this.updateCount();
        this.updateCount();
        this.updateCount();
        this.updateCount();
        this.updateCount();
        
    }
    resetCount(){
        this.setState({
            count:0
        })
    }
    render(){
        return(<div>
            <h1>
                {this.state.message}
            </h1>
            <div>Count - {this.state.count}</div>
            <button onClick={() => this.updateCount()}>Increment</button><span>  </span>
            <button onClick={() => this.updateFive()}>Increment 5</button><span>  </span>
            <button onClick={() => this.resetCount()}>Reset</button>
        </div>
                    )
    }
}

export default Counter