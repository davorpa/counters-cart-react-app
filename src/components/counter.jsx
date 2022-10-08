import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.value || 0,
    };

    render() {
        return (
            <div className={ this.getComponentClassName() }>
                <span
                    className={ this.getBadgeClassName() }
                >
                    { this.formatValue() }
                </span>
                <button
                    className="btn btn-secondary btn-sm m-1"
                    onClick={ this.handleIncrement }
                >
                    Increment
                </button>
                <button
                    className="btn btn-secondary btn-sm m-1"
                    disabled={ this.state.value === 0 }
                    onClick={ this.handleDecrement }
                >
                    Decrement
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={ this.handleDelete }
                >
                    Delete
                </button>
            </div>
        );
    }

    getComponentClassName() {
        return "counters-item";
    }

    getBadgeClassName() {
        const classes = ["badge"];
        classes.push(this.state.value === 0 ? "badge-warning" : "badge-primary");
        classes.push("m-2");
        return classes.join(" ");
    }

    formatValue() {
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }

    handleIncrement = () => {
        let { value } = this.state;
        value++;
        this.setState({ value });
    }

    handleDecrement = () => {
        let { value } = this.state;
        value = value > 0 ? value - 1 : 0;
        this.setState({ value });
    }

    handleDelete = () => {
        this.props.onDelete && this.props.onDelete(this.props.id);
    }
}

export default Counter;