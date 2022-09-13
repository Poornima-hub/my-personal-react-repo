import React,{Component} from 'react';

class App8 extends Component {
    constructor(props){
        super(props);
        this.state = {
            color_State : "White",
        }
    }
    
    handleClick = () =>{

        this.setState({color_State : this.state.color_State === "White" ? "Black" : "White"}); 
    }
    render(){
        const body_element = document.querySelector("body");
        body_element.style.backgroundColor = this.state.color_State;
        return (
            <button onClick={this.handleClick}>Change Background</button>
        )
    }
}

export default App8;

