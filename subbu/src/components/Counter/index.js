import { Component } from "react"; 
import "./index.css"

class Counter extends Component{ 
    state={count:0} 
    onIncreament=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    } 
    onDecreament=()=>{
        this.setState(prevState=>{
            return {count:prevState.count-1}
        })
    }
    render(){ 
        const {count}=this.state

        return(
            <div className="bg-container">
                <h1 className="heading">Counter Application</h1> 
                <p className="count">{count}</p> 
                
                <div> 
                    <button className="button1" onClick={this.onIncreament}>Increase</button> 
                    <button className="button2" onClick={this.onDecreament}>Decrease</button>
                </div>



            </div> 
        )
    }
} 
export default Counter