import React from "react";

class Did extends React.Component{
        constructor(props){
            super(props);
            this.state={date:new Date()}
        }

        componentDidMount(){
            this.timerId=setInterval(()=>this.tick(),1000);
            console.log(" child time componentdidmount")
        }
        componentWillUnmount(){
            clearInterval(this.timerId)
            console.log(" child clear Didwillunmount")
        }
        tick(){
            this.setState({
                date:new Date()
            })
        }
    render(){
        console.log("child render")
        return(
            <div>
                <h1>clock</h1>
               <h2>{this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.componentWillUnmount.bind(this)}>stop</button>
            </div>
        )
    }
}
export default Did;