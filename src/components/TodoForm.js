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
            <form onSubmit={this.submitTodo} className="form">
                <input type="text" name="title" onChange={this.handleChange} />
                <input type="text" name="description" onChange={this.handleChange} />
                <input type="submit" value="Add New Todo" />
            </form>
        )
    }
}