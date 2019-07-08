import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
       return {
           backgroundColor: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px dotted #ccc',
           textDecoration: this.props.todo.completed ? 'line-through' : 'none'
       }
    };

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onClick={this.props.markComplete.bind(this, id)}/> {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

// Prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
};

//Styles
const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 10px',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem