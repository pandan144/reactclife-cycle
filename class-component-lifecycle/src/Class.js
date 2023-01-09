import React from "react";
import Did from "./Did";
//import Dele from "./Dele";

class Class extends React.Component{
    constructor(){
        super();
        this.state={count :0}
        console.log("constructor")
    }
    handleReset(){
        this.setState={count:null}
    }
    componentDidMount(){
        console.log("componentDidMount")
    }

   /* componentDidUpdate(prevProps,prevState){
        console.log("App counter update");
        console.log("App"prevProps);
        console.log("App "prevState)
    }*/

    increment(){
        let count=this.state.count
        this.setState({count : count+=1})
    }

    decrement(){
        let count=this.state.count
        this.setState({count : count-=1})
    }

    render(){
        console.log("Render")
        return(
            <div>
                <h1>class life cycle</h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.increment.bind(this)}>increment</button>
                <button onClick={this.decrement.bind(this)}>decrement</button>
                <button onClick={this.handleReset.bind(this)}>reset</button>
                <Did />
            </div>
        )
    }
}

export default Class