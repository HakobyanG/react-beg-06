import React from 'react'
import AddNewTask from './AddNewTask'

class ToDo extends React.Component {
    state={
        inputValue:""
    }
    handleSubmit =(value)=>{
        console.log("value",value)
    }
    render() {
        return (
            <div>
                <h1>HomeWork</h1>
               <AddNewTask 
               handleSubmit={this.handleSubmit}
               />

            </div>
        )
    }
}
export default ToDo;
         