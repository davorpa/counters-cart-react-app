import React, { Component } from 'react';

class Counter extends Component {

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
                    onClick={ () => this.props.onIncrement(this.props.data) }
                >
                    Increment
                </button>
                <button
                    className="btn btn-secondary btn-sm m-1"
                    disabled={ this.props.data.value === 0 }
                    onClick={ () => this.props.onDecrement(this.props.data) }
                >
                    Decrement
                </button>
                { this.props.onDelete && (
                    <button
                        className="btn btn-danger btn-sm m-2"
                        onClick={ () => this.props.onDelete(this.props.data) }
                    >
                        Delete
                    </button>
                )}
            </div>
        );
    }

    getComponentClassName() {
        return "counters-item";
    }

    getBadgeClassName() {
        const classes = ["badge"];
        classes.push(this.props.data.value === 0 ? "badge-warning" : "badge-primary");
        classes.push("m-2");
        return classes.join(" ");
    }

    formatValue() {
        const { value } = this.props.data;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;