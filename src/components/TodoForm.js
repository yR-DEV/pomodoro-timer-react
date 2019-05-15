import React from 'react';

export default class TodoForm extends React.Component {
    state = {
        title: "",
        description: ""
    }


    handleChange  = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    
    submitTodo = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
    }

    render () {
        return (
            <div className="container px-5 pb-4">
                <form onSubmit={this.submitTodo} className="">
                    <input type="text" className="form-group form-control" name="title" value="Todo Item Title Here" onChange={this.handleChange} />
                    <input type="text" className="form-group form-control" name="description" value="Todo Item Description Here" onChange={this.handleChange} />
                    <input type="submit" className="btn btn-info" value="Add New Todo" />
                </form>
            </div>
        )
    }
}