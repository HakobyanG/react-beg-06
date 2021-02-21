import React, { Component } from 'react'

class AddNewTask extends Component {
    handleChange=(event)=>{
        const {value } = event.target;
        this.setState({
            inputValue:value
        })
    };
    handleSubmit = (value)=>{
        const {handleSubmit} = this.props;
        handleSubmit(this.state.inputValue);
        console.log("value",value)
    }
    render() {
        return (
            <div>
                <input
                  type="text"
                  placeholder="Add Task"
                  onChange={this.handleChange}
                  name="inputValue"
                  />  
                    <button
                    onClick={this.handleSubmit}
                    >
                        Add
                    </button>
            </div>
    
        )
    }
    }
export default AddNewTask;
